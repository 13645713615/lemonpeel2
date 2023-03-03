/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-02 09:48:42
 * @LastEditTime: 2023-02-02 14:36:18
 */

const toString = Object.prototype.toString;

const map: Record<string, DataType> = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object Promise]': 'promise',
};

export type DataType = 'boolean' | 'number' | 'string' | 'function' | 'array' | 'date' | 'regExp' | 'undefined' | 'null' | 'object' | 'promise' | 'regexp' | 'map' | 'set'

/**
 * @name: 数据类型字符串
 * @msg: 
 * @param {any} value
 * @return {*}
 */
export function toType(value: any): DataType | undefined {
    const desc = toString.call(value)
    if (map.hasOwnProperty(desc)) {
        return map[desc]
    } else {
        console.log('unable to recognise type:' + desc)
        return
    }
}

export default toType
