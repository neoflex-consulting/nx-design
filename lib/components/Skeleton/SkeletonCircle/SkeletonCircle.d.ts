import './SkeletonCircle.css';
import React, { CSSProperties } from 'react';
declare type SkeletonCircleProps = {
    className?: string;
    size: CSSProperties['width'] & CSSProperties['height'];
};
export declare const SkeletonCircle: React.FC<SkeletonCircleProps>;
export {};
