export declare class FullScreen {
    prefixName: string;
    isFullscreenData: boolean;
    /**
     * @description: 全屏初始化
     * @param {Function} fn 用户浏览器不支持全屏的回调
     */
    constructor(fn: () => void);
    /**
     * @description: 将传进来的元素全屏
     * @param {String | Element} element 要全屏的dom名称
     */
    Fullscreen(element?: string | Element | null): void;
    exitFullscreen(): void;
    /**
     * @description: 监听进入/离开全屏
     * @param {Function} enter 进入全屏的回调
     *  @param {Function} quit 离开全屏的回调
     */
    screenChange(enter: (e: Event) => void, quit: (e: Event) => void): void;
    /**
     * @description: 浏览器无法进入全屏时触发,可能是技术原因，也可能是用户拒绝：比如全屏请求不是在事件处理函数中调用,会在这里拦截到错误
     * @param {Function} enterErrorFn 回调
     */
    screenError(enterErrorFn: (e: Event) => void): void;
    /**
     * @description: 是否支持全屏+判断浏览器前缀
     * @param {Function} fn 不支持全屏的回调函数 这里设了一个默认值
     */
    isFullscreen(fn: () => void): void;
    /**
     * @description: 检测有没有元素处于全屏状态
     * @return 布尔值
     */
    isElementFullScreen(): boolean;
}
/**
* @description: 全屏
* @param {String | Element} element 要全屏的dom名称
*/
export declare const fullScreen: (dom?: string | Element | null | undefined) => FullScreen | null;
