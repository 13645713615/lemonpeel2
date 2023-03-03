import { Plugin } from "../types";
import { ThrottleOptions } from '../../index.ts';
export declare type useThrottlePluginOptions = ThrottleOptions;
export declare function useThrottlePlugin<Data, Params extends any[]>(options?: useThrottlePluginOptions): Plugin<Data, Params>;
