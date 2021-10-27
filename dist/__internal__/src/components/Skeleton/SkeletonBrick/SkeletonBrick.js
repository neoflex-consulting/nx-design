import React from 'react';
import { cnSkeleton } from '../Skeleton';
export var SkeletonBrick = function (_a) {
    var className = _a.className, _b = _a.width, width = _b === void 0 ? '100%' : _b, height = _a.height;
    return React.createElement("div", { className: cnSkeleton('', [className]), style: { width: width, height: height } });
};
