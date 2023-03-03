/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-09 11:12:00
 * @LastEditTime: 2023-03-02 17:16:23
 */

import type { ComputedRef, Ref, ShallowRef } from "vue-demi";

export type MaybeRef<T> = T | Ref<T>

export type MaybeShallowRef<T> = T | ShallowRef<T>

export type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>

export type MaybeComputedRef<T> = MaybeReadonlyRef<T> | MaybeRef<T> | MaybeShallowRef<T>

export type Many<T> = T | ReadonlyArray<T>;

export type PropertyName = string | number | symbol;
/**
 * @name: 去掉对象所有指定类型的属性
 * @msg: 
 * @return {*}
 */
export type ExcludeType<T, V> = { [P in keyof T as T[P] extends V ? never : P]: T[P] };


/**
 * @name: 去掉对象所有never的属性
 * @msg: 
 * @return {*}
 */
export type ExcludeNever<T> = ExcludeType<T, never>

/**
 * @name: 去掉对象所有空的属性
 * @msg: 
 * @return {*}
 */
export type ExcludeNull<T> = ExcludeType<T, undefined | null>


/**
 * @name: 联合类型转换交叉类型
 * @msg: UnionToIntersection<{ a:number } | { b:string } > => { a:number } & { b:string }
 * @param {*} U
 * @return {*} 
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never



