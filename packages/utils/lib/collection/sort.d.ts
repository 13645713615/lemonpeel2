declare type List<T> = Array<T>;
declare type Many<T> = T | ReadonlyArray<T>;
declare type NotVoid = unknown;
export declare type OrdersSort = Many<boolean | "asc" | "desc">;
declare type PropertyName = string | number | symbol;
declare type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P];
};
declare type CustomOrdersSort = (a: NotVoid, b: NotVoid) => number;
declare type ObjectIterator<TObject, TResult> = (value: TObject[keyof TObject], key: string, collection: TObject) => TResult;
declare type ObjectIteratee<TObject> = ObjectIterator<TObject, NotVoid> | IterateeShorthand<TObject[keyof TObject]>;
declare type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T>;
export declare function orderBy<T>(collection: List<T>, iteratees?: ObjectIterator<T, NotVoid>, orders?: OrdersSort): Array<T[keyof T]>;
export declare function orderBy<T>(collection: List<T>, iteratees?: ObjectIteratee<T>, orders?: OrdersSort): Array<T[keyof T]>;
export declare function orderBy<T>(collection: List<T>, iteratees?: ObjectIteratee<T>, orders?: ReadonlyArray<CustomOrdersSort>): Array<T[keyof T]>;
/**
 * 比较值以按升序对它们进行排序。
 * @param  {T} value
 * @param  {T} other
 */
export declare function compareAscending<T>(value: T, other: T): 1 | -1 | 0;
export default orderBy;
