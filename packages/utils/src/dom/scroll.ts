/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-02-08 11:01:36
 * @LastEditTime: 2023-02-08 15:55:38
 */

export type ScrollPosition = { left: number; top: number };

type TargetType = Element | Document


export function setScrollPosition<T extends TargetType>(target: T, position: Partial<ScrollPosition>, behavior: ScrollBehavior = 'auto') {

    const el: Element | HTMLElement = target instanceof Document ? document.body : target;

    el.scrollTo({ top: position.top, left: position.left, behavior })
}

export function getScrollPosition<T extends TargetType>(target: T): ScrollPosition {
    if (target === document) {
        if (document.scrollingElement) {
            return {
                left: document.scrollingElement.scrollLeft,
                top: document.scrollingElement.scrollTop,
            };
        } else {
            return {
                left: Math.max(
                    window.pageXOffset,
                    document.documentElement.scrollLeft,
                    document.body.scrollLeft,
                ),
                top: Math.max(
                    window.pageYOffset,
                    document.documentElement.scrollTop,
                    document.body.scrollTop,
                ),
            };
        }
    } else {
        return {
            left: (target as Element).scrollLeft,
            top: (target as Element).scrollTop,
        }
    }
}