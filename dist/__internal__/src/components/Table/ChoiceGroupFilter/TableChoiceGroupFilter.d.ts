import './TableChoiceGroupFilter.css';
import React from 'react';
import { FilterComponentProps } from '../filtering';
declare type Item = {
    name: string;
    value: string | undefined;
};
declare type Props = FilterComponentProps & {
    items?: Item[];
    title?: string;
};
export declare const TableChoiceGroupFilter: React.FC<Props>;
export {};
