/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-12 15:40:29
 * @LastEditTime: 2023-03-02 17:41:45
 */
import { toRefs } from "vue-demi"
import Service from "./Service"
import type { Target, Plugin, Options, Result, Methods } from "./types"
import { isArray, isFunction, isObject } from "lodash"
import useBasicsPlugin from "./plugin/useBasicsPlugin"
export * from "./plugin/useLoadingDelayPlugin"
export * from "./plugin/usePollingPlugin"
export * from "./plugin/useDebouncePlugin"
export * from "./plugin/useThrottlePlugin"
export * from "./plugin/useCachePlugin"

function useService<Data, Params extends any[]>(target: Target<Data, Params>): Result<Data, Params>;
function useService<Data, Params extends any[]>(target: Target<Data, Params>, options: Options<Data, Params>): Result<Data, Params>;
function useService<Data, Params extends any[]>(target: Target<Data, Params>, plugins: Plugin<Data, Params>[]): Result<Data, Params>;
function useService<Data, Params extends any[]>(target: Target<Data, Params>, options: Options<Data, Params>, plugins: Plugin<Data, Params>[]): Result<Data, Params>
function useService<Data, Params extends any[]>() {

    const [target, ...args] = arguments as unknown as [target: Target<Data, Params>, ...args: any[]];

    let options: Options<Data, Params> = {}, plugins: Plugin<Data, Params>[] = [];

    if (isObject(args[0])) options = args.shift();

    if (isArray(args[0])) plugins = args[0]

    const serviceInstance = new Service(target, { data: options.initialValue })

    const { loading, error, data, params } = toRefs(serviceInstance.state)

    const methods: Methods<Data, Params> = {
        runAsync: (...args) => {
            const [value, ...values] = args;
            if (values.length === 0 && isFunction(value)) args = value(params.value)

            return serviceInstance.run(...args as Params)
        },
        run: (...args) => methods.runAsync(...args as any).catch(error => error && console.error(error)),
        abort: (reason) => serviceInstance.abort(reason),
        refresh: () => methods.run(...(params.value ?? [])),
        refreshAsync: () => methods.runAsync(...(params.value ?? []))
    }

    // defer((serviceInstance: Service<Data, Params>) => {
    plugins.unshift(useBasicsPlugin<Data, Params>(options))
    plugins.forEach((p) => p(serviceInstance))

    if (options.immediate)
        methods.run(...(isFunction(options.params) ? options.params() : (options.params ?? [] as any)))
    // }, serviceInstance)


    return { loading, error, data, ...methods }
}

export { useService, Target as UseServiceTarget, Plugin as UseServicePlugin, Options as UseServiceOptions, Result as UseServiceResult }