declare type PaginationInfo = {
    isEmpty: boolean;
    prevPage: number | null;
    nextPage: number | null;
    isStartDots: boolean | 0 | null;
    isEndDots: boolean | 0 | null;
    pages: number[];
};
export declare const getPaginationInfo: (currentPage: number, totalPages: number) => PaginationInfo;
export {};
