/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-07 16:35:41
 * @LastEditTime: 2023-03-02 17:38:41
 */
import { FullScreen } from "@lemonpeel2/utils"
import { nextTick, onScopeDispose, ref } from "vue-demi";
import { getTargetElement } from "../utils"
import type { BasicTarget } from "../utils"
import { noop } from "lodash";

type Target = BasicTarget<Element>;

export type UseFullscreenOptions = {
    onExit?: () => void;
    onEnter?: () => void;
}

export function useFullscreen(target: Target, options?: UseFullscreenOptions) {

    const { onEnter = noop, onExit = noop } = options ?? {}

    const isEnabled = ref<boolean>(true);

    const isFullscreen = ref<boolean>(false);

    const fullScreen = new FullScreen(() => isEnabled.value = false);

    fullScreen.screenChange(() => {
        isFullscreen.value = true;
        onEnter();
    }, () => {
        isFullscreen.value = false;
        onExit();
    })

    onScopeDispose(() => methods.exitFullscreen())

    const methods = {
        async enterFullscreen() {
            await nextTick()
            fullScreen.Fullscreen(getTargetElement(target))
        },
        exitFullscreen() {
            fullScreen.exitFullscreen();
        },
        toggleFullscreen() {
            if (isFullscreen.value) {
                methods.exitFullscreen()
            } else {
                methods.enterFullscreen();
            }
        }
    }

    return { ...methods, isFullscreen, isEnabled }
}