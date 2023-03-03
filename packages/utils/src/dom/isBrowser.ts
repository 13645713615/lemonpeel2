/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-31 16:27:50
 * @LastEditTime: 2023-01-31 16:47:25
 */

/**
 * @name: 是否是浏览器
 * @msg: 
 * @return {*}
 */
export const isBrowser: boolean = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
export default isBrowser