"use strict";
exports.__esModule = true;
exports.ResponsesImage = exports.cnResponsesImage = void 0;
var tslib_1 = require("tslib");
require("./ResponsesImage.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
exports.cnResponsesImage = bem_1.cn('ResponsesImage');
exports.ResponsesImage = react_1["default"].forwardRef(function (props, ref) {
    var children = props.children, className = props.className, otherProps = tslib_1.__rest(props, ["children", "className"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnResponsesImage(null, [className]), ref: ref }), children));
});
