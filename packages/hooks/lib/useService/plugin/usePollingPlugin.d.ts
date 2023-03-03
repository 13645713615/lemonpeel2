import type { Plugin } from "../types";
export interface UsePollingPluginOptions {
    interval: number;
    errorRetryCount?: number;
    whenHidden?: boolean;
}
export declare function usePollingPlugin(options: UsePollingPluginOptions): Plugin;
