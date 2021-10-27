import './TableCell.css';
import React from 'react';
import { TableColumn, TableRow } from '../Table';
export declare const verticalAligns: readonly ["top", "center", "bottom"];
export declare type VerticalAlign = typeof verticalAligns[number];
export declare const horizontalAligns: readonly ["left", "center", "right"];
export declare type HorizontalAlign = typeof horizontalAligns[number];
declare type Props<T extends TableRow> = {
    column: TableColumn<T> & {
        isSticky?: boolean;
        isResized?: boolean;
        filterable?: boolean;
    };
    onClick?: (e: React.SyntheticEvent) => void;
    style?: React.CSSProperties;
    className?: string;
    wrapperClassName?: string;
    children: React.ReactNode;
    showVerticalShadow?: boolean;
    verticalAlign?: VerticalAlign;
} & ({
    type: 'header';
    isSticky?: boolean;
    isResized?: boolean;
} | {
    type: 'content';
    isClickable?: boolean;
    isBorderTop?: boolean;
    isBorderLeft?: boolean;
} | {
    type: 'resizer';
}) & React.RefAttributes<HTMLDivElement>;
declare type TableCell = <T extends TableRow>(props: Props<T>) => React.ReactElement | null;
export declare const TableCell: TableCell;
export {};
