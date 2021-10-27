"use strict";
exports.__esModule = true;
exports.SkeletonCircle = void 0;
var tslib_1 = require("tslib");
require("./SkeletonCircle.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Skeleton_1 = require("../Skeleton");
exports.SkeletonCircle = function (_a) {
    var className = _a.className, size = _a.size;
    return (react_1["default"].createElement("div", { className: cnSkeletonCircle('', [Skeleton_1.cnSkeleton(), className]), style: { width: size, height: size } }));
};
var cnSkeletonCircle = bem_1.cn(exports.SkeletonCircle.name);
