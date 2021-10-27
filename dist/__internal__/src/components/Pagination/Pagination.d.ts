import './Pagination.css';
import React from 'react';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
export declare const paginationForms: readonly ["default", "round", "brick"];
export declare type PaginationPropForm = typeof paginationForms[number];
export declare const paginationDefaultForm: PaginationPropForm;
export declare const paginationSizes: readonly ["xs", "s", "m", "l"];
export declare type PaginationPropSize = typeof paginationSizes[number];
export declare const paginationDefaultSize: PaginationPropSize;
export declare const paginationTypes: readonly ["default", "input"];
export declare type PaginationPropType = typeof paginationTypes[number];
export declare const paginationDefaultType: PaginationPropType;
export declare const paginationPositions: readonly ["left", "center", "right"];
export declare type PaginationPropPosition = typeof paginationPositions[number];
export declare const paginationDefaultPosition: PaginationPropPosition;
export declare const cnPagination: import("@bem-react/classname").ClassNameFormatter;
declare type HotKey = {
    label: string;
    values: string[];
};
export declare type HotKeys = {
    nextPage: HotKey;
    prevPage: HotKey;
};
declare type Props = {
    currentPage: number;
    totalPages: number;
    onChange: (pageNumber: number) => void;
    getLabel?: (totalPages: number) => string;
    form?: PaginationPropForm;
    size?: PaginationPropSize;
    type?: PaginationPropType;
    hotkeys?: HotKeys;
    containerEventListener?: HTMLElement | Window;
    className?: string;
} & ({
    minified?: true;
    position?: never;
} | {
    minified?: false;
    position?: PaginationPropPosition;
});
declare type Pagination = (props: PropsWithHTMLAttributesAndRef<Props, HTMLDivElement>) => React.ReactElement | null;
export declare const Pagination: Pagination;
export {};
