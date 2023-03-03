import type { MaybeComputedRef, MaybeRef, Many } from "../utils";
import type { ComputedRef } from "vue-demi";
export declare type OrdersSort = MaybeRef<boolean | "asc" | "desc">;
declare type UseSorterIterator<T, R> = (value: T[keyof T], key: string, collection: T) => R;
declare type UseSorterOrders<T, K extends keyof T> = OrdersSort | ((a: T[K], b: T[K]) => number);
export declare function useSorter<T>(collection: MaybeComputedRef<T[]>, iteratees?: UseSorterIterator<T, unknown>): ComputedRef<Array<T>>;
export declare function useSorter<T, K extends keyof T>(collection: MaybeComputedRef<T[]>, iteratees?: MaybeRef<K>, orders?: MaybeRef<UseSorterOrders<T, K>>): ComputedRef<Array<T>>;
export declare function useSorter<T, K extends keyof T>(collection: MaybeComputedRef<T[]>, iteratees?: MaybeRef<Many<K>>, orders?: MaybeRef<Many<UseSorterOrders<T, K>>>): ComputedRef<Array<T>>;
export {};
