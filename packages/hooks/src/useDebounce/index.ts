/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-09 18:02:59
 * @LastEditTime: 2023-02-01 10:27:29
 */

import { customRef } from "vue-demi"
import { debounce, noop } from "lodash"

export interface DebounceOptions {
    wait?: number,
    maxWait?: number,
    leading?: boolean,
    trailing?: boolean,
}

export interface useDebounceOptions<T> extends DebounceOptions {
    change?: (value: T) => void
}

export function useDebounce<T>(defaultValue: T, options?: useDebounceOptions<T>) {

    const { maxWait = 1500, leading = false, trailing = true, wait = 250, change = noop } = options ?? {};

    let _value: T = defaultValue;

    return customRef<T>((track, trigger) => {

        const updata = debounce((value) => { trigger(); change(value); }, wait, { maxWait, leading, trailing })

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