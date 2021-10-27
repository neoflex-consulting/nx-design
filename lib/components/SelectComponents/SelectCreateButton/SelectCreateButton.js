"use strict";
exports.__esModule = true;
exports.SelectCreateButton = void 0;
var tslib_1 = require("tslib");
require("./SelectCreateButton.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var cnSelectCreateButton = bem_1.cn('SelectCreateButton');
exports.SelectCreateButton = function (props) {
    var className = props.className, labelForCreate = props.labelForCreate, inputValue = props.inputValue, active = props.active, hovered = props.hovered, size = props.size, indent = props.indent, otherProps = tslib_1.__rest(props, ["className", "labelForCreate", "inputValue", "active", "hovered", "size", "indent"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: cnSelectCreateButton({ active: active, hovered: hovered, size: size, indent: indent }, [className]), "aria-selected": active, role: "option" }),
        labelForCreate,
        " \u00AB",
        react_1["default"].createElement("b", null, inputValue),
        "\u00BB"));
};
