export declare const isDefined: <T>(p: T) => p is Exclude<T, undefined>;
export declare const isNotNil: <T>(p: T) => p is Exclude<T, null | undefined>;
export declare const isNumber: (value: unknown) => value is number;
