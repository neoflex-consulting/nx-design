"use strict";
exports.__esModule = true;
exports.ContextMenuGroupHeader = exports.cnContextMenuGroupHeader = void 0;
var tslib_1 = require("tslib");
require("./ContextMenuGroupHeader.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var getSizeByMap_1 = require("../../../utils/getSizeByMap");
var Text_1 = require("../../Text/Text");
var helpers_1 = require("../helpers");
exports.cnContextMenuGroupHeader = bem_1.cn('ContextMenuGroupHeader');
var sizeMap = {
    s: '2xs',
    m: 'xs',
    l: 's'
};
exports.ContextMenuGroupHeader = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? helpers_1.contextMenuDefaultSize : _b, first = _a.first;
    return (react_1["default"].createElement(Text_1.Text, { view: "secondary", transform: "uppercase", className: exports.cnContextMenuGroupHeader({ size: size, first: first }), size: getSizeByMap_1.getSizeByMap(sizeMap, size) }, label));
};
