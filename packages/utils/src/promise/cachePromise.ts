/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-03 11:33:03
 * @LastEditTime: 2023-02-03 11:50:57
 */

type CachedKey = string | number;
const listeners = new Map<CachedKey, Promise<any>>();

/**
 * @name: 缓存Promise
 * @msg: 
 * @return {*}
 */
export const cachePromise = {

    /**
     * @name: 获取缓存的Promise消费
     * @msg: 
     * @param {CachedKey} cacheKey
     * @return {*}
     */
    consume<T = any>(cacheKey: CachedKey): Promise<T> | undefined {
        return listeners.get(cacheKey);
    },
    /**
     * @name: 收集Promise
     * @msg: 
     * @param {CachedKey} cacheKey
     * @param {Promise} promise
     * @return {*}
     */
    collect<T = any>(cacheKey: CachedKey, promise: Promise<T>) {
        // 应缓存相同的promise，不能缓存promise finally
        // 因为promise.finally将更改promise的引用
        listeners.set(cacheKey, promise);

        // no use promise.finally for compatibility
        promise
            .then((res) => {
                listeners.delete(cacheKey);
                return res;
            })
            .catch(() => {
                listeners.delete(cacheKey);
            });
    }
}

export default cachePromise