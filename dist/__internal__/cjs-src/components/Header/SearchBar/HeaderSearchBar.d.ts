import './HeaderSearchBar.css';
import React from 'react';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { TextFieldPropOnChange, TextFieldPropValue } from '../../TextField/TextField';
export declare const cnHeaderSearchBar: import("@bem-react/classname").ClassNameFormatter;
export declare type SearchBarPropValue = TextFieldPropValue;
export declare type SearchBarPropOnChange = TextFieldPropOnChange;
export declare type SearchBarPropOnSearch = (arg: SearchBarOnSearchArguments) => void;
export declare type SearchBarOnSearchArguments = {
    e: React.FormEvent;
    value: SearchBarPropValue;
};
declare type SearchBarProps = PropsWithJsxAttributes<{
    placeholder?: string;
    label?: string;
    value?: SearchBarPropValue;
    onSearch?: SearchBarPropOnSearch;
    onChange?: SearchBarPropOnChange;
    children?: never;
}, 'form'>;
export declare const HeaderSearchBar: React.FC<SearchBarProps>;
export {};
