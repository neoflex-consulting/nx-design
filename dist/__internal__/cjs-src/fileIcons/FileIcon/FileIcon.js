"use strict";
exports.__esModule = true;
exports.FileIcon = exports.cnIconFile = exports.fileIconPropSizeDefault = exports.fileIconPropSize = void 0;
var tslib_1 = require("tslib");
require("./FileIcon.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
exports.fileIconPropSize = ['m', 's'];
exports.fileIconPropSizeDefault = exports.fileIconPropSize[0];
exports.cnIconFile = bem_1.cn('FileIcon');
exports.FileIcon = react_1["default"].forwardRef(function (props, ref) {
    var children = props.children, className = props.className, _a = props.size, size = _a === void 0 ? exports.fileIconPropSizeDefault : _a, otherProps = tslib_1.__rest(props, ["children", "className", "size"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnIconFile({ size: size }, [className]), ref: ref }), children));
});
