/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-01 14:32:44
 * @LastEditTime: 2023-02-01 17:08:02
 */
import { throttle } from "lodash";
import { Plugin } from "../types"
import { HandlerTopic } from "../Service"
import { ThrottleOptions } from "@lemonpeel2/hooks";

export type useThrottlePluginOptions = ThrottleOptions;

export function useThrottlePlugin<Data, Params extends any[]>(options?: useThrottlePluginOptions): Plugin<Data, Params> {

    const { wait = 300, leading = true, trailing = true } = options ?? {};

    return function (service) {

        if (wait <= 0) return;

        const _originRun = service.run.bind(service);

        const throttled = throttle((callback) => callback(), wait, { leading, trailing })

        service.run = (...args: Params) => {
            return new Promise<Data>((resolve, reject) => {
                throttled(() => _originRun(...args).then(resolve).catch(reject))
            })
        }

        service.emiter.on(HandlerTopic.onCancel, () => {
            throttled.cancel();
        })
    }
}