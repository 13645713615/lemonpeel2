/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-07 16:25:57
 * @LastEditTime: 2023-02-07 17:47:43
 */


export class FullScreen {

    // 浏览器前缀
    prefixName: string;
    // 浏览器是否支持全屏
    isFullscreenData: boolean;

    /**
     * @description: 全屏初始化
     * @param {Function} fn 用户浏览器不支持全屏的回调
     */
    constructor(fn: () => void) {
        this.prefixName = "";
        this.isFullscreenData = true;
        this.isFullscreen(fn);
    }
    /**
     * @description: 将传进来的元素全屏
     * @param {String | Element} element 要全屏的dom名称
     */
    Fullscreen(element?: string | Element | null) {
        element = typeof element === "string" ? document.querySelector(element) : element;
        if (!element) {
            return console.warn("element does not exist！")
        }
        const methodName = this.prefixName === "" ? "requestFullscreen" : `${this.prefixName}RequestFullScreen` as keyof Element;
        typeof element[methodName] === "function" && (element[methodName] as () => void)();
    }
    // 退出全屏
    exitFullscreen() {
        if (this.isElementFullScreen()) {
            const methodName = this.prefixName === "" ? "exitFullscreen" : `${this.prefixName}ExitFullscreen` as keyof Document;
            typeof document[methodName] === "function" && (document[methodName] as () => void)();
        }
    }
    /**
     * @description: 监听进入/离开全屏
     * @param {Function} enter 进入全屏的回调
     *  @param {Function} quit 离开全屏的回调
     */
    screenChange(enter: (e: Event) => void, quit: (e: Event) => void) {
        if (!this.isFullscreenData) return;
        const methodName = `on${this.prefixName}fullscreenchange` as "onfullscreenchange";
        document[methodName] = (e: Event) => {
            if (this.isElementFullScreen()) {
                enter && enter(e); // 进入全屏回调
            } else {
                quit && quit(e); // 离开全屏的回调
            }
        }
    }
    /**
     * @description: 浏览器无法进入全屏时触发,可能是技术原因，也可能是用户拒绝：比如全屏请求不是在事件处理函数中调用,会在这里拦截到错误
     * @param {Function} enterErrorFn 回调
     */
    screenError(enterErrorFn: (e: Event) => void) {
        const methodName = `on${this.prefixName}fullscreenerror` as "onfullscreenerror";
        document[methodName] = (e: Event) => {
            enterErrorFn && enterErrorFn(e);
        };
    }
    /**
     * @description: 是否支持全屏+判断浏览器前缀
     * @param {Function} fn 不支持全屏的回调函数 这里设了一个默认值
     */
    isFullscreen(fn: () => void) {
        let fullscreenEnabled;
        let dom = document as any;
        // 判断浏览器前缀
        if (dom.fullscreenEnabled) {
            fullscreenEnabled = dom.fullscreenEnabled;
        } else if (dom.webkitFullscreenEnabled) {
            fullscreenEnabled = dom.webkitFullscreenEnabled;
            this.prefixName = "webkit";
        } else if (dom.mozFullScreenEnabled) {
            fullscreenEnabled = dom.mozFullScreenEnabled;
            this.prefixName = "moz";
        } else if (dom.msFullscreenEnabled) {
            fullscreenEnabled = dom.msFullscreenEnabled;
            this.prefixName = "ms";
        }
        if (!fullscreenEnabled) {
            this.isFullscreenData = false;
            fn && fn(); // 执行不支持全屏的回调
        }
    }
    /**
     * @description: 检测有没有元素处于全屏状态
     * @return 布尔值
     */
    isElementFullScreen() {
        let dom = document as any;
        const fullscreenElement =
            dom.fullscreenElement ||
            dom.msFullscreenElement ||
            dom.mozFullScreenElement ||
            dom.webkitFullscreenElement;
        if (fullscreenElement === null) {
            return false; // 当前没有元素在全屏状态
        } else {
            return true; // 有元素在全屏状态
        }
    }
}

/**
* @description: 全屏
* @param {String | Element} element 要全屏的dom名称
*/
export const fullScreen = (function (FullScreen) {
    let fs: FullScreen | null;
    return function (dom?: Parameters<FullScreen["Fullscreen"]>[0]): FullScreen | null {
        if (!fs) fs = new FullScreen(() => {
            console.warn("浏览器不支持全屏");
            return fs = null;
        });
        dom && fs.Fullscreen(dom);
        return fs
    }
})(FullScreen);