import './SelectDropdown.css';
import React from 'react';
import { GetOptionPropsResult, OptionForCreate, OptionProps } from '../../../hooks/useSelect/useSelect';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { PropSize, RenderItemProps } from '../types';
export declare const selectDropdownform: readonly ["default", "brick", "round"];
export declare type SelectDropdownPropForm = typeof selectDropdownform[number];
export declare const defaultSelectDropdownPropForm: "default";
declare type Props<ITEM, GROUP> = PropsWithJsxAttributes<{
    size: PropSize;
    controlRef: React.MutableRefObject<HTMLDivElement | null>;
    dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
    getOptionProps(props: OptionProps<ITEM>): GetOptionPropsResult;
    form: SelectDropdownPropForm;
    isOpen: boolean;
    renderItem: (props: RenderItemProps<ITEM>) => JSX.Element | null;
    visibleItems: (OptionForCreate | {
        items: ITEM[];
        key: string | number;
        group?: GROUP;
        groupIndex: number;
    })[];
    getGroupLabel?: (group: GROUP) => string;
    labelForCreate?: string;
    labelForNotFound?: string;
}>;
declare type SelectDropdown = <ITEM, GROUP>(props: Props<ITEM, GROUP>) => React.ReactElement | null;
export declare const SelectDropdown: SelectDropdown;
export {};
