import React from 'react';
import { TableColumn, TableRow, ValueOf } from './Table';
export declare type FilterComponentProps = {
    onConfirm: (value: any) => void;
    onCancel: () => void;
    filterValue?: any;
} & Record<string, unknown>;
export declare type Filters<T extends TableRow> = ValueOf<{
    [K in keyof T]: {
        id: string;
        name: string;
        field: K extends string ? K : never;
        filterer(value: any, filterValue?: any): boolean;
    } & ({
        component?: never;
    } | {
        component: {
            name: React.FC<FilterComponentProps>;
            props?: Omit<FilterComponentProps, 'onConfirm' | 'filterValue'>;
        };
    });
}>[];
export declare type SortByProps<T extends TableRow> = {
    sortingBy: keyof T;
    sortOrder: 'asc' | 'desc';
};
export declare type onSortBy<T extends TableRow> = (props: SortByProps<T> | null) => void;
export declare type FieldSelectedValues = string[];
declare type SelectedFilter = {
    selected: FieldSelectedValues;
    value?: any;
};
export declare type SelectedFilters = {
    [field: string]: SelectedFilter;
};
declare type SelectedFiltersList = Array<{
    id: string;
    name: string;
}>;
export declare const getOptionsForFilters: <T extends TableRow>(filters: Filters<T>, field: string) => {
    value: string;
    label: string;
}[];
export declare const getSelectedFiltersInitialState: <T extends TableRow>(filters?: Filters<T> | undefined) => SelectedFilters;
export declare const fieldFiltersPresent: <T extends TableRow>(tableFilters: Filters<T>, field: string) => boolean;
export declare const isSelectedFiltersPresent: (selectedFilters: SelectedFilters) => boolean;
export declare const getSelectedFiltersList: <T extends TableRow>({ filters, selectedFilters, columns, }: {
    filters: Filters<T>;
    selectedFilters: SelectedFilters;
    columns: TableColumn<T>[];
}) => SelectedFiltersList;
export declare const filterTableData: <T extends TableRow>({ data, filters, selectedFilters, }: {
    data: T[];
    filters: Filters<T>;
    selectedFilters: SelectedFilters;
}) => T[];
export declare const useSelectedFilters: <T extends TableRow>(filters?: Filters<T> | undefined, onFiltersUpdated?: ((filters: SelectedFilters) => void) | undefined) => {
    selectedFilters: SelectedFilters;
    updateSelectedFilters: (field: string, tooltipSelectedFilters: FieldSelectedValues, value?: any) => void;
    removeOneSelectedFilter: (availableFilters: Filters<T>, filter: string) => void;
    removeAllSelectedFilters: (availableFilters: Filters<T>) => void;
};
export {};
