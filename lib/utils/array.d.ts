export declare const sortBy: <T extends {}>(array: T[], param: keyof T, order?: 'asc' | 'desc', sortFn?: (a: T[keyof T], b: T[keyof T]) => number) => T[];
export declare const updateAt: <T>(array: T[], index: number, newItem: T) => T[];
export declare const range: (n: number) => number[];
export declare const chunk: <T>(array: T[], size: number) => T[][];
export declare const groupBy: <T, K extends string | number | symbol>(array: T[], iteratee: (elem: T) => K) => Record<K, T[]>;
