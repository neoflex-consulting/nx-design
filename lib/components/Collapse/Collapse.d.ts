import './Collapse.css';
import React from 'react';
import { IconProps, IconPropSize } from '../../icons/Icon/Icon';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
import { CollapseIconPropDirection } from './CollapseIcon/CollapseIcon';
export declare const collapsePropSize: readonly ["m", "l", "s", "xs", "2xs"];
export declare type CollapsePropSize = typeof collapsePropSize[number];
export declare const collapsePropSizeDefault: "m";
export declare const collapsePropView: readonly ["primary", "secondary"];
export declare type CollapsePropView = typeof collapsePropView[number];
export declare const collapsePropViewDefault: "primary";
export declare const collapsePropHorizontalSpace: readonly ["3xs", "6xl", "5xl", "4xl", "3xl", "2xl", "xl", "l", "m", "s", "xs", "2xs"];
export declare type CollapsePropHorizontalSpace = typeof collapsePropHorizontalSpace[number];
export declare const collapsePropIconPosition: readonly ["left", "right"];
export declare type CollapsePropIconPosition = typeof collapsePropIconPosition[number];
export declare const collapsePropIconPositionDefault: "left";
export declare const collapsePropDirectionIcon: readonly ["up", "right", "down", "left", "upRight", "downRight", "upLeft", "downLeft"];
export declare const collapsePropDirectionIconDefault: "up";
export declare const collapsePropCloseDirectionIconDefault: "down";
declare type CollapseProps = PropsWithHTMLAttributesAndRef<{
    size?: CollapsePropSize;
    icon?: React.FC<IconProps>;
    view?: CollapsePropView;
    divider?: boolean;
    label: string;
    horizontalSpace?: CollapsePropHorizontalSpace;
    hoverEffect?: boolean;
    isOpen?: boolean;
} & ({
    closeIcon?: React.FC<IconProps>;
    directionIcon?: never;
    closeDirectionIcon?: never;
} | {
    closeIcon?: never;
    directionIcon?: CollapseIconPropDirection;
    closeDirectionIcon?: CollapseIconPropDirection;
}) & ({
    iconPosition?: 'left';
    rightSide?: React.ReactNode;
} | {
    iconPosition?: 'right';
    rightSide?: never;
}), HTMLDivElement>;
declare type Collapse = (props: CollapseProps) => React.ReactElement | null;
export declare const cnCollapse: import("@bem-react/classname").ClassNameFormatter;
export declare const sizeIconMap: Record<CollapsePropSize, IconPropSize>;
export declare const Collapse: Collapse;
export {};
