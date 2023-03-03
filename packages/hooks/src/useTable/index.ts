/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-20 11:36:29
 * @LastEditTime: 2023-03-02 18:38:32
 */

import { orderBy } from "@lemonpeel2/utils";
import { debounce, defer, filter, isEmpty, isFunction, iteratee } from "lodash";
import { computed, onScopeDispose, shallowRef, watch } from "vue-demi";
import type { WatchStopHandle } from "vue-demi";
import { defaultFormat, Formatter, useRecast } from "../useRecast";
import type { Many, MaybeComputedRef, PropertyName } from "../utils";
import { resolveUnref } from "../utils";

type OrdersSort = boolean | "asc" | "desc"

interface RecastOptions<K, T, R> {
    key?: K,
    formatter?: Formatter<T, R>
}

interface SorterOptions<K, R> {
    key?: K,
    sorter?: boolean | ((a: R, b: R) => number),
    sortOrder?: OrdersSort,
    sortMultiple?: boolean
}

interface FilterOptions<K, R> {
    key?: K,
    filter?: boolean,
    filterValue?: R,
}

interface UseTableState<T, K extends PropertyName, R> {
    recast: Record<K, Formatter<T, R>>
    sorter: Array<SorterOptions<K, R>>
    filter: Array<FilterOptions<K, R>>
}

export interface UseTableColumn<T, K, R> extends RecastOptions<K, T, R>, SorterOptions<K, R>, FilterOptions<K, R> {
    key: K
}

export interface UseTableOptions<K, R> {
    onChangeSorte?: (sorter: SorterOptions<K, R>[]) => void
}

export function useTable<T, K extends keyof T, N extends string, R>(data: MaybeComputedRef<T[]>, columns: MaybeComputedRef<UseTableColumn<T, K | N, R>[]>, options?: UseTableOptions<K | N, R>) {

    const state = computed(() => resolveUnref(columns).reduce<UseTableState<T, K | N, R>>((prev, column) => {

        prev.recast[column.key] = column.formatter ?? defaultFormat;

        if (column.filter) prev.filter.push(column);

        if (column.sorter) prev.sorter.push(column);

        return prev
    }, { sorter: [], recast: {} as any, filter: [] }));


    const rawData = useRecast<T, N, R>(data, () => state.value.recast);

    const sorterStats = shallowRef<[Many<K | N>, Many<OrdersSort | ((a: R, b: R) => number)>] | null>(null);

    let sorterWatchStop: WatchStopHandle | undefined;

    const filterStats = shallowRef<Record<K | N, R> | null>(null);

    const handler = {
        generatetable(): Record<N, R>[] {
            let result: any[] = rawData.value;

            if (!isEmpty(filterStats.value))
                result = filter(result, filterStats.value)

            if (!isEmpty(sorterStats.value))
                result = orderBy(result, ...sorterStats.value as any[])

            return result
        },
        setOrdersSort(orderBy?: OrdersSort): OrdersSort {
            switch (orderBy) {
                case true:
                case "asc":
                    return "desc"
                case "desc":
                    return false
                default:
                    return "asc"
            }
        },
        getSortOrder(sort: SorterOptions<K | N, R>) {
            return isFunction(sort.sortOrder) ? sort.sortOrder : sort.sortOrder ?? false
        },
        setSorterStats(sort?: SorterOptions<K | N, R>) {
            if (!sort || !sort?.sortOrder) {
                return sorterStats.value = null;
            }
            if (sort.sortMultiple) {
                sorterStats.value = state.value.sorter.reduce<[any[], any[]]>((prev, sort) => {
                    if (sort.sortMultiple && sort.sortOrder) {
                        prev[0].push(sort.key);
                        prev[1].push(handler.getSortOrder(sort))
                    }
                    return prev
                }, [[], []])
            } else {
                sorterStats.value = [sort.key!, handler.getSortOrder(sort)]
            }
        },
        sorterWatch(immediate: boolean) {
            sorterWatchStop?.();

            sorterWatchStop = watch(() => state.value.sorter, (sorter) =>
                handler.setSorterStats(sorter.find(iteratee("sortOrder")))
                , { deep: true, immediate })
        },
        setFilterStats() {
            filterStats.value = state.value.filter.reduce<Record<K | N, R>>((prev, filter) => {
                if (filter.filterValue != undefined && filter.filterValue != null && filter.filterValue != '') {
                    prev[filter.key!] = filter.filterValue
                }
                return prev
            }, {} as any)

        },
    }


    const methods = {
        changefilter(key: N, value?: R) {
            const target = state.value.filter.find(iteratee({ key }));

            if (!target) return;

            target.filterValue = value;
        },
        changeSorter(key: N, orderBy?: OrdersSort) {
            const target = state.value.sorter.find(iteratee({ key }));
            let updated: SorterOptions<K | N, R>[] = []

            if (!target) return;

            sorterWatchStop?.();

            target.sortOrder = orderBy ?? handler.setOrdersSort(target.sortOrder)

            if (target.sortOrder) {
                updated = state.value.sorter.reduce<SorterOptions<K | N, R>[]>((prev, sort) => {
                    if (target.key != sort.key && sort.sortOrder && !(target.sortMultiple && sort.sortMultiple)) {
                        sort.sortOrder = false
                        prev.push(sort)
                    }
                    return prev
                }, [])
            }

            handler.setSorterStats(target);

            options?.onChangeSorte?.([target, ...updated]);

            defer(handler.sorterWatch, false);
        }
    }

    const filterWatchStop = watch(() => state.value.filter, debounce(handler.setFilterStats, 250), { deep: true, immediate: true })

    handler.sorterWatch(true);

    onScopeDispose(() => {
        filterWatchStop();
        sorterWatchStop?.();
    })

    return {
        data: computed(handler.generatetable),
        ...methods,
    }
}
