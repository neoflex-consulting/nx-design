import './SelectItem.css';
import React from 'react';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
import { PropSize } from '../types';
export declare type SelectItemProps = PropsWithHTMLAttributes<{
    label: string;
    active: boolean;
    hovered: boolean;
    multiple: boolean;
    size: PropSize;
    indent: 'normal' | 'increased';
    disabled: boolean | undefined;
}, HTMLDivElement>;
export declare const cnSelectItem: import("@bem-react/classname").ClassNameFormatter;
export declare const SelectItem: React.FC<SelectItemProps>;
