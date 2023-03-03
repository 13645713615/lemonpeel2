/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-22 19:45:03
 * @LastEditTime: 2023-03-02 16:35:03
 */
import { get, isSymbol, map, iteratee } from "lodash"

type List<T> = Array<T>;
type Many<T> = T | ReadonlyArray<T>;
type NotVoid = unknown
export type OrdersSort = Many<boolean | "asc" | "desc">
type PropertyName = string | number | symbol;

type PartialShallow<T> = {
  [P in keyof T]?: T[P] extends object ? object : T[P]
};

type CustomOrdersSort = (a: NotVoid, b: NotVoid) => number

type ObjectIterator<TObject, TResult> = (value: TObject[keyof TObject], key: string, collection: TObject) => TResult;

type ObjectIteratee<TObject> = ObjectIterator<TObject, NotVoid> | IterateeShorthand<TObject[keyof TObject]>;

type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T>;

export function orderBy<T>(collection: List<T>, iteratees?: ObjectIterator<T, NotVoid>, orders?: OrdersSort): Array<T[keyof T]>
export function orderBy<T>(collection: List<T>, iteratees?: ObjectIteratee<T>, orders?: OrdersSort): Array<T[keyof T]>
export function orderBy<T>(collection: List<T>, iteratees?: ObjectIteratee<T>, orders?: ReadonlyArray<CustomOrdersSort>): Array<T[keyof T]>
export function orderBy<T>(collection: List<T>, iteratees?: Many<NotVoid>, orders?: Many<NotVoid>) {
  if (collection == null) {
    return []
  }
  if (!Array.isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees]
  }
  if (!Array.isArray(orders)) {
    orders = orders == null ? [] : [orders]
  }
  return baseOrderBy(collection, iteratees as any[], orders as any[])
}

const identity = <T>(value: T): T => value

function baseOrderBy<T>(collection: List<T>, iteratees: List<NotVoid>, orders: List<NotVoid>) {
  if (iteratees.length) {
    iteratees = iteratees.map((iteratee) => {
      if (Array.isArray(iteratee)) {
        return (value: unknown) => get(value, iteratee.length === 1 ? iteratee[0] : iteratee)
      }

      return iteratee
    })
  } else {
    iteratees = [identity]
  }

  iteratees = map(iteratees, (value) => iteratee(value as any));


  let index = -1;

  const result = map(collection, (value) => {
    const criteria = (iteratees as List<typeof identity>).map((iteratee) => iteratee(value))

    return { criteria, value, index: ++index };
  })

  return baseSortBy(result, (object, other) => compareMultiple(object, other, orders))
}

function compareMultiple(object: any, other: any, orders: any) {

  let index = -1
  const objCriteria = object.criteria
  const othCriteria = other.criteria
  const length = objCriteria.length
  const ordersLength = orders.length

  while (++index < length) {
    const order = index < ordersLength ? orders[index] : null
    const cmpFn = (order && typeof order === 'function') ? order : compareAscending
    const result = cmpFn(objCriteria[index], othCriteria[index])
    if (result) {
      if (order && typeof order !== 'function') {
        return result * (order == 'desc' ? -1 : 1)
      }
      return result
    }
  }

  return object.index - other.index
}


/**
 * 比较值以按升序对它们进行排序。
 * @param  {T} value
 * @param  {T} other
 */
export function compareAscending<T>(value: T, other: T) {
  if (value !== other) {
    const valIsDefined = value !== undefined
    const valIsNull = value === null
    const valIsReflexive = value === value
    const valIsSymbol = isSymbol(value)

    const othIsDefined = other !== undefined
    const othIsNull = other === null
    const othIsReflexive = other === other
    const othIsSymbol = isSymbol(other)

    const val = typeof value === 'string'
      ? value.localeCompare(other as string)
      : (value as number) - (other as number)

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && val > 0) ||
      (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
      (valIsNull && othIsDefined && othIsReflexive) ||
      (!valIsDefined && othIsReflexive) ||
      !valIsReflexive) {
      return 1
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && val < 0) ||
      (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
      (othIsNull && valIsDefined && valIsReflexive) ||
      (!othIsDefined && valIsReflexive) ||
      !othIsReflexive) {
      return -1
    }
  }
  return 0
}



/**
 * The base implementation of `sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy<T extends { value: any, [x: PropertyName]: any }>(array: List<T>, comparer: (a: T, b: T) => number) {
  let { length } = array

  array.sort(comparer)
  while (length--) {
    array[length] = array[length].value
  }
  return array
}

export default orderBy