"use strict";
exports.__esModule = true;
exports.SkeletonBrick = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Skeleton_1 = require("../Skeleton");
exports.SkeletonBrick = function (_a) {
    var className = _a.className, _b = _a.width, width = _b === void 0 ? '100%' : _b, height = _a.height;
    return react_1["default"].createElement("div", { className: Skeleton_1.cnSkeleton('', [className]), style: { width: width, height: height } });
};
