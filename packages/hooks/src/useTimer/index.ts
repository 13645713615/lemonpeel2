/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-06 15:37:11
 * @LastEditTime: 2023-03-02 17:52:39
 */

import { onScopeDispose } from "vue-demi";

export type UseTimerOptions = {
    delay?: number,
    immediate?: boolean,
    endTime?: number
}

export function useTimer(effect: (count: number, clear: () => void) => void, options?: UseTimerOptions) {

    let { delay = 1000, immediate, endTime } = options ?? {};

    let count: number = 1, prevTime: number, timerIndex: number

    function animate(timestamp: number) {

        if (!prevTime) prevTime = timestamp;

        const deltaTime = timestamp - prevTime;

        if (deltaTime >= delay) {
            prevTime = timestamp;

            task();

            if (endTime != undefined) {
                endTime -= delay;
                if (endTime <= 0) return clear();
            }

        }

        timerIndex = requestAnimationFrame(animate)
    }

    function clear() {
        cancelAnimationFrame(timerIndex)
    }

    function task() {
        try {
            effect(count++, clear)
        } catch (error) {
            console.warn(error);
            clear()
        }
    }

    if (immediate) {
        task();
    }

    timerIndex = requestAnimationFrame(animate);

    onScopeDispose(clear);

    return clear
}