interface FillingRecordOptions<T extends (Index | IndexRecord)[], V, D, K extends Index> {
    /**
     * 截止长度
     */
    length?: number,
    /**
     * 默认值
     */
    defaultValue?: D,
    /**
     * 填充值
     */
    value: V | ((value: T extends Array<infer R> ? R : never, index: number) => V),
    /**
     * 键值
     */
    key?: K
}

type Index = string | number | symbol

type IndexRecord = Record<Index, any>

type Merge<V, D> = D extends unknown ? V : D | V

/**
 * 数组填充对象
 * @param  {T} target  目标数组
 * @param  {FillingRecordOptions} option 选项
 * @returns Record
 */
export function fillingRecord<T extends (Index | IndexRecord)[], V, D, K extends T extends IndexRecord[] ? keyof IndexRecord : Index,>(
    target: T, option: FillingRecordOptions<T, V, D, K>): T extends IndexRecord[] ? Record<T extends Array<infer P> ? K extends keyof P ? P[K] : never : never, Merge<V, D>> : Record<Index, Merge<V, D>> {

    const { length = target.length, defaultValue, value, key } = option;

    const getValue = value instanceof Function ? value : () => value;

    const getKey = (key ? (value: IndexRecord) => value[key] : (value: Index) => value) as (value: Index | IndexRecord) => Index

    const result = {} as Record<Index, D | V>

    for (let index = 0; index < target.length; index++) {

        const key = getKey(target[index]);

        if (length > index) {
            result[key] = getValue(target[index] as any, index);
        } else if (defaultValue !== undefined) {
            result[key] = defaultValue;
        } else {
            break;
        }
    }

    return result as any
}