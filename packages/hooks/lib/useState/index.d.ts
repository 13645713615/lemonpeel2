import type { DeepReadonly, UnwrapNestedRefs } from "vue-demi";
export declare type SetState<T extends Record<string, any>> = (state: T | null | ((prevState: DeepReadonly<UnwrapNestedRefs<T>>) => T | null)) => void;
export declare function useState<T extends Record<string, any>>(defaultValue: T): [T, SetState<T>];
