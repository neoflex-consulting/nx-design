import './SelectValueTag.css';
import React from 'react';
declare type SelectValueTagProps = {
    label: string;
    size: 's' | 'm' | 'l';
    children?: never;
    handleRemove?: (e: React.SyntheticEvent) => void;
};
export declare const cnSelectValueTag: import("@bem-react/classname").ClassNameFormatter;
export declare const SelectValueTag: React.FC<SelectValueTagProps>;
export {};
