/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-12 15:43:32
 * @LastEditTime: 2023-03-02 18:31:20
 */
import type { Ref } from "vue-demi";
import Service from "./Service"
import { HandlerTopic } from "./Service"

export interface ServiceState<Data, Params extends any[]> {
    loading: boolean,
    data: Data | undefined,
    error: unknown | undefined,
    params: Params | undefined
}

export type ServiceHandleTopic = typeof HandlerTopic;

export type Target<Data, Params extends any[]> = (...args: Params) => Promise<Data>

export interface Options<Data = any, Params extends any[] = any> extends Omit<PluginHandler<Data, Params>, "onRequest" | "onCancel" | "onMutate" | "onBefore"> {
    immediate?: boolean,
    initialValue?: Data,
    params?: Params | (() => Params),
    onBefore?: (params: Params) => void
}

export type Plugin<Data = any, Params extends any[] = any> = (service: Service<Data, Params>) => void;

export interface PluginHandler<Data, Params extends any[]> {
    onBefore?: (params: Params) => ({ stopNow?: boolean; returnNow?: boolean; } & Partial<ServiceState<Data, Params>>) | void;
    onRequest?: (service: (...args: Params) => Promise<Data>, params: Params) => { servicePromise?: Promise<Data>; };
    onSuccess?: (data: Data, params: Params) => void;
    onError?: (e: Error, params: Params) => void;
    onFinally?: (params: Params, data?: Data, e?: Error) => void;
    onCancel?: (reason?: any) => void;
    onMutate?: (data: Data) => void;
}

export interface Methods<Data, Params extends any[]> {
    abort(reason?: any): void;
    runAsync(...params: Params): Promise<Data>;
    runAsync(param: (params: Params) => Params): Promise<Data>;
    run(...params: Params): void;
    run(param: (params: Params) => Params): void;
    refresh(): void;
    refreshAsync(): Promise<Data>;
}

export interface Result<Data, Params extends any[]> extends Methods<Data, Params> {
    loading: Ref<boolean>;
    error: Ref<unknown>;
    data: Ref<Data | undefined>;
}


