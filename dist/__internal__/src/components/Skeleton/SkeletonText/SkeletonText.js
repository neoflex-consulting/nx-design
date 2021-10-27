import './SkeletonText.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { textPropLineHeightDefault, textPropSizeDefault, } from '../../Text/Text';
import { SkeletonBrick } from '../Skeleton';
export var SkeletonText = function (_a) {
    var className = _a.className, rows = _a.rows, _b = _a.fontSize, fontSize = _b === void 0 ? textPropSizeDefault : _b, _c = _a.lineHeight, lineHeight = _c === void 0 ? textPropLineHeightDefault : _c;
    var varFontSize = "var(--size-text-" + fontSize + ")";
    var varLineHeight = "var(--line-height-text-" + lineHeight + ")";
    return (React.createElement("div", { className: cnSkeletonText(null, [className]), key: 
        /* форсируем полный ререндер компонента при смене количества строк,
          чтобы анимация у всех строк запустилась заново */
        rows }, new Array(rows).fill(null).map(function (_v, idx) { return (React.createElement("div", { key: idx, className: cnSkeletonText('Row'), style: { fontSize: varFontSize, height: varLineHeight } },
        React.createElement(SkeletonBrick, { width: getRowWidth(idx, rows), height: varFontSize }))); })));
};
var cnSkeletonText = cn('SkeletonText');
export var getRowWidth = function (idx, total) {
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
