import './TabsTab.css';
import React from 'react';
import { IconProps, IconPropSize } from '../../../icons/Icon/Icon';
import { TabsPropSize } from '../Tabs';
export declare const cnTabsTab: import("@bem-react/classname").ClassNameFormatter;
declare type Props = {
    size: TabsPropSize;
    onlyIcon?: boolean;
    icon?: React.FC<IconProps>;
    iconSize?: IconPropSize;
    label: string;
    checked: boolean;
    onChange: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
};
export declare const TabsTab: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export {};
