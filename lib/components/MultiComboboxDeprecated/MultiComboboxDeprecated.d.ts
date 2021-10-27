import React from 'react';
import { SelectContainer } from '../SelectComponentsDeprecated/SelectContainer/SelectContainer';
import { CommonSelectProps } from '../SelectComponentsDeprecated/types';
declare type SelectContainerProps = React.ComponentProps<typeof SelectContainer>;
export declare const multiComboboxPropSize: readonly ["m", "s", "l"];
export declare type MultiComboboxPropSize = typeof multiComboboxPropSize[number];
export declare const multiComboboxPropSizeDefault: "m";
export declare type MultiComboboxProps<ITEM, GROUP> = Omit<CommonSelectProps<ITEM>, 'options'> & Omit<SelectContainerProps, 'value' | 'onChange'> & {
    onChange?: (values: ITEM[] | null) => void;
    onCreate?: (str: string) => void;
    labelForCreate?: string;
    labelForNotFound?: string;
    value?: ITEM[] | null;
    size?: MultiComboboxPropSize;
} & ({
    options: ITEM[];
    getGroupOptions: never;
} | {
    options: GROUP[];
    getGroupOptions?: (group: GROUP) => ITEM[];
});
declare type MultiCombobox = <ITEM, GROUP>(props: MultiComboboxProps<ITEM, GROUP>) => React.ReactElement | null;
export declare const MultiCombobox: MultiCombobox;
export {};
