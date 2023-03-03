/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-06 10:13:27
 * @LastEditTime: 2023-02-06 10:54:51
 */
import { effectScope } from "vue-demi"

export function createGlobalState<T>(defineState: () => T): () => T {

    let initialized: boolean = false, state: T | undefined;

    const scope = effectScope(true);

    return () => {
        if (!initialized) {
            state = scope.run(defineState);
            if (!state) {
                console.warn('[Hooks] createGlobalState effectScope.run inactive!');
                state = defineState();
            }
            initialized = true;
        }
        return state as T
    }
}
