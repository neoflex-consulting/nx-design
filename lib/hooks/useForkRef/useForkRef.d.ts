/// <reference types="react" />
declare type AtributesRef<T> = React.Ref<T> | undefined;
declare type ResultRef<T> = React.RefCallback<T> | null;
export declare function useForkRef<T>(refs: AtributesRef<T>[]): ResultRef<T>;
export {};
