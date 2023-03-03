/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-09 18:02:59
 * @LastEditTime: 2023-02-01 17:03:00
 */

import { customRef } from "vue-demi"
import { throttle, noop } from "lodash"

export interface ThrottleOptions {
    wait?: number,
    leading?: boolean,
    trailing?: boolean,
}

export interface useThrottleOptions<T> extends ThrottleOptions {
    change?: (value: T) => void
}

export function useThrottle<T>(defaultValue: T, options?: useThrottleOptions<T>) {

    const { leading = true, trailing = true, wait = 250, change = noop } = options ?? {};

    let _value: T = defaultValue;

    return customRef<T>((track, trigger) => {

        const updata = throttle((value) => { trigger(); change(value); }, wait, { leading, trailing })

        return {
            get() {
                track()
                return _value
            },
            set(value) {
                if (value === _value) return;
                _value = value;
                updata(value);
            }
        }
    })
}