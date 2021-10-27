"use strict";
exports.__esModule = true;
exports.ContextMenuDivider = void 0;
var tslib_1 = require("tslib");
require("./ContextMenuDivider.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var helpers_1 = require("../helpers");
var cnContextMenuDivider = bem_1.cn('ContextMenuDivider');
exports.ContextMenuDivider = function (props) {
    var _a = props.size, size = _a === void 0 ? helpers_1.contextMenuDefaultSize : _a;
    return react_1["default"].createElement("div", { className: cnContextMenuDivider({ size: size }) });
};
