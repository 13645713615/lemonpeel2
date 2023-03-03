/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-08 16:27:18
 * @LastEditTime: 2023-02-09 11:39:48
 */

import { onBeforeUpdate } from "vue-demi"
import type { ComponentPublicInstance, ShallowReactive } from "vue-demi"

type UseRefListResult<T> = {
    refList: ShallowReactive<Array<T | null>>,
    onRefList: (index: number) => (ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void
}

export function useRefList<T extends Element | ComponentPublicInstance>(): UseRefListResult<T> {

    const refs: any[] = [];

    onBeforeUpdate(() => { refs.length !== 0 && refs.splice(0, refs.length) })

    return {
        refList: refs,
        onRefList: (index: number) => (ref) => { !!ref && (refs[index] = ref) }
    }
}