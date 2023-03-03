import { Emiter } from "@lemonpeel2/utils";
import type { ServiceState, PluginHandler } from "./types";
export declare enum HandlerTopic {
    onBefore = "onBefore",
    onRequest = "onRequest",
    onSuccess = "onSuccess",
    onError = "onError",
    onFinally = "onFinally",
    onCancel = "onCancel",
    onMutate = "onMutate"
}
export default class Service<Data, Params extends any[]> {
    target: (...args: Params) => Promise<Data>;
    initState: Partial<ServiceState<Data, Params>>;
    emiter: Emiter<HandlerTopic, Required<PluginHandler<Data, Params>>>;
    state: ServiceState<Data, Params>;
    private abortToken;
    constructor(target: (...args: Params) => Promise<Data>, initState?: Partial<ServiceState<Data, Params>>);
    protected handler<T extends HandlerTopic, H extends Required<PluginHandler<Data, Params>>>(topoc: T, ...args: Parameters<H[T]>): Exclude<ReturnType<H[T]>, void>;
    run(...params: Params): Promise<Data>;
    abort(reason?: any): void;
}
