/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-31 15:54:56
 * @LastEditTime: 2023-02-03 16:44:43
 */
import type { Plugin } from "../types";
import { HandlerTopic } from "../Service"
import { noop } from "lodash";
import { isDocumentVisible, subscribeEventListener } from "@lemonpeel2/utils";
import { onScopeDispose } from "vue-demi"

export interface UsePollingPluginOptions {
    interval: number,
    errorRetryCount?: number,
    whenHidden?: boolean
}

export function usePollingPlugin(options: UsePollingPluginOptions): Plugin {

    const { errorRetryCount = -1, whenHidden = true, interval } = options

    let time: NodeJS.Timeout | null, count: number = 0, unsubscribe: () => void = noop;

    if (interval <= 0) return noop;

    const subscribe = subscribeEventListener()

    function stopPolling() {
        if (time) clearTimeout(time);
        unsubscribe();
    }

    onScopeDispose(stopPolling);

    return (service) => {
        service.emiter.on(HandlerTopic.onBefore, stopPolling);

        service.emiter.on(HandlerTopic.onError, () => count += 1);
        
        service.emiter.on(HandlerTopic.onSuccess, () => count = 0);

        service.emiter.on(HandlerTopic.onCancel, stopPolling);

        service.emiter.on(HandlerTopic.onFinally, () => {
            if (errorRetryCount === -1 || (errorRetryCount !== -1 && count <= errorRetryCount)) {
                time = setTimeout(() => {
                    if (!whenHidden && !isDocumentVisible()) {
                        unsubscribe = subscribe.on("visibilitychange", () => service.run(...service.state.params))
                    } else {
                        service.run(...service.state.params)
                    }
                }, interval)
            } else {
                count = 0;
            }
        })
    }
}