"use strict";
exports.__esModule = true;
exports.getVisibleTabsRange = void 0;
var helpers_1 = require("../helpers");
exports.getVisibleTabsRange = function (_a) {
    var tabsDimensions = _a.tabsDimensions, containerWidth = _a.containerWidth, containerPaddingLeft = _a.containerPaddingLeft, scrollLeft = _a.scrollLeft;
    var firstVisibleTabIdx = null;
    var lastVisibleTabIdx = null;
    var containerLeftSide = scrollLeft;
    var containerRightSide = containerLeftSide + containerWidth;
    for (var idx = 0; idx < tabsDimensions.length; idx++) {
        var previousTabsWidth = helpers_1.getTabsWidth(tabsDimensions.slice(0, idx));
        var tabElLeftSide = containerPaddingLeft + previousTabsWidth;
        var isTabLeftSideVisible = tabElLeftSide >= containerLeftSide;
        if (isTabLeftSideVisible && firstVisibleTabIdx === null) {
            firstVisibleTabIdx = idx;
        }
        var tabElRightSide = tabElLeftSide + tabsDimensions[idx].size;
        var isTabRightSideVisible = tabElRightSide <= containerRightSide;
        if (isTabRightSideVisible) {
            lastVisibleTabIdx = idx;
        }
    }
    firstVisibleTabIdx = firstVisibleTabIdx !== null && firstVisibleTabIdx !== void 0 ? firstVisibleTabIdx : 0;
    lastVisibleTabIdx = Math.max(firstVisibleTabIdx, lastVisibleTabIdx !== null && lastVisibleTabIdx !== void 0 ? lastVisibleTabIdx : 0);
    return [firstVisibleTabIdx, lastVisibleTabIdx];
};
