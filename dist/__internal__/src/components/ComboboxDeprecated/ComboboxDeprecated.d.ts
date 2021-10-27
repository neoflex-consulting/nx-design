import React from 'react';
import { SelectContainer } from '../SelectComponentsDeprecated/SelectContainer/SelectContainer';
import { CommonSelectProps } from '../SelectComponentsDeprecated/types';
declare type SelectContainerProps = React.ComponentProps<typeof SelectContainer>;
export declare type ComboboxSelectProps<ITEM> = CommonSelectProps<ITEM> & Omit<SelectContainerProps, 'value' | 'onChange' | 'children'> & {
    value?: ITEM | null | undefined;
    onChange?(v: ITEM | null): void;
    onCreate?(str: string): void;
    getGroupOptions?(group: ITEM): ITEM[];
    labelForCreate?: string;
    labelForNotFound?: string;
    inputRef?: React.RefObject<HTMLInputElement | null>;
};
declare type ComboboxType = <ITEM>(props: ComboboxSelectProps<ITEM>) => React.ReactElement | null;
export declare const Combobox: ComboboxType;
export {};
