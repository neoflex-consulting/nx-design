"use strict";
exports.__esModule = true;
exports.getFittingItemsCount = exports.useFittingItems = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var useComponentSize_1 = require("../../../hooks/useComponentSize/useComponentSize");
var helpers_1 = require("../helpers");
exports.useFittingItems = function (_a) {
    var tabsDimensions = _a.tabsDimensions, containerRef = _a.containerRef, moreItemsRef = _a.moreItemsRef;
    var containerWidth = useComponentSize_1.useComponentSize(containerRef).width;
    var moreItemsWidth = useComponentSize_1.useComponentSize(moreItemsRef).width;
    var fittingItemsCount = react_1["default"].useMemo(function () {
        return exports.getFittingItemsCount({
            tabsDimensions: tabsDimensions,
            totalWidth: containerWidth,
            moreItemsWidth: moreItemsWidth
        });
    }, [tabsDimensions, containerWidth, moreItemsWidth]);
    return {
        fittingItemsCount: fittingItemsCount,
        isItemHidden: react_1["default"].useCallback(function (idx) { return idx >= fittingItemsCount; }, [fittingItemsCount])
    };
};
exports.getFittingItemsCount = function (_a) {
    var e_1, _b;
    var tabsDimensions = _a.tabsDimensions, totalWidth = _a.totalWidth, moreItemsWidth = _a.moreItemsWidth;
    if (!totalWidth) {
        return tabsDimensions.length;
    }
    try {
        for (var _c = tslib_1.__values(tabsDimensions.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = tslib_1.__read(_d.value, 2), idx = _e[0], tabDimensions = _e[1];
            var isLastItem = idx === tabsDimensions.length - 1;
            var previousTabsDimensions = tabsDimensions.slice(0, idx);
            var width = tabDimensions.size +
                helpers_1.getTabsWidth(previousTabsDimensions) +
                (isLastItem ? 0 : tabDimensions.gap + moreItemsWidth);
            if (width > totalWidth) {
                return idx;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c["return"])) _b.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return tabsDimensions.length;
};
