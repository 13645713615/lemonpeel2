/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-08 09:27:27
 * @LastEditTime: 2023-03-02 18:27:08
 */

import { getScrollPosition, setScrollPosition } from "@lemonpeel2/utils";
import type { ScrollPosition } from "@lemonpeel2/utils"
import { reactive, computed } from "vue-demi";
import { useEventListener } from "../useEventListener";
import type { BasicTarget } from "../utils";
import { getTargetElement } from "../utils";
import { throttle } from "lodash";

export type UseScrollOptions = {
    shouldUpdate?: (value: ScrollPosition) => boolean;
    eventListenerOptions?: AddEventListenerOptions;
    behavior?: ScrollBehavior,
    wait?: number,
}

type TargetType = Element | Document;

type Target = BasicTarget<TargetType>;

export function useScroll<T extends Target = Document>(target: T, options?: UseScrollOptions) {

    const { eventListenerOptions = { capture: false, passive: true, }, shouldUpdate = () => true, behavior, wait } = options ?? {};

    const position = reactive<ScrollPosition>({ left: 0, top: 0 });

    function scrollTo(x?: number, y?: number) {
        const el = getTargetElement<TargetType>(target, document);
        if (el) setScrollPosition(el, { left: x, top: y }, behavior)
    }

    function onScrollHandler(e: Event) {
        let newPosition: ScrollPosition = getScrollPosition(e.target as TargetType);

        if (shouldUpdate(newPosition)) {
            Object.assign(position, newPosition)
        }
    }

    useEventListener("scroll", wait ? throttle(onScrollHandler, wait, { leading: false }) : onScrollHandler, { target, ...eventListenerOptions })

    return {
        x: computed<number>({
            get() {
                return position.left
            },
            set(value) {
                scrollTo(value)
            }
        }),
        y: computed<number>({
            get() {
                return position.top
            },
            set(value) {
                scrollTo(undefined, value)
            }
        })
    }
}


