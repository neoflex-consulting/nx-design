import './SkeletonCircle.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { cnSkeleton } from '../Skeleton';
export var SkeletonCircle = function (_a) {
    var className = _a.className, size = _a.size;
    return (React.createElement("div", { className: cnSkeletonCircle('', [cnSkeleton(), className]), style: { width: size, height: size } }));
};
var cnSkeletonCircle = cn(SkeletonCircle.name);
