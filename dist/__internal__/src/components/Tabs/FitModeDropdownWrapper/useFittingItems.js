import { __read, __values } from "tslib";
import React from 'react';
import { useComponentSize } from '../../../hooks/useComponentSize/useComponentSize';
import { getTabsWidth } from '../helpers';
export var useFittingItems = function (_a) {
    var tabsDimensions = _a.tabsDimensions, containerRef = _a.containerRef, moreItemsRef = _a.moreItemsRef;
    var containerWidth = useComponentSize(containerRef).width;
    var moreItemsWidth = useComponentSize(moreItemsRef).width;
    var fittingItemsCount = React.useMemo(function () {
        return getFittingItemsCount({
            tabsDimensions: tabsDimensions,
            totalWidth: containerWidth,
            moreItemsWidth: moreItemsWidth
        });
    }, [tabsDimensions, containerWidth, moreItemsWidth]);
    return {
        fittingItemsCount: fittingItemsCount,
        isItemHidden: React.useCallback(function (idx) { return idx >= fittingItemsCount; }, [fittingItemsCount])
    };
};
export var getFittingItemsCount = function (_a) {
    var e_1, _b;
    var tabsDimensions = _a.tabsDimensions, totalWidth = _a.totalWidth, moreItemsWidth = _a.moreItemsWidth;
    if (!totalWidth) {
        return tabsDimensions.length;
    }
    try {
        for (var _c = __values(tabsDimensions.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), idx = _e[0], tabDimensions = _e[1];
            var isLastItem = idx === tabsDimensions.length - 1;
            var previousTabsDimensions = tabsDimensions.slice(0, idx);
            var width = tabDimensions.size +
                getTabsWidth(previousTabsDimensions) +
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
