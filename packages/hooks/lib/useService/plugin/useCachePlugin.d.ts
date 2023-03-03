import type { Plugin } from "../types";
export interface UseCachePluginOptions {
    cacheKey: string;
    cacheTime?: number;
    staleTime?: number;
}
export declare function useCachePlugin<Date, Params extends any[]>(options: UseCachePluginOptions): Plugin<Date, Params>;
