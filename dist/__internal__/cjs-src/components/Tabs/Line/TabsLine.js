"use strict";
exports.__esModule = true;
exports.TabsRunningLine = exports.TabsBorderLine = void 0;
var tslib_1 = require("tslib");
require("./TabsLine.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var helpers_1 = require("../helpers");
var cnTabsLine = bem_1.cn('TabsLine');
exports.TabsBorderLine = function (_a) {
    var linePosition = _a.linePosition;
    return react_1["default"].createElement(TabsLine, { type: "border", linePosition: linePosition, size: "100%" });
};
exports.TabsRunningLine = function (_a) {
    var _b, _c;
    var linePosition = _a.linePosition, activeTabIdx = _a.activeTabIdx, tabsDimensions = _a.tabsDimensions;
    var previousTabsDimensions = tabsDimensions.slice(0, activeTabIdx);
    var size = (_c = (_b = tabsDimensions[activeTabIdx]) === null || _b === void 0 ? void 0 : _b.size) !== null && _c !== void 0 ? _c : 0;
    var offset = helpers_1.getTabsWidth(previousTabsDimensions);
    return react_1["default"].createElement(TabsLine, { type: "running", linePosition: linePosition, size: size, offset: offset });
};
var TabsLine = function (_a) {
    var _b;
    var type = _a.type, linePosition = _a.linePosition, size = _a.size, _c = _a.offset, offset = _c === void 0 ? '0px' : _c;
    return (react_1["default"].createElement("div", { className: cnTabsLine({ type: type, position: linePosition }), style: (_b = {},
            _b['--line-length'] = formatCSSValue(size),
            _b['--line-offset'] = formatCSSValue(offset),
            _b) }));
};
var formatCSSValue = function (n) { return (typeof n === 'number' ? n + "px" : n); };
