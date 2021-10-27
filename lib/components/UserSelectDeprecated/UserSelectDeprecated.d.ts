import React, { RefObject } from 'react';
import { PropForm, PropView } from '../SelectComponentsDeprecated/types';
export declare const userSelectPropSize: readonly ["m", "s", "l"];
export declare type UserSelectPropSize = typeof userSelectPropSize[number];
export declare const userSelectPropSizeDefault: "m";
export declare type UserSelectProps<ITEM, GROUP> = {
    placeholder?: string;
    onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (v: ITEM[] | null) => void;
    getOptionLabel(arg: ITEM): string;
    getOptionKey?(arg: ITEM): string | number;
    getOptionAvatarUrl?(arg: ITEM): string;
    getOptionAdditionalInfo?(arg: ITEM): string;
    searchFunction?(item: ITEM, searchValue: string): boolean;
    ariaLabel?: string;
    id: string;
    dropdownClassName?: string;
    dropdownRef?: RefObject<HTMLDivElement>;
    name?: string;
    labelForNotFound?: string;
    value?: ITEM[] | null;
    size?: UserSelectPropSize;
    disabled?: boolean;
    form?: PropForm;
    view?: PropView;
    multiple?: boolean;
} & ({
    options: ITEM[];
    getGroupOptions: never;
} | {
    options: GROUP[];
    getGroupOptions?: (group: GROUP) => ITEM[];
});
declare type UserSelect = <ITEM, GROUP>(props: UserSelectProps<ITEM, GROUP>) => React.ReactElement | null;
export declare const UserSelect: UserSelect;
export {};
