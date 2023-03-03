import { Formatter } from "../useRecast";
import type { MaybeComputedRef } from "../utils";
declare type OrdersSort = boolean | "asc" | "desc";
interface RecastOptions<K, T, R> {
    key?: K;
    formatter?: Formatter<T, R>;
}
interface SorterOptions<K, R> {
    key?: K;
    sorter?: boolean | ((a: R, b: R) => number);
    sortOrder?: OrdersSort;
    sortMultiple?: boolean;
}
interface FilterOptions<K, R> {
    key?: K;
    filter?: boolean;
    filterValue?: R;
}
export interface UseTableColumn<T, K, R> extends RecastOptions<K, T, R>, SorterOptions<K, R>, FilterOptions<K, R> {
    key: K;
}
export interface UseTableOptions<K, R> {
    onChangeSorte?: (sorter: SorterOptions<K, R>[]) => void;
}
export declare function useTable<T, K extends keyof T, N extends string, R>(data: MaybeComputedRef<T[]>, columns: MaybeComputedRef<UseTableColumn<T, K | N, R>[]>, options?: UseTableOptions<K | N, R>): {
    changefilter(key: N, value?: R): void;
    changeSorter(key: N, orderBy?: OrdersSort): void;
    data: import("vue-demi").ComputedRef<Record<N, R>[]>;
};
export {};
