import React from 'react';
import { IconProps } from '../../icons/Icon/Icon';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
import { Direction } from '../Popover/Popover';
export declare const themeTogglerPropSize: readonly ["m", "l", "s", "xs"];
export declare type ThemeTogglerPropSize = typeof themeTogglerPropSize[number];
export declare const themeTogglerPropSizeDefault: ThemeTogglerPropSize;
export declare type ThemePropSetValue<ITEM> = (props: {
    e: React.MouseEvent;
    value: ITEM;
}) => void;
export declare type ThemePropGetKey<ITEM> = (item: ITEM) => string | number;
export declare type ThemePropGetLabel<ITEM> = (item: ITEM) => string;
export declare type ThemePropGetIcon<ITEM> = (item: ITEM) => React.FC<IconProps>;
export declare type Props<ITEM> = PropsWithHTMLAttributesAndRef<{
    size?: ThemeTogglerPropSize;
    className?: string;
    items: ITEM[];
    value: ITEM;
    onChange: ThemePropSetValue<ITEM>;
    getItemKey?: ThemePropGetKey<ITEM>;
    getItemLabel: ThemePropGetLabel<ITEM>;
    getItemIcon: ThemePropGetIcon<ITEM>;
    direction?: Direction;
    possibleDirections?: readonly Direction[];
    children?: never;
}, HTMLButtonElement>;
declare type ThemeToggler = <ITEM>(props: Props<ITEM>) => React.ReactElement | null;
export declare const ThemeToggler: ThemeToggler;
export {};