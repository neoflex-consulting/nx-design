import React from 'react';
import { TabDimensions } from '../helpers';
export declare const useFittingItems: ({ tabsDimensions, containerRef, moreItemsRef, }: {
    tabsDimensions: TabDimensions[];
    containerRef: React.RefObject<HTMLElement>;
    moreItemsRef: React.RefObject<HTMLElement>;
}) => {
    fittingItemsCount: number;
    isItemHidden: (idx: number) => boolean;
};
export declare const getFittingItemsCount: ({ tabsDimensions, totalWidth, moreItemsWidth, }: {
    tabsDimensions: TabDimensions[];
    totalWidth: number;
    moreItemsWidth: number;
}) => number;
