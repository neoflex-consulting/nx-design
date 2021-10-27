import './ChoiceGroup.css';
import React from 'react';
import { IconProps, IconPropSize } from '../../icons/Icon/Icon';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
export declare const choiceGroupForms: readonly ["default", "brick", "round"];
export declare type ChoiceGroupPropForm = typeof choiceGroupForms[number];
export declare const choiceGroupDefaultForm: ChoiceGroupPropForm;
export declare const choiceGroupSizes: readonly ["xs", "s", "m", "l"];
export declare type ChoiceGroupPropSize = typeof choiceGroupSizes[number];
export declare const choiceGroupDefaultSize: ChoiceGroupPropSize;
export declare const choiceGroupViews: readonly ["primary", "ghost", "secondary"];
export declare type ChoiceGroupPropView = typeof choiceGroupViews[number];
export declare const choiceGroupDefaultView: ChoiceGroupPropView;
export declare const choiceGroupWidth: readonly ["default", "full"];
export declare type СhoiceGroupPropWidth = typeof choiceGroupWidth[number];
export declare const choiceGroupWidthDefault: СhoiceGroupPropWidth;
export declare type ChoiceGroupPropGetLabel<ITEM> = (item: ITEM) => string | number;
export declare type ChoiceGroupPropGetIcon<ITEM> = (item: ITEM) => React.FC<IconProps> | undefined;
declare type CommonProps<ITEM> = {
    size?: ChoiceGroupPropSize;
    form?: ChoiceGroupPropForm;
    view?: ChoiceGroupPropView;
    width?: СhoiceGroupPropWidth;
    onlyIcon?: boolean;
    iconSize?: IconPropSize;
    items: ITEM[];
    getLabel: ChoiceGroupPropGetLabel<ITEM>;
    getIcon?: ChoiceGroupPropGetIcon<ITEM>;
    name: string;
    children?: never;
};
declare type OnChangeMultiple<ITEM> = (props: {
    e: React.ChangeEvent<HTMLInputElement>;
    value: ITEM[] | null;
}) => void;
declare type OnChangeWithoutMultiple<ITEM> = (props: {
    e: React.ChangeEvent<HTMLInputElement>;
    value: ITEM;
}) => void;
declare type PropsWithMultiple<ITEM> = {
    value?: ITEM[] | null;
    multiple: true;
    onChange: OnChangeMultiple<ITEM>;
};
declare type PropsWithoutMultiple<ITEM> = {
    value?: ITEM | null;
    multiple: false;
    onChange: OnChangeWithoutMultiple<ITEM>;
};
declare type Props<ITEM> = PropsWithHTMLAttributesAndRef<CommonProps<ITEM> & (PropsWithMultiple<ITEM> | PropsWithoutMultiple<ITEM>), HTMLDivElement>;
declare type ChoiceGroup = <ITEM>(props: Props<ITEM>) => React.ReactElement | null;
export declare const cnChoiceGroup: import("@bem-react/classname").ClassNameFormatter;
export declare const ChoiceGroup: ChoiceGroup;
export {};
