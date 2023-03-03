/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-15 17:56:53
 * @LastEditTime: 2023-03-02 18:38:15
 */

import { forIn, isFunction, isPlainObject, isString } from "lodash";
import { computed } from "vue-demi";
import { resolveUnref } from "../utils";
import type { ComputedRef } from "vue-demi";
import type { MaybeComputedRef ,UnionToIntersection} from "../utils";

type List<T> = Array<T>;

export type Formatter<T, R> = (value: T, index: number, collection: List<T>, key: string) => R;

type FormatterCombinationResult<T, I, D, P extends keyof T> = UnionToIntersection<
  I extends D ? { [k in keyof I as I[k] extends undefined ? never : k]: I[k] extends (...args:any[]) => infer R ? R : never }
  : I extends P ? { [k in I]: T[k] } : never
>

export const defaultFormat: Formatter<any, any> = (value, _index, _collection, key) => value[key]

export function useRecast<T, R>(collection: MaybeComputedRef<List<T>>, format: (value: T, index: number, collection: List<T>) => R): ComputedRef<List<R>>
export function useRecast<T, K extends string, R>(collection: MaybeComputedRef<List<T>>, iteratees: MaybeComputedRef<Record<K, Formatter<T, R>>>): ComputedRef<List<Record<K, R>>>
export function useRecast<T, K extends string, P extends keyof T, D extends { [k in K]?: Formatter<T, any> }, I extends P | D>(collection: MaybeComputedRef<T[]>, iteratees: I[]): ComputedRef<FormatterCombinationResult<T, I, D, P>[]>
export function useRecast<T, K extends string, P extends keyof T, R>(collection: MaybeComputedRef<T[]>, iteratees: MaybeComputedRef<P[] | Record<K, Formatter<T, R>>[]    >): ComputedRef<Record<K, R>[] & { [k in P]:T[k] }>
export function useRecast<T, K extends string, R>(collection: MaybeComputedRef<List<T>>, iteratees: MaybeComputedRef<K>, format?: Formatter<T, R>): ComputedRef<List<Record<K, R>>>
export function useRecast<T, R>(collection: MaybeComputedRef<List<T>>, iteratees: MaybeComputedRef<any>, format?: Formatter<T, R>) {

  const criteria = computed(() => {

    let iterateesRef = resolveUnref(iteratees)

    if (isFunction(iterateesRef)) {

      return iterateesRef

    } else if (isPlainObject(iterateesRef)) {

      iterateesRef = [iterateesRef]

    } else if(isString(iterateesRef)){

      iterateesRef = [{ [iterateesRef]: format }]

    }
    
    return new Map((iterateesRef as Array<string | object>).reduce<[string, Formatter<T, R>][]>((prev, iteratee) => {
      
      isPlainObject(iteratee) ? forIn(iteratee, (value, key) => prev.push([key, value])) : prev.push([iteratee as string, defaultFormat]);

      return prev
    }, []))
  })

  

  return computed(() => {

    const result = [], collectionRef = resolveUnref(collection), length = collectionRef.length;
    
    if (isFunction(criteria.value))
      return collectionRef.map((iteratee, index) => (criteria.value as (...a: any[]) => any)(iteratee, index, collection));


    let index = -1
      
    while (++index < length) {
      const rowData: Record<string, any> = {}, value = collectionRef[index];

      criteria.value.forEach((format, key) => rowData[key] = format(value, index, collectionRef, key))

      result[index] = rowData;
    }

    return result
  })
}
