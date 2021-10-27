"use strict";
exports.__esModule = true;
exports.SelectItem = exports.cnSelectItem = void 0;
var tslib_1 = require("tslib");
require("./SelectItem.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var getSizeByMap_1 = require("../../../utils/getSizeByMap");
var Checkbox_1 = require("../../Checkbox/Checkbox");
exports.cnSelectItem = bem_1.cn('SelectItem');
var sizeCheckboxMap = {
    xs: 'm',
    s: 'm',
    m: 'l',
    l: 'l'
};
exports.SelectItem = function (props) {
    var className = props.className, label = props.label, active = props.active, hovered = props.hovered, multiple = props.multiple, size = props.size, indent = props.indent, disabled = props.disabled, otherProps = tslib_1.__rest(props, ["className", "label", "active", "hovered", "multiple", "size", "indent", "disabled"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnSelectItem({ active: active, hovered: hovered, multiple: multiple, size: size, indent: indent, disabled: disabled }, [className]), "aria-selected": active, "aria-disabled": disabled, role: "option" }),
        multiple && (react_1["default"].createElement(Checkbox_1.Checkbox, { className: exports.cnSelectItem('Checkbox'), checked: active, size: getSizeByMap_1.getSizeByMap(sizeCheckboxMap, size) })),
        label));
};
