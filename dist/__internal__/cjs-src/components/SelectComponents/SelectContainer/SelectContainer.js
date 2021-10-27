"use strict";
exports.__esModule = true;
exports.SelectContainer = void 0;
var tslib_1 = require("tslib");
require("./SelectContainer.css");
var react_1 = tslib_1.__importStar(require("react"));
var cnSelect_1 = require("../cnSelect");
var types_1 = require("../types");
exports.SelectContainer = react_1.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? types_1.defaultPropSize : _a, _b = props.form, form = _b === void 0 ? types_1.defaultPropForm : _b, _c = props.view, view = _c === void 0 ? types_1.defaultPropView : _c, className = props.className, disabled = props.disabled, children = props.children, focused = props.focused, multiple = props.multiple, otherProps = tslib_1.__rest(props, ["size", "form", "view", "className", "disabled", "children", "focused", "multiple"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: cnSelect_1.cnSelect({ size: size, form: form, disabled: disabled, view: view, focused: focused, multiple: multiple }, [className]), ref: ref }), children));
});
