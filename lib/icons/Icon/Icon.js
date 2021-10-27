"use strict";
exports.__esModule = true;
exports.Icon = exports.cnIcon = void 0;
var tslib_1 = require("tslib");
require("./Icon.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
exports.cnIcon = bem_1.cn('Icon');
exports.Icon = react_1["default"].forwardRef(function (props, ref) {
    var children = props.children, className = props.className, _a = props.size, size = _a === void 0 ? 'm' : _a, view = props.view, otherProps = tslib_1.__rest(props, ["children", "className", "size", "view"]);
    return (react_1["default"].createElement("span", tslib_1.__assign({}, otherProps, { className: exports.cnIcon({ size: size, view: view }, [className]), ref: ref }), children));
});
