import './Table.css';
import React from 'react';
import { HorizontalAlign, VerticalAlign } from './Cell/TableCell';
import { Filters, onSortBy, SelectedFilters } from './filtering';
import { Position } from './helpers';
export { TableTextFilter } from './TextFilter/TableTextFilter';
export { TableFilterContainer } from './FilterContainer/TableFilterContainer';
export { TableNumberFilter } from './NumberFilter/TableNumberFilter';
export { TableChoiceGroupFilter } from './ChoiceGroupFilter/TableChoiceGroupFilter';
export declare const sizes: readonly ["s", "m", "l"];
declare type Size = typeof sizes[number];
export declare const zebraStriped: readonly ["odd", "even"];
declare type ZebraStriped = typeof zebraStriped[number];
export declare const headerVerticalAligns: readonly ["center", "bottom"];
export declare type HeaderVerticalAlign = typeof headerVerticalAligns[number];
export declare type LazyLoad = {
    maxVisibleRows?: number;
    scrollableEl?: HTMLDivElement | Window;
} | undefined;
declare type ActiveRow = {
    id: string | undefined;
    onChange: ({ id, e }: {
        id: string | undefined;
        e?: React.SyntheticEvent;
    }) => void;
};
declare type onRowHover = ({ id, e }: {
    id: string | undefined;
    e: React.MouseEvent;
}) => void;
declare type onRowClick = ({ id, e }: {
    id: string;
    e: React.MouseEvent;
}) => void;
export declare type TableRow = {
    id: string;
    rows?: TableRow[];
};
export declare type TableTreeRow<T extends TableRow> = {
    level: number;
    parentId?: string;
} & T;
export declare type TableFilters<T extends TableRow> = Filters<T>;
export declare type RowField<T extends TableRow> = Exclude<keyof T, symbol | number>;
export declare type ColumnWidth = number | undefined;
export declare type ValueOf<T> = T[keyof T];
declare type ColumnBase<T extends TableRow> = ValueOf<{
    [K in keyof T]: {
        accessor: K extends string ? K : never;
        sortable?: boolean;
        sortByField?: keyof T;
        sortFn?(a: T[K], b: T[K]): number;
        renderCell?: (row: T) => React.ReactNode;
    };
}>;
declare type SingleColumnAddition<T extends TableRow> = ColumnBase<T> & {
    columns?: never;
};
declare type GroupColumnAddition<T extends TableRow> = {
    columns: TableColumn<T>[];
} & {
    [K in keyof ColumnBase<T>]?: never;
};
export declare type TableColumn<T extends TableRow> = {
    title: React.ReactNode;
    align?: HorizontalAlign;
    withoutPadding?: boolean;
    width?: ColumnWidth;
    mergeCells?: boolean;
    position?: Position;
} & (GroupColumnAddition<T> | SingleColumnAddition<T>);
export declare type Props<T extends TableRow> = {
    columns: TableColumn<T>[];
    rows: T[];
    filters?: Filters<T>;
    onSortBy?: onSortBy<T>;
    size?: Size;
    stickyHeader?: boolean;
    stickyColumns?: number;
    isResizable?: boolean;
    activeRow?: ActiveRow;
    verticalAlign?: VerticalAlign;
    headerVerticalAlign?: HeaderVerticalAlign;
    zebraStriped?: ZebraStriped;
    borderBetweenRows?: boolean;
    borderBetweenColumns?: boolean;
    emptyRowsPlaceholder?: React.ReactNode;
    className?: string;
    onRowHover?: onRowHover;
    onRowClick?: onRowClick;
    lazyLoad?: LazyLoad;
    onFiltersUpdated?: (filters: SelectedFilters) => void;
    isExpandedRowsByDefault?: boolean;
};
export declare type ColumnMetaData = {
    filterable: boolean;
    isSortingActive: boolean;
    isFilterActive: boolean;
    isResized: boolean;
    isSticky: boolean;
    showResizer: boolean;
    columnWidth: number;
    columnLeftOffset: number;
};
export declare type SortingState<T extends TableRow> = {
    by: keyof T;
    order: 'asc' | 'desc';
    sortFn?: (a: T[keyof T], b: T[keyof T]) => number;
} | null;
export declare const Table: <T extends TableRow>({ columns, rows, size, filters, isResizable, stickyHeader, stickyColumns, activeRow, verticalAlign, headerVerticalAlign, zebraStriped, borderBetweenRows, borderBetweenColumns, emptyRowsPlaceholder, className, onRowHover, onRowClick, lazyLoad, onSortBy, onFiltersUpdated, isExpandedRowsByDefault, }: Props<T>) => React.ReactElement;
