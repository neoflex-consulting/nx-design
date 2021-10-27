import './CollapseIcon.css';
import React from 'react';
import { IconProps, IconPropSize } from '../../../icons/Icon/Icon';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
export declare const collapseIconPropDirection: readonly ["up", "right", "down", "left", "upRight", "downRight", "upLeft", "downLeft"];
export declare type CollapseIconPropDirection = typeof collapseIconPropDirection[number];
export declare type CollapseIconProps = PropsWithHTMLAttributes<{
    size: IconPropSize;
    icon: React.FC<IconProps>;
    isOpen?: boolean;
    cildren?: never;
    closeIcon?: React.FC<IconProps>;
    direction?: CollapseIconPropDirection;
    closeDirection?: CollapseIconPropDirection;
}, HTMLSpanElement>;
export declare const CollapseIcon: React.FC<CollapseIconProps>;
