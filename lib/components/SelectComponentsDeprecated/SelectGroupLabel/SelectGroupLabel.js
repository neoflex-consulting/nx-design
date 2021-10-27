"use strict";
exports.__esModule = true;
exports.SelectGroupLabel = void 0;
var tslib_1 = require("tslib");
require("./SelectGroupLabel.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var cnSelectGroupLabel = bem_1.cn('SelectGroupLabelDeprecated');
exports.SelectGroupLabel = function (props) {
    var className = props.className, label = props.label, size = props.size, indent = props.indent, otherProps = tslib_1.__rest(props, ["className", "label", "size", "indent"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: cnSelectGroupLabel({ size: size, indent: indent }, [className]) }), label));
};
