import type { Ref } from "vue-demi";
declare type TargetValue<T> = T | undefined | null;
export declare type TargetType = HTMLElement | Element | Window | Document;
export declare type BasicTarget<T extends TargetType = Element> = (() => TargetValue<T>) | TargetValue<T> | Ref<TargetValue<T>>;
export declare function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T): TargetValue<T>;
export {};
