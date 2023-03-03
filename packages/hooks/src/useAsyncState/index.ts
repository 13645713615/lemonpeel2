/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-09 10:27:41
 * @LastEditTime: 2023-01-09 16:15:49
 */
import { shallowRef, ref } from "vue-demi"
import type { UnwrapRef, Ref } from "vue-demi"
import { isEmpty, isFunction } from "lodash"

export interface UseAsyncStateOptions<D, F extends (...args: any[]) => Promise<D>> {
    shallow?: boolean,
    immediate?: boolean,
    onSuccess?: (data: D) => void,
    onError?: (E: unknown) => void,
    params?: Parameters<F> | (() => Parameters<F>)
}

export interface UseAsyncStateReturn<D, F extends (...args: any[]) => Promise<D>> {
    state: Ref<D> | Ref<UnwrapRef<D>>
    loading: Ref<boolean>
    error: Ref<unknown>
    run(params?: Parameters<F>): Promise<D | undefined>
}

export function useAsyncState<D, F extends (...args: any[]) => Promise<D>>(func: F, defaultValue: D, options?: UseAsyncStateOptions<D, F>): UseAsyncStateReturn<D, F> {
    const state = options?.shallow ? shallowRef<D>(defaultValue) : ref<D>(defaultValue);

    const loading = ref<boolean>(false);

    const error = ref<unknown | undefined>(undefined);

    async function run(params?: Parameters<F>): Promise<D | undefined> {
        if (loading.value) return;
        loading.value = true;
        error.value = undefined;
        try {
            if (isEmpty(params)) {
                params = ((isFunction(options?.params) ? options!.params() : options?.params) || []) as Parameters<F>
            }
            state.value = (await func.apply(null, params!)) ?? defaultValue;
            options?.onSuccess?.(state.value)
        } catch (e) {
            state.value = defaultValue;
            error.value = e;
            options?.onError?.(e);
            throw e;
        } finally {
            loading.value = false;
        }
        return state.value
    }

    if (options?.immediate) run();

    return { state, loading, error, run }
}