/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-31 16:27:16
 * @LastEditTime: 2023-01-31 16:47:58
 */
import isBrowser from "./isBrowser"

/**
 * @name: 判断页面隐藏
 * @msg: 
 * @return {*}
 */
export function isDocumentVisible(): boolean {
    if (isBrowser) {
        return document.visibilityState !== 'hidden';
    }
    return true;
}
export default isDocumentVisible