import './SelectItem.css';
import React from 'react';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
import { PropSize } from '../types';
export declare type SelectItemProps<ITEM> = PropsWithHTMLAttributes<{
    label: string;
    item: ITEM;
    active: boolean;
    hovered: boolean;
    multiple: boolean;
    size: PropSize;
    indent: 'normal' | 'increased';
}, HTMLDivElement>;
export declare const cnSelectItem: import("@bem-react/classname").ClassNameFormatter;
declare type SelectItem = <ITEM>(props: SelectItemProps<ITEM>) => React.ReactElement | null;
export declare const SelectItem: SelectItem;
export {};
