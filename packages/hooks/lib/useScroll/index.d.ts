import type { ScrollPosition } from "@lemonpeel2/utils";
import type { BasicTarget } from "../utils";
export declare type UseScrollOptions = {
    shouldUpdate?: (value: ScrollPosition) => boolean;
    eventListenerOptions?: AddEventListenerOptions;
    behavior?: ScrollBehavior;
    wait?: number;
};
declare type TargetType = Element | Document;
declare type Target = BasicTarget<TargetType>;
export declare function useScroll<T extends Target = Document>(target: T, options?: UseScrollOptions): {
    x: import("vue-demi").WritableComputedRef<number>;
    y: import("vue-demi").WritableComputedRef<number>;
};
export {};
