import './SelectValueTag.css';
import React from 'react';
declare type SelectValueTagProps = {
    label: string;
    handleRemove: (e: React.SyntheticEvent) => void;
    size: 's' | 'm' | 'l';
    disabled: boolean;
    children?: never;
};
export declare const SelectValueTag: React.FC<SelectValueTagProps>;
export {};
