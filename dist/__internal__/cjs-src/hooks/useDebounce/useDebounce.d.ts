declare type UseDebounce = <T extends (...args: any) => void>(fn: T, time: number) => (...args: Parameters<T>) => void;
export declare const useDebounce: UseDebounce;
export {};
