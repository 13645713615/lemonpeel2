export interface CacheStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}
export declare class Cache {
    private time;
    private storage;
    get length(): number;
    private dataPool;
    private emiter;
    constructor(cacheKey: string, time?: number, storage?: CacheStorage);
    private trigger;
    subscribe<T>(key: string, observer: (value: T | null) => void): () => void;
    clear(): void;
    getItem<T>(key: string): T | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem<T>(key: string, value: T, time?: number): void;
}
export default Cache;
