import type { ComponentPublicInstance, ShallowReactive } from "vue-demi";
declare type UseRefListResult<T> = {
    refList: ShallowReactive<Array<T | null>>;
    onRefList: (index: number) => (ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void;
};
export declare function useRefList<T extends Element | ComponentPublicInstance>(): UseRefListResult<T>;
export {};
