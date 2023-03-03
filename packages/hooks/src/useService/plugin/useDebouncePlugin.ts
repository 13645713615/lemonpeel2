/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-01 14:32:44
 * @LastEditTime: 2023-02-01 16:40:56
 */
import { debounce } from "lodash";
import { DebounceOptions } from "../../useDebounce"
import { Plugin } from "../types"
import { HandlerTopic } from "../Service"

export type UseDebouncePluginOptions = DebounceOptions;

export function useDebouncePlugin<Data, Params extends any[]>(options?: UseDebouncePluginOptions): Plugin<Data, Params> {

    const { wait = 300, leading = false, trailing = true, maxWait = 1500 } = options ?? {};

    return function (service) {

        if (wait <= 0) return;

        const _originRun = service.run.bind(service);

        const debounced = debounce((callback) => callback(), wait, { leading, trailing, maxWait })

        service.run = (...args: Params) => {
            return new Promise<Data>((resolve, reject) => {
                debounced(() => _originRun(...args).then(resolve).catch(reject))
            })
        }

        service.emiter.on(HandlerTopic.onCancel, () => {
            debounced.cancel();
        })
    }
}