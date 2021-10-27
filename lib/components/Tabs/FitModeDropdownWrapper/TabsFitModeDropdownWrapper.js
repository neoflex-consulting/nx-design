"use strict";
exports.__esModule = true;
exports.TabsFitModeDropdownWrapper = void 0;
var tslib_1 = require("tslib");
require("./TabsFitModeDropdownWrapper.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var helpers_1 = require("../helpers");
var TabsMoreItems_1 = require("../MoreItems/TabsMoreItems");
var useFittingItems_1 = require("./useFittingItems");
var cnTabsFitModeDropdownWrapper = bem_1.cn('TabsFitModeDropdownWrapper');
exports.TabsFitModeDropdownWrapper = function (_a) {
    var items = _a.items, tabsDimensions = _a.tabsDimensions, tabRefs = _a.tabRefs, getLabel = _a.getLabel, getChecked = _a.getChecked, renderItem = _a.renderItem, renderItemsList = _a.renderItemsList;
    var ref = react_1["default"].useRef(null);
    var moreItemsRef = react_1["default"].useRef(null);
    var isItemHidden = useFittingItems_1.useFittingItems({
        tabsDimensions: tabsDimensions,
        containerRef: ref,
        moreItemsRef: moreItemsRef
    }).isItemHidden;
    var hiddenItems = items.filter(function (_item, idx) { return isItemHidden(idx); });
    var maxTabHeight = react_1["default"].useMemo(function () {
        return Math.max.apply(Math, tslib_1.__spread(tabRefs.map(function (tabRef) { var _a, _b; return (_b = (_a = tabRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) !== null && _b !== void 0 ? _b : 0; })));
    }, [tabsDimensions]);
    var checkedItemIsHidden = hiddenItems.some(getChecked);
    var visibleTabsWidth = helpers_1.getTabsWidth(tabsDimensions.filter(function (_td, idx) { return !isItemHidden(idx); }));
    return (react_1["default"].createElement("div", { ref: ref, className: cnTabsFitModeDropdownWrapper(), style: { height: maxTabHeight } },
        react_1["default"].createElement("div", { className: cnTabsFitModeDropdownWrapper('Tabs') }, renderItemsList({
            withRunningLine: !checkedItemIsHidden,
            getTabClassName: function (idx) {
                return cnTabsFitModeDropdownWrapper('Tab', { hidden: isItemHidden(idx) });
            }
        })),
        hiddenItems.length > 0 && (react_1["default"].createElement("div", { ref: moreItemsRef, className: cnTabsFitModeDropdownWrapper('MoreItems'), style: {
                /* В Safari скрытые табы с абсолютом продолжают растягивать контейнер,
                поэтому приходится позиционировать кнопку абсолютом */
                left: visibleTabsWidth
            } },
            react_1["default"].createElement(TabsMoreItems_1.TabsMoreItems, { items: hiddenItems, renderItem: renderItem, getLabel: getLabel, getChecked: getChecked, height: maxTabHeight })))));
};
