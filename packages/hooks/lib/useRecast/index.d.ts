import type { ComputedRef } from "vue-demi";
import type { MaybeComputedRef, UnionToIntersection } from "../utils";
declare type List<T> = Array<T>;
export declare type Formatter<T, R> = (value: T, index: number, collection: List<T>, key: string) => R;
declare type FormatterCombinationResult<T, I, D, P extends keyof T> = UnionToIntersection<I extends D ? {
    [k in keyof I as I[k] extends undefined ? never : k]: I[k] extends (...args: any[]) => infer R ? R : never;
} : I extends P ? {
    [k in I]: T[k];
} : never>;
export declare const defaultFormat: Formatter<any, any>;
export declare function useRecast<T, R>(collection: MaybeComputedRef<List<T>>, format: (value: T, index: number, collection: List<T>) => R): ComputedRef<List<R>>;
export declare function useRecast<T, K extends string, R>(collection: MaybeComputedRef<List<T>>, iteratees: MaybeComputedRef<Record<K, Formatter<T, R>>>): ComputedRef<List<Record<K, R>>>;
export declare function useRecast<T, K extends string, P extends keyof T, D extends {
    [k in K]?: Formatter<T, any>;
}, I extends P | D>(collection: MaybeComputedRef<T[]>, iteratees: I[]): ComputedRef<FormatterCombinationResult<T, I, D, P>[]>;
export declare function useRecast<T, K extends string, P extends keyof T, R>(collection: MaybeComputedRef<T[]>, iteratees: MaybeComputedRef<P[] | Record<K, Formatter<T, R>>[]>): ComputedRef<Record<K, R>[] & {
    [k in P]: T[k];
}>;
export declare function useRecast<T, K extends string, R>(collection: MaybeComputedRef<List<T>>, iteratees: MaybeComputedRef<K>, format?: Formatter<T, R>): ComputedRef<List<Record<K, R>>>;
export {};
