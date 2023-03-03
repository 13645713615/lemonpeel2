/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-31 10:39:49
 * @LastEditTime: 2023-02-01 09:58:20
 */
import type { Plugin } from "../types";
import { HandlerTopic } from "../Service"

export function useLoadingDelayPlugin<Data, Params extends any[]>(options = { delay: 300 }): Plugin<Data, Params> {

    let timer: NodeJS.Timeout | null;

    function cancelTimeout() {
        if (timer) clearTimeout(timer);
    }

    return (service) => {
        service.emiter.on(HandlerTopic.onBefore, () => {
            timer = setTimeout(() => service.state.loading = true, options.delay);
            return {
                loading: false
            }
        });
        service.emiter.on(HandlerTopic.onFinally, cancelTimeout)
        service.emiter.on(HandlerTopic.onCancel, cancelTimeout)
    }
}