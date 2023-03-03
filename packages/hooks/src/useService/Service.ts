/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-12 15:27:58
 * @LastEditTime: 2023-02-14 09:49:23
 */
import { shallowReactive } from "vue-demi"
import { Emiter } from "@lemonpeel2/utils"
import type { ServiceState, PluginHandler } from "./types"

export enum HandlerTopic {
    onBefore = 'onBefore',
    onRequest = 'onRequest',
    onSuccess = 'onSuccess',
    onError = 'onError',
    onFinally = 'onFinally',
    onCancel = 'onCancel',
    onMutate = 'onMutate',
}


export default class Service<Data, Params extends any[]> {

    emiter: Emiter<HandlerTopic, Required<PluginHandler<Data, Params>>>;

    state = shallowReactive({ loading: false, data: undefined, error: undefined, params: undefined }) as ServiceState<Data, Params>

    private abortToken: ((reason?: any) => void) | null = null;

    constructor(

        public target: (...args: Params) => Promise<Data>,

        public initState: Partial<ServiceState<Data, Params>> = {}) {

        this.emiter = new Emiter<HandlerTopic>();

        Object.assign(this.state, this.initState);
    }

    protected handler<T extends HandlerTopic, H extends Required<PluginHandler<Data, Params>>>(topoc: T, ...args: Parameters<H[T]>): Exclude<ReturnType<H[T]>, void> {
        const results = this.emiter.emit(topoc, ...args)?.filter(Boolean) || [];
        return Object.assign({}, ...results);
    }

    run(...params: Params): Promise<Data> {

        return new Promise<Data>((resolve, reject) => {
            
            this.abortToken = reject

            const { stopNow = false, returnNow = false, ...state } = this.handler(HandlerTopic.onBefore, params)

            if (stopNow) return reject();

            Object.assign(this.state, { loading: true, params, ...state })

            if (returnNow) return reject();

            let { servicePromise } = this.handler(HandlerTopic.onRequest, this.target, params)

            if(!servicePromise) servicePromise = this.target.apply(null, params);

            servicePromise.then((res) => {

                if (!this.abortToken) return;

                this.state.data = res;

                this.handler(HandlerTopic.onSuccess, res, params)

                if (!!this.abortToken) this.handler(HandlerTopic.onFinally, params, res, undefined)

                resolve(res)

            }).catch(error => {

                if (!this.abortToken) return;

                this.state.error = error;

                this.handler(HandlerTopic.onError, error, params)

                if (!!this.abortToken) this.handler(HandlerTopic.onFinally, params, undefined, error)

                reject(error)

            }).finally(() => {
                this.abortToken = null;

                this.state.loading = false;
            })
        })

    }

    abort(reason?: any) {

        this.abortToken?.(reason);
        this.abortToken = null;

        this.state.loading = false;

        this.handler(HandlerTopic.onCancel, reason)
    }
}