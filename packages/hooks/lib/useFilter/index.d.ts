import type { MaybeComputedRef, MaybeRef } from "../utils";
import type { ComputedRef } from "vue-demi";
import type { List, ListIterateeCustom } from "lodash";
export declare function useFilter<T>(collection: MaybeComputedRef<List<T>>, predicate?: MaybeRef<ListIterateeCustom<T, boolean>>): ComputedRef<T[]>;
