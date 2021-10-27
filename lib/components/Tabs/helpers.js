"use strict";
exports.__esModule = true;
exports.getTabsWidth = exports.getTabsDirection = void 0;
exports.getTabsDirection = function (linePosition) {
    return linePosition === 'left' || linePosition === 'right' ? 'vertical' : 'horizontal';
};
exports.getTabsWidth = function (tabsDimensions) {
    return tabsDimensions.reduce(function (acc, td) { return acc + td.size + td.gap; }, 0);
};
