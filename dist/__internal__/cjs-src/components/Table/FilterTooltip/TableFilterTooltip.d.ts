import './TableFilterTooltip.css';
import React from 'react';
declare type Values = string[];
declare type Props = {
    options: Array<{
        value: Values[number];
        label: string;
    }>;
    values: Values;
    field: string;
    isOpened: boolean;
    onChange: (field: string, values: Values) => void;
    onToggle: () => void;
    className?: string;
};
export declare const TableFilterTooltip: React.FC<Props>;
export {};
