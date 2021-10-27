import { __read, __spread } from "tslib";
import './TabsFitModeDropdownWrapper.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { getTabsWidth } from '../helpers';
import { TabsMoreItems } from '../MoreItems/TabsMoreItems';
import { useFittingItems } from './useFittingItems';
var cnTabsFitModeDropdownWrapper = cn('TabsFitModeDropdownWrapper');
export var TabsFitModeDropdownWrapper = function (_a) {
    var items = _a.items, tabsDimensions = _a.tabsDimensions, tabRefs = _a.tabRefs, getLabel = _a.getLabel, getChecked = _a.getChecked, renderItem = _a.renderItem, renderItemsList = _a.renderItemsList;
    var ref = React.useRef(null);
    var moreItemsRef = React.useRef(null);
    var isItemHidden = useFittingItems({
        tabsDimensions: tabsDimensions,
        containerRef: ref,
        moreItemsRef: moreItemsRef
    }).isItemHidden;
    var hiddenItems = items.filter(function (_item, idx) { return isItemHidden(idx); });
    var maxTabHeight = React.useMemo(function () {
        return Math.max.apply(Math, __spread(tabRefs.map(function (tabRef) { var _a, _b; return (_b = (_a = tabRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) !== null && _b !== void 0 ? _b : 0; })));
    }, [tabsDimensions]);
    var checkedItemIsHidden = hiddenItems.some(getChecked);
    var visibleTabsWidth = getTabsWidth(tabsDimensions.filter(function (_td, idx) { return !isItemHidden(idx); }));
    return (React.createElement("div", { ref: ref, className: cnTabsFitModeDropdownWrapper(), style: { height: maxTabHeight } },
        React.createElement("div", { className: cnTabsFitModeDropdownWrapper('Tabs') }, renderItemsList({
            withRunningLine: !checkedItemIsHidden,
            getTabClassName: function (idx) {
                return cnTabsFitModeDropdownWrapper('Tab', { hidden: isItemHidden(idx) });
            }
        })),
        hiddenItems.length > 0 && (React.createElement("div", { ref: moreItemsRef, className: cnTabsFitModeDropdownWrapper('MoreItems'), style: {
                /* В Safari скрытые табы с абсолютом продолжают растягивать контейнер,
                поэтому приходится позиционировать кнопку абсолютом */
                left: visibleTabsWidth
            } },
            React.createElement(TabsMoreItems, { items: hiddenItems, renderItem: renderItem, getLabel: getLabel, getChecked: getChecked, height: maxTabHeight })))));
};
