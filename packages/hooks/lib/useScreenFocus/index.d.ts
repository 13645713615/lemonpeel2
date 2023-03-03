export interface useScreenFocusOptions {
    wait?: number;
}
export declare function useScreenFocus(listener: (event: Event) => void, options?: useScreenFocusOptions): () => void;
