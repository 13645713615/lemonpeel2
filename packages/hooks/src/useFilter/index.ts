/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-15 09:14:28
 * @LastEditTime: 2023-03-02 18:38:08
 */

import { resolveUnref } from "../utils";
import { computed, unref } from "vue-demi"
import { filter } from "lodash";
import type { MaybeComputedRef, MaybeRef } from "../utils";
import type { ComputedRef } from "vue-demi"
import type { List, ListIterateeCustom } from "lodash";


export function useFilter<T>(collection: MaybeComputedRef<List<T>>, predicate?: MaybeRef<ListIterateeCustom<T, boolean>>): ComputedRef<T[]> {
    
    return computed(() => filter(resolveUnref(collection), unref(predicate)))
}



