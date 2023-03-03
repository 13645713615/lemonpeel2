declare class SubscribeEventListener {
    static instance: SubscribeEventListener;
    private subscribe;
    private constructor();
    static getInstance(): SubscribeEventListener;
    on(type: string, listener: EventListenerOrEventListenerObject): () => void;
    emit(type: string, event?: any): void;
}
/**
 * @name: 订阅事件侦听器
 * @msg:
 * @return {*}
 */
export declare function subscribeEventListener(): SubscribeEventListener;
export default subscribeEventListener;
