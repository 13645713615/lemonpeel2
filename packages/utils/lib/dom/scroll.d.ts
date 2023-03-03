export declare type ScrollPosition = {
    left: number;
    top: number;
};
declare type TargetType = Element | Document;
export declare function setScrollPosition<T extends TargetType>(target: T, position: Partial<ScrollPosition>, behavior?: ScrollBehavior): void;
export declare function getScrollPosition<T extends TargetType>(target: T): ScrollPosition;
export {};
