declare type CachedKey = string | number;
/**
 * @name: 缓存Promise
 * @msg:
 * @return {*}
 */
export declare const cachePromise: {
    /**
     * @name: 获取缓存的Promise消费
     * @msg:
     * @param {CachedKey} cacheKey
     * @return {*}
     */
    consume<T = any>(cacheKey: CachedKey): Promise<T> | undefined;
    /**
     * @name: 收集Promise
     * @msg:
     * @param {CachedKey} cacheKey
     * @param {Promise} promise
     * @return {*}
     */
    collect<T_1 = any>(cacheKey: CachedKey, promise: Promise<T_1>): void;
};
export default cachePromise;
