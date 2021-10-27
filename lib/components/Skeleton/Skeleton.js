"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.cnSkeleton = void 0;
require("./Skeleton.css");
var bem_1 = require("../../utils/bem");
var SkeletonBrick_1 = require("./SkeletonBrick/SkeletonBrick");
__createBinding(exports, SkeletonBrick_1, "SkeletonBrick");
var SkeletonCircle_1 = require("./SkeletonCircle/SkeletonCircle");
__createBinding(exports, SkeletonCircle_1, "SkeletonCircle");
var SkeletonText_1 = require("./SkeletonText/SkeletonText");
__createBinding(exports, SkeletonText_1, "SkeletonText");
exports.cnSkeleton = bem_1.cn('Skeleton');
