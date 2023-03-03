/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-09 14:29:33
 * @LastEditTime: 2023-03-02 18:38:28
 */

import { noop } from "lodash";
import { computed, ComputedRef, ref, watch, effectScope } from "vue-demi";
import type { Ref, WatchSource } from "vue-demi"
import { resolveUnref } from "../utils";
import type { MaybeComputedRef } from "../utils"

export interface PaginationOptions {
    defaultCurrent?: number,
    defaultPageSize?: number,
    immediate?: boolean,
    pageSlot?: number,
    offsetPage?: number,
    refreshDeps?: (WatchSource<unknown> | object)[],
    updateResetPage?: boolean,
    onChange?(current: number, pageSize: number): void,
    onShowSizeChange?(current: number, pageSize: number): void,
}

export interface PaginationResult<T> {
    data?: ComputedRef<T[]>,
    totalPage?: ComputedRef<number>;
    isPrev?: ComputedRef<boolean>;
    isNext?: ComputedRef<boolean>;
    current: Ref<number>;
    pageSize: Ref<number>;
    showPageItems?: ComputedRef<number[]>;
    isNextMore?: ComputedRef<boolean>;
    isPrevMore?: ComputedRef<boolean>;
    change(page: number, size: number): void;
    changeCurrent(current?: number): void;
    changePageSize(pageSize?: number): void;
    prev(): void;
    next(): void;
}


export function usePagination<T>(target: MaybeComputedRef<number | T[]>, options?: PaginationOptions): PaginationResult<T> {

    const { defaultCurrent = 1, defaultPageSize = 10, onChange = noop, onShowSizeChange = noop, pageSlot = 5, offsetPage = 0, immediate, refreshDeps, updateResetPage = true } = options ?? {}

    const totals = ref<number>(getLength(resolveUnref(target)));

    const current = ref<number>(defaultCurrent)

    const pageSize = ref<number>(defaultPageSize)

    const scope = effectScope().run(() => {

        const midPagerCount = (pageSlot - 1) / 2;

        const data = computed(() => separation<T>(resolveUnref(target), current.value, pageSize.value))

        const totalPage = computed(() => Math.ceil(totals.value / pageSize.value))

        const isPrev = computed(() => current.value > 1);

        const isNext = computed(() => current.value < totalPage.value);

        const isPrevMore = computed(() => totalPage.value > pageSlot + offsetPage && current.value > pageSlot - midPagerCount);

        const isNextMore = computed(() => totalPage.value > pageSlot + offsetPage && current.value < totalPage.value - midPagerCount);

        const showPageItems = computed<number[]>(() => {
            const array: number[] = []

            if (isPrevMore.value && !isNextMore.value) {
                const startPage = totalPage.value - pageSlot + 1;
                for (let i = startPage; i <= totalPage.value; i++) {
                    array.push(i - offsetPage);
                }
            } else if (!isPrevMore.value && isNextMore.value) {
                for (let i = 1; i <= pageSlot; i++) {
                    array.push(i + offsetPage);
                }
            } else if (isPrevMore.value && isNextMore.value) {
                const offset = Math.floor(pageSlot / 2) - 1 + offsetPage;
                for (let i = current.value - offset; i <= current.value + offset; i++) {
                    array.push(i);
                }
            } else {
                for (let i = 1; i < totalPage.value - offsetPage; i++) {
                    array.push(i + offsetPage);
                }
            }

            return array
        })

        watch([current, pageSize], ([page, size]) => {
            if (size != pageSize.value) {
                onShowSizeChange(page, size);
            }
            onChange(page, size);
        }, { immediate })

        watch(() => resolveUnref(target), (value) => {
            totals.value = getLength(value);
            if (updateResetPage) current.value = 1;
        })

        if (refreshDeps) watch(refreshDeps, () => current.value = 1)

        return { showPageItems, totalPage, isNext, isPrev, isNextMore, isPrevMore, data }
    })

    const methods = {
        change(page: number, size: number) {

            page = page <= 0 ? 1 : page;
            size = size <= 0 ? 1 : size;

            const tempTotalPage = Math.ceil(totals.value / size);

            if (page > tempTotalPage) {
                page = Math.max(1, tempTotalPage);
            }

            current.value = page;
            pageSize.value = size;
        },
        changeCurrent(current?: number) {
            if (current != undefined)
                methods.change(current, pageSize.value);
        },
        changePageSize(pageSize?: number) {
            if (pageSize != undefined)
                methods.change(current.value, pageSize);
        },
        prev() {
            if (scope?.isPrev.value) current.value -= 1
        },
        next() {
            if (scope?.isNext.value) current.value += 1
        }
    }

    return { current, pageSize, ...scope, ...methods }
}

function getLength(target: number | any[] = []): number {
    return Array.isArray(target) ? target.length : target
}

function separation<T>(target: unknown, pageIndex: number, pageSize: number): T[] {
    return Array.isArray(target) ? target.slice((pageIndex - 1) * pageSize, pageIndex * pageSize) : []
}