"use strict";
exports.__esModule = true;
exports.getRowWidth = exports.SkeletonText = void 0;
var tslib_1 = require("tslib");
require("./SkeletonText.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Text_1 = require("../../Text/Text");
var Skeleton_1 = require("../Skeleton");
exports.SkeletonText = function (_a) {
    var className = _a.className, rows = _a.rows, _b = _a.fontSize, fontSize = _b === void 0 ? Text_1.textPropSizeDefault : _b, _c = _a.lineHeight, lineHeight = _c === void 0 ? Text_1.textPropLineHeightDefault : _c;
    var varFontSize = "var(--size-text-" + fontSize + ")";
    var varLineHeight = "var(--line-height-text-" + lineHeight + ")";
    return (react_1["default"].createElement("div", { className: cnSkeletonText(null, [className]), key: 
        /* форсируем полный ререндер компонента при смене количества строк,
          чтобы анимация у всех строк запустилась заново */
        rows }, new Array(rows).fill(null).map(function (_v, idx) { return (react_1["default"].createElement("div", { key: idx, className: cnSkeletonText('Row'), style: { fontSize: varFontSize, height: varLineHeight } },
        react_1["default"].createElement(Skeleton_1.SkeletonBrick, { width: exports.getRowWidth(idx, rows), height: varFontSize }))); })));
};
var cnSkeletonText = bem_1.cn('SkeletonText');
exports.getRowWidth = function (idx, total) {
    if (idx === total - 1) {
        return '50%';
    }
    switch (idx % 3) {
        case 0:
            return '100%';
        case 1:
            return '85%';
        case 2:
            return '93%';
    }
    return '100%';
};
