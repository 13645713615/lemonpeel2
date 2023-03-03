/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-06 15:37:11
 * @LastEditTime: 2023-02-08 11:49:37
 */

import { isBrowser } from "@lemonpeel2/utils";
import { noop } from "lodash";
import { onScopeDispose, watch } from "vue-demi";
import { getTargetElement } from "../utils"
import type { BasicTarget, TargetType } from "../utils"

type Noop = (...p: any) => void;

type Target = BasicTarget<HTMLElement | Element | Window | Document>;

type Options<T extends Target = Target> = {
    target?: T;
    once?: boolean;
    passive?: boolean;
    capture?: boolean;
}

function useEventListener<K extends keyof HTMLElementEventMap>(
    eventName: K,
    listener: (ev: HTMLElementEventMap[K]) => void,
    options?: Options<HTMLElement>,
): void;

function useEventListener<K extends keyof ElementEventMap>(
    eventName: K,
    listener: (ev: ElementEventMap[K]) => void,
    options?: Options<Element>,
): void;

function useEventListener<K extends keyof DocumentEventMap>(
    eventName: K,
    listener: (ev: DocumentEventMap[K]) => void,
    options?: Options<Document>,
): void;

function useEventListener<K extends keyof WindowEventMap>(
    eventName: K,
    listener: (ev: WindowEventMap[K]) => void,
    options?: Options<Window>,
): void;

function useEventListener(eventName: string, listener: Noop, options: Options): void;

function useEventListener(eventName: string, listener: Noop, options: Options = {}) {

    if (!isBrowser) return noop;
    
    let effect: Noop | null;

    function register(el: TargetType) {
        const { capture, once, passive } = options;
        el.addEventListener(eventName, listener, { capture, once, passive });
        return () => el.removeEventListener(eventName, listener, { capture })
    }

    const stopWatch = watch(() => getTargetElement(options.target, window), (el) => {
        effect?.();
        if (!el) return;
        effect = register(el);
    }, { immediate: true, flush: 'post' })

    function stop() {
        stopWatch();
        effect?.();
    }

    onScopeDispose(stop)

    return stop
}

export { useEventListener, Options as UseEventListenerOptions }