import type { Ref } from "vue-demi";
import type { DebounceOptions } from '../index.ts';
export interface UseModelOptions extends DebounceOptions {
    immediate?: boolean;
    deep?: boolean;
}
export declare function useModel<T>(getter: () => T, emitter?: (value: T) => void, options?: UseModelOptions): Ref<T>;
