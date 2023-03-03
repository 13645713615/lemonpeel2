import { ComputedRef } from "vue-demi";
import type { Ref, WatchSource } from "vue-demi";
import type { MaybeComputedRef } from "../utils";
export interface PaginationOptions {
    defaultCurrent?: number;
    defaultPageSize?: number;
    immediate?: boolean;
    pageSlot?: number;
    offsetPage?: number;
    refreshDeps?: (WatchSource<unknown> | object)[];
    updateResetPage?: boolean;
    onChange?(current: number, pageSize: number): void;
    onShowSizeChange?(current: number, pageSize: number): void;
}
export interface PaginationResult<T> {
    data?: ComputedRef<T[]>;
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
export declare function usePagination<T>(target: MaybeComputedRef<number | T[]>, options?: PaginationOptions): PaginationResult<T>;
