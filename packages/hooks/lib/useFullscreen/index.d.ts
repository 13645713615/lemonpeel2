import type { BasicTarget } from "../utils";
declare type Target = BasicTarget<Element>;
export declare type UseFullscreenOptions = {
    onExit?: () => void;
    onEnter?: () => void;
};
export declare function useFullscreen(target: Target, options?: UseFullscreenOptions): {
    isFullscreen: import("vue-demi").Ref<boolean>;
    isEnabled: import("vue-demi").Ref<boolean>;
    enterFullscreen(): Promise<void>;
    exitFullscreen(): void;
    toggleFullscreen(): void;
};
export {};
