import './SelectCreateButton.css';
import React from 'react';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
import { PropSize } from '../types';
declare type SelectCreateButtonProps = PropsWithHTMLAttributes<{
    labelForCreate?: string;
    inputValue?: string;
    active: boolean;
    hovered: boolean;
    size: PropSize;
    indent: 'normal' | 'increased';
}, HTMLDivElement>;
export declare const SelectCreateButton: React.FC<SelectCreateButtonProps>;
export {};
