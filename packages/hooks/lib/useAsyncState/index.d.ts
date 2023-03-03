import type { UnwrapRef, Ref } from "vue-demi";
export interface UseAsyncStateOptions<D, F extends (...args: any[]) => Promise<D>> {
    shallow?: boolean;
    immediate?: boolean;
    onSuccess?: (data: D) => void;
    onError?: (E: unknown) => void;
    params?: Parameters<F> | (() => Parameters<F>);
}
export interface UseAsyncStateReturn<D, F extends (...args: any[]) => Promise<D>> {
    state: Ref<D> | Ref<UnwrapRef<D>>;
    loading: Ref<boolean>;
    error: Ref<unknown>;
    run(params?: Parameters<F>): Promise<D | undefined>;
}
export declare function useAsyncState<D, F extends (...args: any[]) => Promise<D>>(func: F, defaultValue: D, options?: UseAsyncStateOptions<D, F>): UseAsyncStateReturn<D, F>;
