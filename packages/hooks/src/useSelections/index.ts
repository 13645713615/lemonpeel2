/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-08 15:53:40
 * @LastEditTime: 2023-02-09 14:16:43
 */

import { reactive, computed, effectScope, ComputedRef, WritableComputedRef } from "vue-demi";
import { MaybeComputedRef, resolveUnref } from "../utils";

type ScopeState<T> = {
    allSelected: WritableComputedRef<boolean>;
    partiallySelected: ComputedRef<boolean>;
    selected: ComputedRef<T[]>
}
interface UeSelectionsMethods<T> {
    isSelected(item: T): boolean;
    select(item: T): void;
    unSelect(item: T): void;
    toggle(item: T): void;
    selectAll(): void;
    unSelectAll(): void;
    toggleAll(): void;
}

export interface UeSelectionsResult<T> extends UeSelectionsMethods<T>, Partial<ScopeState<T>> { }

export function useSelections<T>(items: MaybeComputedRef<T[]>, defaultSelected: T[] = []): UeSelectionsResult<T> {

    const selectedSet = reactive<Set<T>>(new Set(defaultSelected))

    const state = effectScope().run((): ScopeState<T> | undefined => {

        const allSelected = computed<boolean>({
            get() {
                const list = resolveUnref(items);
                return !!list.length && list.every((d) => methods.isSelected(d))
            },
            set(value) {
                value ? methods.selectAll() : methods.unSelectAll();
            }
        });

        const selected = computed<T[]>(() => Array.from(selectedSet))

        const partiallySelected = computed<boolean>(() => selectedSet.size > 0 && !allSelected.value)

        return { allSelected, partiallySelected, selected }
    })

    const methods: UeSelectionsMethods<T> = {
        isSelected(item: T) {
            return selectedSet.has(item)
        },
        select(item: T) {
            selectedSet.add(item)
        },
        unSelect(item: T) {
            selectedSet.delete(item)
        },
        toggle(item: T) {
            methods.isSelected(item) ? methods.unSelect(item) : methods.select(item)
        },
        selectAll() {
            resolveUnref(items).forEach((o) => selectedSet.add(o));
        },
        unSelectAll() {
            resolveUnref(items).forEach((o) => selectedSet.delete(o));
        },
        toggleAll() {
            state?.allSelected.value ? methods.unSelectAll() : methods.selectAll();
        }
    }

    return { ...state, ...methods }
}