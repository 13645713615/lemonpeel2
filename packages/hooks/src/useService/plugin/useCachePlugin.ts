/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-02 14:40:39
 * @LastEditTime: 2023-02-06 14:38:38
 */
import type { Plugin } from "../types";
import { Cache, cachePromise } from "@lemonpeel2/utils"
import { noop } from "lodash";
import Service, { HandlerTopic } from "../Service"
import { onScopeDispose } from "vue-demi";

export interface UseCachePluginOptions {
    cacheKey: string;
    cacheTime?: number;
    staleTime?: number;
}

interface CacheData<Date, Params> {
    data: Date,
    params: Params,
    time: number
}

const cache = new Cache("@@ServiceCache")

export function useCachePlugin<Date, Params extends any[]>(options: UseCachePluginOptions): Plugin<Date, Params> {

    const { cacheKey, cacheTime = 300000, staleTime = 0 } = options

    let unSubscribe: () => void = noop, currentPromise: Promise<any>;

    if (!cacheKey) return noop

    function resubscribe(service: Service<Date, Params>) {
        unSubscribe = cache.subscribe<CacheData<Date, Params>>(cacheKey, (value) => {
            service.state.data = value?.data;
        })
    }

    onScopeDispose(() => unSubscribe())

    return (service) => {

        const cacheData = cache.getItem<CacheData<Date, Params>>(cacheKey);
        if (cacheData && Object.hasOwnProperty.call(cacheData, 'data')) {
            service.state.data = cacheData.data
            service.state.params = cacheData.params
        }

        resubscribe(service);

        service.emiter.on(HandlerTopic.onBefore, () => {
            const cacheData = cache.getItem<CacheData<Date, Params>>(cacheKey);
            if (!cacheData || !Object.hasOwnProperty.call(cacheData, 'data')) {
                return {};
            }

            if (staleTime === -1 || new Date().getTime() - cacheData.time <= staleTime) {
                return {
                    loading: false,
                    data: cacheData.data,
                    error: undefined,
                    returnNow: true,
                };
            }
        })

        service.emiter.on(HandlerTopic.onRequest, (target, param) => {

            let servicePromise = cachePromise.consume(cacheKey);
            // 如果具有servicePromise，并且不是由自己触发的，则使用它
            if (servicePromise && servicePromise !== currentPromise) {
                return { servicePromise };
            }

            currentPromise = servicePromise = target(...param);
            cachePromise.collect(cacheKey, servicePromise)
            return { servicePromise };
        })

        service.emiter.on(HandlerTopic.onSuccess, (data, params) => {
            unSubscribe();
            cache.setItem<CacheData<Date, Params>>(cacheKey, {
                data,
                params,
                time: Date.now()
            }, cacheTime)
            resubscribe(service);
        })

    }
}