/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-04 09:32:27
 * @LastEditTime: 2023-02-03 17:15:51
 */
import type { Ref } from "vue-demi"
import type { DebounceOptions } from "@lemonpeel2/hooks"
import { useDebounce } from "@lemonpeel2/hooks"
import { unref, watch, effectScope } from "vue-demi"

export interface UseModelOptions extends DebounceOptions {
    immediate?: boolean,
    deep?: boolean
}

export function useModel<T>(getter: () => T, emitter?: (value: T) => void, options?: UseModelOptions): Ref<T> {

    const state = useDebounce<T>(getter(), { change: emitter, ...options })

    options?.immediate && emitter?.(state.value)

    effectScope().run(() => {
        watch(getter, (value) => state.value = unref<T>(value), { deep: options?.deep })
    })

    return state
}