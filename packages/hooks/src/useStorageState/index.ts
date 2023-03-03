/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-06 10:15:03
 * @LastEditTime: 2023-02-03 17:30:41
 */

import { Ref, ref, watch, effectScope } from "vue-demi";
import { isFunction, debounce } from "lodash"

export interface UseStorageStateOptions {
    expires?: number,
    immediate?: boolean,
    storage?: Storage,
    wait?: number
}

interface StorageState<T> {
    expires?: number
    value: T
}

export function useStorageState<T>(localStoragKey: string, defaultValue: T | (() => T), options?: UseStorageStateOptions): Ref<T> {

    const { storage = localStorage, expires = 0, immediate = false, wait = 300 } = options ?? {}

    function getStorageState(): T {
        const raw = storage.getItem(localStoragKey);
        if (raw) {
            try {
                const state = JSON.parse(raw) as StorageState<T>;
                if (!state.expires || state.expires <= Date.now()) {
                    return state.value
                }
            } catch (error) {

            }
        }
        return isFunction(defaultValue) ? defaultValue() : defaultValue
    }

    function setStorageState(value: T) {
        const state: StorageState<T> = { value };
        if (expires) state.expires = Date.now() + expires;
        storage.setItem(localStoragKey, JSON.stringify(state));
    }

    const state = ref(getStorageState()) as Ref<T>;

    effectScope().run(() => {
        watch(state, debounce(setStorageState, wait, { maxWait: 1500 }), { deep: true, immediate })
    })

    return state
}