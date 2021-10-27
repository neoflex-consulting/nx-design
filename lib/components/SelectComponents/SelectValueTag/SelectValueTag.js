"use strict";
exports.__esModule = true;
exports.SelectValueTag = exports.cnSelectValueTag = void 0;
var tslib_1 = require("tslib");
require("./SelectValueTag.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Tag_1 = require("../../Tag/Tag");
exports.cnSelectValueTag = bem_1.cn('SelectValueTag');
exports.SelectValueTag = function (props) {
    var handleRemove = props.handleRemove, size = props.size, label = props.label;
    return handleRemove ? (react_1["default"].createElement(Tag_1.Tag, { className: exports.cnSelectValueTag({ size: size }), label: label, mode: "cancel", onCancel: handleRemove, size: size })) : (react_1["default"].createElement(Tag_1.Tag, { className: exports.cnSelectValueTag({ size: size, disabled: true }), label: label, size: size, mode: "info" }));
};
