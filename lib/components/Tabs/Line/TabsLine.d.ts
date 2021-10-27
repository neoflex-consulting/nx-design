import './TabsLine.css';
import React from 'react';
import { TabDimensions } from '../helpers';
import { TabsPropLinePosition } from '../Tabs';
export declare const TabsBorderLine: React.FC<{
    linePosition: TabsPropLinePosition;
}>;
export declare const TabsRunningLine: React.FC<{
    linePosition: TabsPropLinePosition;
    activeTabIdx: number;
    tabsDimensions: TabDimensions[];
}>;
