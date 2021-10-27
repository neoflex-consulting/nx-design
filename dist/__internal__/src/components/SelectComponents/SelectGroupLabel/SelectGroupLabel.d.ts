import './SelectGroupLabel.css';
import React from 'react';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
import { PropSize } from '../types';
declare type SelectGroupLabelProps = PropsWithHTMLAttributes<{
    label?: string;
    size: PropSize;
    indent: 'normal' | 'increased';
}, HTMLDivElement>;
export declare const cnSelectGroupLabel: import("@bem-react/classname").ClassNameFormatter;
export declare const SelectGroupLabel: React.FC<SelectGroupLabelProps>;
export {};
