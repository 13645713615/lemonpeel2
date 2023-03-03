/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-07 17:03:54
 * @LastEditTime: 2023-03-02 17:51:00
 */

import { isFunction } from "lodash";
import { unref } from "vue-demi"
import type { Ref, ComponentPublicInstance } from "vue-demi";
import { isBrowser } from "@lemonpeel2/utils";

type TargetValue<T> = T | undefined | null;

export type TargetType = HTMLElement | Element | Window | Document;

export type BasicTarget<T extends TargetType = Element> = (() => TargetValue<T>) | TargetValue<T> | Ref<TargetValue<T>>

export function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T): TargetValue<T> {
    if (!isBrowser) {
        return undefined;
    }

    if (!target) {
        return defaultElement;
    }
    let targetElement: any = isFunction(target) ? target() : unref(target);

    if (targetElement?.$el) {
        targetElement = targetElement.$el as ComponentPublicInstance["$el"]
    }

    return targetElement
}