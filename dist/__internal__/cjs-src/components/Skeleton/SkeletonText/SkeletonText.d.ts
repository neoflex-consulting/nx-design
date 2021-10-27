import './SkeletonText.css';
import React from 'react';
import { TextPropLineHeight, TextPropSize } from '../../Text/Text';
import { SkeletonBrick } from '../Skeleton';
declare type SkeletonTextProps = {
    className?: string;
    rows: number;
    fontSize?: TextPropSize;
    lineHeight?: TextPropLineHeight;
};
export declare const SkeletonText: React.FC<SkeletonTextProps>;
export declare const getRowWidth: (idx: number, total: number) => React.ComponentProps<typeof SkeletonBrick>['height'];
export {};
