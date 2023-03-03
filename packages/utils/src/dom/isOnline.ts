import isBrowser from "./isBrowser";

/**
 * @name: 判断浏览器是否在线
 * @msg: 
 * @return {*}
 */
export function isOnline(): boolean {
  if (isBrowser && typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  }
  return true;
}
export default isOnline