/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-01 17:22:37
 * @LastEditTime: 2023-02-02 18:09:22
 */

import { toType } from "../lang";
import type { DataType } from "../lang";
import { debounce, wrap } from "lodash"
import { subscribeEventListener } from "../dom";
import Emiter from "./Emiter";

interface RecordData {
    value: any,
    expirse: number,
    type: DataType | undefined
}

export interface CacheStorage {
    getItem(key: string): string | null
    setItem(key: string, value: string): void
}

export class Cache {

    get length(): number {
        return this.dataPool.size
    }

    private dataPool: Map<string, RecordData>;

    private emiter: Emiter<string, Record<string, (value: any) => void>> = new Emiter();

    constructor(cacheKey: string, private time: number = -1, private storage: CacheStorage = localStorage) {

        this.dataPool = jsonToMap(this.storage.getItem(cacheKey));

        const update = () => {
            this.storage.setItem(cacheKey, mapToJson(this.dataPool))
        }

        const debounceUpdate = debounce(update, 1000, { maxWait: 3000 })

        this.trigger = wrap(this.trigger,  (value, ...args) => {
            value.call(this,...args);
            debounceUpdate();
        })

        const subscribe = subscribeEventListener();
        subscribe.on("visibilitychange", update)
    }

    private trigger(key?: string, value?: any) {
        if (key) {
            this.emiter.emit(key, value)
        } else {
            this.emiter.keys().forEach((key) => this.emiter.emit(key, undefined))
        }
    }
    subscribe<T>(key: string, observer: (value: T | null) => void) {
        return this.emiter.on(key, observer)
    }
    clear(): void {
        this.dataPool.clear();
        this.trigger();
    }
    getItem<T>(key: string): T | null {
        const data = this.dataPool.get(key);
        if (!data) return null;
        if (data.expirse != -1 && data.expirse < Date.now()) {
            this.removeItem(key);
            return null
        }
        return data.value
    }
    key(index: number): string | null {
        return Array.from(this.dataPool.keys())[index]
    }
    removeItem(key: string): void {
        this.dataPool.delete(key);
        this.trigger(key);
    }
    setItem<T>(key: string, value: T, time: number = this.time): void {
        this.dataPool.set(key, {
            value,
            expirse: time < 0 ? -1 : Date.now() + time,
            type: toType(value)
        })
        this.trigger(key, value);
    }
}


function jsonToMap(json: string | null): Map<string, RecordData> {
    if (json) {
        try {
            const array: Array<[string, RecordData]> = JSON.parse(json);
            if (Array.isArray(array)) {
                return new Map(array.map(([key, { value, type, expirse }]) => {
                    if (type === "map") {
                        value = new Map(value)
                    } else if (type === "set") {
                        value = new Set(value)
                    }
                    return [key, { value, type, expirse }]
                }))
            }
        } catch (error) {
            console.warn('[Utils] ' + error)
        }
    }
    return new Map()
}

function mapToJson<T extends Map<string, RecordData>>(map: T): string {
    const array: Array<[string, RecordData]> = [];
    map.forEach(({ type, expirse, value }, key) => {
        if (type === "map" || type === "set") value = Array.from(value);
        array.push([key, { type, expirse, value }])
    })
    return JSON.stringify(array)
}


export default Cache