import { createGlobalState, useEventListener } from "@lemonpeel2/hooks"
import { TBreakpointsKeys, TBreakpointsState, TDefineBreakpoints, isBrowser } from "@lemonpeel2/utils";
import { Breakpoints } from "@lemonpeel2/utils";
import { computed, ref, watch } from "vue-demi";

// 获取当前断点
export const useBreakpointState = createGlobalState(() => {

    const state = ref<number>(0);

    // 获取屏幕大小
    const setWidth = () => state.value = window.innerWidth || 0

    if (isBrowser) {
        useEventListener('resize', setWidth, { target: window })
        setWidth()
    }

    return computed(() => state.value)
});

export const useBreakpoints = (data: Partial<TBreakpointsState> = {}) => {
    
    const breakpointsInstance = new Breakpoints(data);

    const size = useBreakpointState();

    const breakpoint = computed(() => breakpointsInstance.getBreakpoint(size.value))

    const define = <T>({ default: defaultBreakpoint, ...breakpoints }: TDefineBreakpoints<T>) => {

        const map = breakpointsInstance.sortMap(Object.keys(breakpoints) as TBreakpointsKeys[]);
   
        const result = ref<T | undefined>();

        const update = (size: number) => {
            const suitable = breakpointsInstance.getSuitableBreakpoint(size, map);
            if (suitable) {
                result.value = breakpoints[suitable.key]!();
            } else {
                result.value = defaultBreakpoint?.();
            }
        }

        if (isBrowser) {
            watch(breakpoint, () => update(size.value), { immediate: true });
        }

        return computed(() => result.value)
    }

    return {
        breakpoint,
        size,
        breakpoints: breakpointsInstance,
        define
    }
}