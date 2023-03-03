export interface DebounceOptions {
    wait?: number;
    maxWait?: number;
    leading?: boolean;
    trailing?: boolean;
}
export interface useDebounceOptions<T> extends DebounceOptions {
    change?: (value: T) => void;
}
export declare function useDebounce<T>(defaultValue: T, options?: useDebounceOptions<T>): import("vue-demi").Ref<T>;
