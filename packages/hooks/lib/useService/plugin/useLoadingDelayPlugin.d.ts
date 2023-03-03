import type { Plugin } from "../types";
export declare function useLoadingDelayPlugin<Data, Params extends any[]>(options?: {
    delay: number;
}): Plugin<Data, Params>;
