export interface ThrottleOptions {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
}
export interface useThrottleOptions<T> extends ThrottleOptions {
    change?: (value: T) => void;
}
export declare function useThrottle<T>(defaultValue: T, options?: useThrottleOptions<T>): import("vue-demi").Ref<T>;
