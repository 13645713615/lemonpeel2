import { Ref } from "vue-demi";
export interface UseStorageStateOptions {
    expires?: number;
    immediate?: boolean;
    storage?: Storage;
    wait?: number;
}
export declare function useStorageState<T>(localStoragKey: string, defaultValue: T | (() => T), options?: UseStorageStateOptions): Ref<T>;
