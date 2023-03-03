import { DebounceOptions } from "../../useDebounce";
import { Plugin } from "../types";
export declare type UseDebouncePluginOptions = DebounceOptions;
export declare function useDebouncePlugin<Data, Params extends any[]>(options?: UseDebouncePluginOptions): Plugin<Data, Params>;
