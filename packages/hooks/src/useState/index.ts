/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-10 16:24:44
 * @LastEditTime: 2023-01-11 17:32:46
 */
import { reactive, readonly } from "vue-demi";
import type { DeepReadonly, UnwrapNestedRefs } from "vue-demi"
import { isFunction, cloneDeep, isArray } from "lodash"

export type SetState<T extends Record<string, any>> = (state: T | null | ((prevState: DeepReadonly<UnwrapNestedRefs<T>>) => T | null)) => void;

export function useState<T extends Record<string, any>>(defaultValue: T): [T, SetState<T>] {

    const state = reactive({ value: defaultValue ?? cloneDeep(defaultValue) }) as { value: T }

    const setState: SetState<T> = function (patch) {
        const newState = isFunction(patch) ? patch(readonly(state.value)) : patch;

        if (!newState) return;
        
        if (isArray(state.value) && isArray(newState)) {

            state.value.length = 0;
            state.value.push(...newState);

        } else {
            
            Object.keys(state.value).forEach((key) => delete state.value[key])
            Object.assign(state.value, newState)
        }
    }

    return [state.value, setState]
}


