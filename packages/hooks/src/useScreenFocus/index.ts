/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-01 10:40:27
 * @LastEditTime: 2023-02-06 15:39:27
 */

import { isDocumentVisible, subscribeEventListener, isOnline } from "@lemonpeel2/utils";
import { throttle } from "lodash";
import { onScopeDispose } from "vue-demi";

export interface useScreenFocusOptions {
    wait?: number
}

export function useScreenFocus(listener: (event: Event) => void, options?: useScreenFocusOptions): () => void {

    const { wait = 5000 } = options ?? {};

    const subscribe = subscribeEventListener();

    const handler = throttle((event: Event) => {
        if (!isDocumentVisible() || !isOnline()) return;
        listener(event);
    }, wait, { trailing: false });

    const unVisibility = subscribe.on("visibilitychange", handler)
    const unFocus = subscribe.on("focus", handler)

    function stop() {
        unVisibility();
        unFocus();
    }

    onScopeDispose(stop)

    return stop
}
