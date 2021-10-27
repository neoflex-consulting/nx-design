import { TabDimensions } from '../helpers';
export declare const getVisibleTabsRange: ({ tabsDimensions, containerWidth, containerPaddingLeft, scrollLeft, }: {
    tabsDimensions: TabDimensions[];
    containerWidth: number;
    containerPaddingLeft: number;
    scrollLeft: number;
}) => [number, number];
