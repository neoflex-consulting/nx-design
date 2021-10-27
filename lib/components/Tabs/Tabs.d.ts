import './Tabs.css';
import React from 'react';
import { IconProps, IconPropSize } from '../../icons/Icon/Icon';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
import { cnTabsTab, TabsTab } from './Tab/TabsTab';
export declare const tabsSizes: readonly ["m", "s"];
export declare type TabsPropSize = typeof tabsSizes[number];
export declare const tabsDefaultSize: TabsPropSize;
export declare const tabsViews: readonly ["bordered", "clear"];
export declare type TabsPropView = typeof tabsViews[number];
export declare const tabsDefaultView: TabsPropView;
export declare const tabsLinePositions: readonly ["bottom", "top", "left", "right"];
export declare type TabsPropLinePosition = typeof tabsLinePositions[number];
export declare const tabsDefaultLinePosition: TabsPropLinePosition;
export declare const tabsFitModes: readonly ["scroll", "dropdown"];
export declare type TabsPropFitMode = typeof tabsFitModes[number];
export declare const tabsDefaultFitMode: TabsPropFitMode;
export declare type TabsPropGetLabel<ITEM> = (item: ITEM) => string | number;
export declare type TabsPropGetIcon<ITEM> = (item: ITEM) => React.FC<IconProps> | undefined;
export declare type TabsPropOnChange<ITEM, ITEM_ELEMENT> = (props: {
    e: React.MouseEvent<ITEM_ELEMENT>;
    value: ITEM;
}) => void;
declare type RenderItemProps<ITEM, ELEMENT extends HTMLElement> = {
    item: ITEM;
    onChange: React.MouseEventHandler<ELEMENT>;
    checked: boolean;
    label: string;
    icon?: React.FC<IconProps>;
    size: TabsPropSize;
    iconSize?: IconPropSize;
    onlyIcon?: boolean;
};
declare type RenderItem<ITEM, ELEMENT extends HTMLElement> = (props: RenderItemProps<ITEM, ELEMENT>) => React.ReactElement | null;
export declare type TabsProps<ITEM, ITEM_ELEMENT extends HTMLElement = HTMLButtonElement> = PropsWithHTMLAttributesAndRef<{
    size?: TabsPropSize;
    onlyIcon?: boolean;
    view?: TabsPropView;
    iconSize?: IconPropSize;
    items: ITEM[];
    value?: ITEM | null;
    getIcon?: TabsPropGetIcon<ITEM>;
    getLabel: TabsPropGetLabel<ITEM>;
    children?: never;
    onChange: TabsPropOnChange<ITEM, ITEM_ELEMENT>;
    renderItem?: RenderItem<ITEM, ITEM_ELEMENT>;
} & ({
    linePosition?: Extract<TabsPropLinePosition, 'bottom' | 'top'>;
    fitMode?: 'dropdown' | 'scroll';
} | {
    linePosition: Extract<TabsPropLinePosition, 'left' | 'right'>;
    fitMode?: never;
}), HTMLDivElement>;
declare type Tabs = <ITEM, ITEMELEMENT extends HTMLElement = HTMLButtonElement>(props: TabsProps<ITEM, ITEMELEMENT>, ref: React.Ref<HTMLDivElement>) => React.ReactElement | null;
export declare const cnTabs: import("@bem-react/classname").ClassNameFormatter;
export declare const Tabs: Tabs;
export { TabsTab, cnTabsTab };
