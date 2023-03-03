/**
 * @name: 观察者
 * @msg:
 * @param {array} args
 * @return {*}
 */
export declare class Emiter<Topic extends string | number, Handler extends Record<Topic, (...args: any[]) => any> = any> {
    protected observers: Map<Topic, Array<(...args: any) => any>>;
    init(): void;
    keys(): Topic[];
    has(topic: Topic): boolean;
    on<T extends Topic>(topic: T, observer: Handler[T]): () => void;
    emit<T extends Topic>(topic: T, ...args: Parameters<Handler[T]>): ReturnType<Handler[T]>[] | undefined;
}
export default Emiter;
