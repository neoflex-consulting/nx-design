import React from 'react';
import { TabsPropGetLabel, TabsPropLinePosition } from './Tabs';
export declare type TabDimensions = {
    size: number;
    gap: number;
};
export declare type TabsFitModeWrapperProps<ITEM> = {
    items: ITEM[];
    tabsDimensions: TabDimensions[];
    getLabel: TabsPropGetLabel<ITEM>;
    getChecked: (item: ITEM) => boolean;
    renderItem: (item: ITEM) => React.ReactNode;
    renderItemsList: RenderItemsListProp;
    tabRefs: Array<React.RefObject<HTMLElement>>;
};
export declare type RenderItemsListProp = (props: {
    withRunningLine?: boolean;
    getTabClassName?: (idx: number) => string | undefined;
}) => React.ReactNode;
export declare type TabsDirection = 'horizontal' | 'vertical';
export declare const getTabsDirection: (linePosition: TabsPropLinePosition) => TabsDirection;
export declare const getTabsWidth: (tabsDimensions: TabDimensions[]) => number;
