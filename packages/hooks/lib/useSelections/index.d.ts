import { ComputedRef, WritableComputedRef } from "vue-demi";
import { MaybeComputedRef } from "../utils";
declare type ScopeState<T> = {
    allSelected: WritableComputedRef<boolean>;
    partiallySelected: ComputedRef<boolean>;
    selected: ComputedRef<T[]>;
};
interface UeSelectionsMethods<T> {
    isSelected(item: T): boolean;
    select(item: T): void;
    unSelect(item: T): void;
    toggle(item: T): void;
    selectAll(): void;
    unSelectAll(): void;
    toggleAll(): void;
}
export interface UeSelectionsResult<T> extends UeSelectionsMethods<T>, Partial<ScopeState<T>> {
}
export declare function useSelections<T>(items: MaybeComputedRef<T[]>, defaultSelected?: T[]): UeSelectionsResult<T>;
export {};
