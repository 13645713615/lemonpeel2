/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-31 16:40:25
 * @LastEditTime: 2023-02-01 11:47:22
 */

import Emiter from "../class/Emiter"
import isBrowser from "./isBrowser";


class SubscribeEventListener {

    static instance: SubscribeEventListener;

    private subscribe: Emiter<string>;

    private constructor() {
        this.subscribe = new Emiter();
    }

    public static getInstance() {
        if (!this.instance) this.instance = new SubscribeEventListener();
        return this.instance
    }

    on(type: string, listener: EventListenerOrEventListenerObject) {

        if (!this.subscribe.has(type)) {
            if (isBrowser) {
                window.addEventListener(type, this.emit.bind(this, type), false);
            } else {
                console.warn("Functions can only be run on browsers！");
            }
        }

        return this.subscribe.on(type, listener)
    }

    emit(type: string, event?: any) {
        this.subscribe.emit(type, event)
    }
}



/**
 * @name: 订阅事件侦听器
 * @msg: 
 * @return {*}
 */
export function subscribeEventListener() {
    return SubscribeEventListener.getInstance();
}

export default subscribeEventListener