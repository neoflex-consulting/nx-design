"use strict";
exports.__esModule = true;
exports.SelectValueTag = void 0;
var tslib_1 = require("tslib");
require("./SelectValueTag.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Tag_1 = require("../../Tag/Tag");
var cnSelectValueTag = bem_1.cn('SelectValueTagDeprecated');
exports.SelectValueTag = function (props) {
    var handleRemove = props.handleRemove, disabled = props.disabled, size = props.size, otherProps = tslib_1.__rest(props, ["handleRemove", "disabled", "size"]);
    return disabled ? (react_1["default"].createElement(Tag_1.Tag, tslib_1.__assign({}, otherProps, { className: cnSelectValueTag({ size: size, disabled: disabled }), size: size, mode: "info" }))) : (react_1["default"].createElement(Tag_1.Tag, tslib_1.__assign({}, otherProps, { className: cnSelectValueTag({ size: size }), mode: "cancel", onCancel: handleRemove, size: size })));
};
