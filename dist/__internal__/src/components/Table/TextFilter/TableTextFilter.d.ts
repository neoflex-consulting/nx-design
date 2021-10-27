import './TableTextFilter.css';
import React from 'react';
import { FilterComponentProps } from '../filtering';
declare type Item = {
    name: string;
    value: string;
};
declare type TableTextFilterProps = FilterComponentProps & {
    items?: Item[];
    withSearch?: boolean;
    title?: string;
    emptySearchText?: string;
};
export declare const TableTextFilter: React.FC<TableTextFilterProps>;
export {};
