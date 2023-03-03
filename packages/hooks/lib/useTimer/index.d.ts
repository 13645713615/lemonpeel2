export declare type UseTimerOptions = {
    delay?: number;
    immediate?: boolean;
    endTime?: number;
};
export declare function useTimer(effect: (count: number, clear: () => void) => void, options?: UseTimerOptions): () => void;
