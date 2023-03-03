/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-15 09:14:28
 * @LastEditTime: 2023-03-02 18:38:22
 */

import { resolveUnref } from "../utils";
import { computed, unref } from "vue-demi"
import type { MaybeComputedRef, MaybeRef,Many } from "../utils";
import type { ComputedRef } from "vue-demi"
import { orderBy } from "@lemonpeel2/utils";

export type OrdersSort = MaybeRef<boolean | "asc" | "desc">

 type UseSorterIterator<T, R> = (value: T[keyof T], key: string, collection: T) => R;
 type UseSorterOrders<T, K extends keyof T> = OrdersSort | ((a: T[K], b: T[K]) => number)

export function useSorter<T>(collection: MaybeComputedRef<T[]>, iteratees?: UseSorterIterator<T, unknown>): ComputedRef<Array<T>>
export function useSorter<T, K extends keyof T>(collection: MaybeComputedRef<T[]>, iteratees?: MaybeRef<K>, orders?: MaybeRef<UseSorterOrders<T, K>>): ComputedRef<Array<T>>
export function useSorter<T, K extends keyof T>(collection: MaybeComputedRef<T[]>, iteratees?: MaybeRef<Many<K>>, orders?: MaybeRef<Many<UseSorterOrders<T, K>>>): ComputedRef<Array<T>>
export function useSorter<T>(collection: MaybeComputedRef<T[]>, iteratees?: MaybeRef<Many<any>>, orders?: MaybeRef<Many<any>>): ComputedRef<Array<T>> {

    return computed(() => orderBy(resolveUnref(collection), unref(iteratees), unref(orders)) ) as any
}
