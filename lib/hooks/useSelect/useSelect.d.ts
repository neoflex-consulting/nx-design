import React from 'react';
declare type IndexForHighlight = number | ((oldIndex: number) => number);
declare type Group<ITEM, GROUP> = {
    items: ITEM[];
    key: string | number;
    group?: GROUP;
};
declare type GetItemGroupKey<ITEM> = (item: ITEM) => string | number | undefined;
declare type GetGroupKey<GROUP> = (item: GROUP) => string | number | undefined;
declare type SortGroups<ITEM, GROUP> = (a: Group<ITEM, GROUP>, b: Group<ITEM, GROUP>) => number;
declare type OnChangeProp<ITEM, MULTIPLE extends boolean> = (props: {
    value: (MULTIPLE extends true ? ITEM[] : ITEM) | null;
    e: React.SyntheticEvent;
}) => void;
declare type ValueProp<ITEM, MULTIPLE extends boolean> = (MULTIPLE extends true ? ITEM[] : ITEM) | null | undefined;
export declare type OptionForCreate = {
    label: string;
    __optionForCreate: boolean;
};
export declare type SelectProps<ITEM, GROUP, MULTIPLE extends boolean> = {
    getItemGroupKey?: GetItemGroupKey<ITEM> | undefined;
    getGroupKey?: GetGroupKey<GROUP>;
    sortGroups?: SortGroups<ITEM, GROUP>;
    groups?: GROUP[];
    items: ITEM[];
    dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
    controlRef: React.MutableRefObject<HTMLDivElement | null>;
    disabled?: boolean;
    getItemLabel: (item: ITEM) => string;
    getItemKey: (item: ITEM) => string | number;
    getItemDisabled?: (item: ITEM) => boolean | undefined;
    searchFunction?: (item: ITEM, searchValue: string) => boolean;
    onCreate?: (props: {
        e: React.SyntheticEvent;
        label: string;
    }) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    multiple: boolean;
    onChange: OnChangeProp<ITEM, MULTIPLE>;
    value: ValueProp<ITEM, MULTIPLE>;
};
export declare type OptionProps<ITEM> = {
    index: number;
    item: ITEM | OptionForCreate;
};
export declare type GetOptionPropsResult = {
    onClick: (e: React.SyntheticEvent) => void;
    onMouseEnter: (e: React.SyntheticEvent) => void;
    active: boolean;
    hovered: boolean;
    key: string | number;
};
export declare const isOptionForCreate: <ITEM, GROUP>(params: OptionForCreate | ITEM | Group<ITEM, GROUP>) => params is OptionForCreate;
export declare function useSelect<ITEM, GROUP, MULTIPLE extends boolean>(params: SelectProps<ITEM, GROUP, MULTIPLE>): {
    isOpen: boolean;
    isFocused: boolean;
    highlightedIndex: number;
    visibleItems: (OptionForCreate | {
        items: ITEM[];
        key: React.ReactText;
        group?: GROUP | undefined;
        groupIndex: number;
    })[];
    highlightIndex: (indexForHighlight: IndexForHighlight, scrollToHighlighted: any) => void;
    getOptionProps: ({ index, item }: OptionProps<ITEM>) => GetOptionPropsResult;
    handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleToggleDropdown: () => void;
    handleInputClick: () => void;
    inputRef: React.RefObject<HTMLInputElement>;
    getKeyProps: (rest?: import("../useKeys/useKeys").KeyProps | undefined) => import("../useKeys/useKeys").KeyProps;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
    clearValue: (e: React.SyntheticEvent) => void;
    getHandleRemoveValue: (item: ITEM) => (e: React.SyntheticEvent) => void;
};
export {};
