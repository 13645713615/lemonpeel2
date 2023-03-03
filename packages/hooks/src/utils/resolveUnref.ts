/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-09 11:13:18
 * @LastEditTime: 2023-03-02 18:49:34
 */

import { isFunction } from "lodash";
import { unref } from "vue-demi";
import type { MaybeComputedRef } from "./utils";

export function resolveUnref<T>(value: MaybeComputedRef<T>): T {

    return isFunction(value) ? value() : unref<T>(value)
    
}