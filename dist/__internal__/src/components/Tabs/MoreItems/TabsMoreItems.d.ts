import './TabsMoreItems.css';
import React from 'react';
import { TabsPropGetLabel } from '../Tabs';
declare type TabsMoreItems = <ITEM>(props: {
    items: ITEM[];
    renderItem: (item: ITEM, onClick: () => void) => React.ReactNode;
    getLabel: TabsPropGetLabel<ITEM>;
    getChecked: (item: ITEM) => boolean;
    height: number;
} & React.RefAttributes<HTMLDivElement>, ref: React.Ref<HTMLDivElement>) => React.ReactElement | null;
export declare const TabsMoreItems: TabsMoreItems;
export {};
