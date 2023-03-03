/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-18 17:46:34
 * @LastEditTime: 2023-02-14 09:51:56
 */

import type { Options, Plugin } from "../types";
import { HandlerTopic } from "../Service"

export default function useBasicsPlugin<Data, Params extends any[]>(options: Options<Data, Params>): Plugin<Data, Params> {
    return (service) => {
        options.onBefore && service.emiter.on(HandlerTopic.onBefore, options.onBefore);
        options.onError && service.emiter.on(HandlerTopic.onError, options.onError);
        options.onFinally && service.emiter.on(HandlerTopic.onFinally, options.onFinally);
        options.onSuccess && service.emiter.on(HandlerTopic.onSuccess, options.onSuccess);
    }
}
