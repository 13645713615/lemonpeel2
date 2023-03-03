export declare type DataType = 'boolean' | 'number' | 'string' | 'function' | 'array' | 'date' | 'regExp' | 'undefined' | 'null' | 'object' | 'promise' | 'regexp' | 'map' | 'set';
/**
 * @name: 数据类型字符串
 * @msg:
 * @param {any} value
 * @return {*}
 */
export declare function toType(value: any): DataType | undefined;
export default toType;
