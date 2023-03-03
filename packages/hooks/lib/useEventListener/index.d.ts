import type { BasicTarget } from "../utils";
declare type Noop = (...p: any) => void;
declare type Target = BasicTarget<HTMLElement | Element | Window | Document>;
declare type Options<T extends Target = Target> = {
    target?: T;
    once?: boolean;
    passive?: boolean;
    capture?: boolean;
};
declare function useEventListener<K extends keyof HTMLElementEventMap>(eventName: K, listener: (ev: HTMLElementEventMap[K]) => void, options?: Options<HTMLElement>): void;
declare function useEventListener<K extends keyof ElementEventMap>(eventName: K, listener: (ev: ElementEventMap[K]) => void, options?: Options<Element>): void;
declare function useEventListener<K extends keyof DocumentEventMap>(eventName: K, listener: (ev: DocumentEventMap[K]) => void, options?: Options<Document>): void;
declare function useEventListener<K extends keyof WindowEventMap>(eventName: K, listener: (ev: WindowEventMap[K]) => void, options?: Options<Window>): void;
declare function useEventListener(eventName: string, listener: Noop, options: Options): void;
export { useEventListener, Options as UseEventListenerOptions };
