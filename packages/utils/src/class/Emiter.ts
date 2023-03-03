/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-12 15:25:00
 * @LastEditTime: 2023-01-31 17:08:59
 */

/**
 * @name: 观察者
 * @msg: 
 * @param {array} args
 * @return {*}
 */
export class Emiter<Topic extends string | number, Handler extends Record<Topic, (...args: any[]) => any> = any> {

    protected observers: Map<Topic, Array<(...args: any) => any>> = new Map();

    init() {
        this.observers = new Map();
    }

    keys(): Topic[] {
        return Array.from(this.observers.keys());
    }

    has(topic: Topic) {
        return this.observers.has(topic)
    }

    on<T extends Topic>(topic: T, observer: Handler[T]): () => void {

        if (!this.observers.has(topic)) {
            this.observers.set(topic, []);
        }
        const index = this.observers.get(topic)!.push(observer);

        return () => {
            delete this.observers.get(topic)?.[index];
        };
    }

    emit<T extends Topic>(topic: T, ...args: Parameters<Handler[T]>): ReturnType<Handler[T]>[] | undefined {
        return this.observers.get(topic)?.map(fn => fn(...args));
    }
}

export default Emiter