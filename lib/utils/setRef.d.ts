import * as React from 'react';
declare type Ref<T> = React.RefCallback<T> | React.MutableRefObject<T> | undefined;
export declare function setRef<T>(ref: Ref<T>, value: T): void;
export {};
