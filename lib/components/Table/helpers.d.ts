import React from 'react';
import { ColumnWidth, SortingState, TableColumn, TableRow, TableTreeRow } from './Table';
export declare type Position = {
    colSpan?: number;
    rowSpan?: number;
    level: number;
    gridIndex: number;
    topHeaderGridIndex: number;
    smallTextSize?: boolean;
    height?: number;
};
export declare type Header<T extends TableRow> = TableColumn<T> & {
    position: Position;
};
export declare type HeaderData<T extends TableRow> = {
    headers: Array<Header<T>>[];
    flattenedHeaders: Array<Header<T>>;
    lowHeaders: Array<Header<T>>;
    headerRowsRefs: React.MutableRefObject<Record<number, HTMLDivElement | null>>;
    headerRowsHeights: Array<number>;
    headerColumnsHeights: Array<number>;
    resizerTopOffsets: Array<number>;
};
export declare const getColumnsSize: (sizes: ColumnWidth[]) => string;
export declare const getColumnLeftOffset: ({ columnIndex, resizedColumnWidths, initialColumnWidths, }: {
    columnIndex: number;
    resizedColumnWidths: Array<number | undefined>;
    initialColumnWidths: number[];
}) => number;
export declare const getNewSorting: <T extends TableRow>(currentSorting: SortingState<T>, newField: keyof T, sortFn?: ((a: T[keyof T], b: T[keyof T]) => number) | undefined) => SortingState<T>;
export declare const getMaxLevel: <T extends TableRow>(columns: TableColumn<T>[]) => number;
export declare const transformColumns: <T extends TableRow>(columns: TableColumn<T>[], maxLevel: number) => (({
    title: React.ReactNode;
    align?: "left" | "center" | "right" | undefined;
    withoutPadding?: boolean | undefined;
    width?: number | undefined;
    mergeCells?: boolean | undefined;
    position?: Position | undefined;
} & {
    columns: TableColumn<T>[];
} & { [K_1 in keyof import("./Table").ValueOf<{ [K in keyof T]: {
    accessor: K extends string ? K : never;
    sortable?: boolean | undefined;
    sortByField?: keyof T | undefined;
    sortFn?(a: T[K], b: T[K]): number;
    renderCell?: ((row: T) => React.ReactNode) | undefined;
}; }>]?: undefined; } & {
    position: Position;
}) | ({
    title: React.ReactNode;
    align?: "left" | "center" | "right" | undefined;
    withoutPadding?: boolean | undefined;
    width?: number | undefined;
    mergeCells?: boolean | undefined;
    position?: Position | undefined;
} & import("./Table").ValueOf<{ [K in keyof T]: {
    accessor: K extends string ? K : never;
    sortable?: boolean | undefined;
    sortByField?: keyof T | undefined;
    sortFn?(a: T[K], b: T[K]): number;
    renderCell?: ((row: T) => React.ReactNode) | undefined;
}; }> & {
    columns?: undefined;
} & {
    position: Position;
}))[][];
/**
 * Возвращает данные, необходимые для построения хидера таблицы
 *
 * @param columns - массив колонок
 *
 * @return {
 *   {Array<Header<T>>[]} headers: двумерный массив заголовков, выстроенный по вертикали;
 *   {Array<Header<T>>} flattenedHeaders: плоский массив заголовков;
 *   {Array<Header<T>>} lowHeaders: самые нижние заголовки (по ним строятся колонки);
 *   {Record<number, HTMLDivElement | null>} headerRowsRefs: содержит рефы на заголовки;
 *   {Array<number>} headerRowsHeights: массив высот строк заголовков;
 *   {Array<number>} headerColumnsHeights: массив высот колонок заголовков;
 *   {Array<number>} resizerTopOffsets: массив отступов для компонентов Resizer;
 * }
 */
export declare const useHeaderData: <T extends TableRow>(columns: TableColumn<T>[]) => HeaderData<T>;
/**
 * Возвращает 2 функции, необходимые для отображения большого количества строк в таблице
 *
 * @param maxVisibleRows - максимальное количество отображаемых строк в один момент времени
 * @param scrollableEl - элемент, на который вешается scroll listener
 * @param enabled - флаг включения данной функциональность
 *
 * @return {
 *   getSlicedRows: функция, обрезающая исходный массив данных
 *   setBoundaryRef: функция, проставляющая рефы необходимым ячейкам для вычисления границ отображения строк
 * }
 */
export declare const useLazyLoadData: (maxVisibleRows: number, scrollableEl: HTMLDivElement | Window | null, enabled: boolean) => {
    getSlicedRows: <T extends TableRow>(rows: T[]) => T[];
    setBoundaryRef: (columnIdx: number, rowIdx: number) => React.RefObject<HTMLDivElement> | undefined;
};
export declare const transformRows: <T extends TableRow>(rows: T[], expandedRowIds: string[], isTableExpanded?: boolean | undefined) => TableTreeRow<T>[];
