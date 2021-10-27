"use strict";
exports.__esModule = true;
exports.TabsFitModeScrollWrapper = void 0;
var tslib_1 = require("tslib");
require("./TabsFitModeScrollWrapper.css");
var react_1 = tslib_1.__importDefault(require("react"));
var useResizeObserved_1 = require("../../../hooks/useResizeObserved/useResizeObserved");
var useScrollPosition_1 = require("../../../hooks/useScrollPosition/useScrollPosition");
var IconArrowLeft_1 = require("../../../icons/IconArrowLeft/IconArrowLeft");
var IconArrowRight_1 = require("../../../icons/IconArrowRight/IconArrowRight");
var bem_1 = require("../../../utils/bem");
var Button_1 = require("../../Button/Button");
var helpers_1 = require("../helpers");
var helpers_2 = require("./helpers");
var cnTabsFitModeScrollWrapper = bem_1.cn('TabsFitModeScrollWrapper');
exports.TabsFitModeScrollWrapper = function (_a) {
    var tabsDimensions = _a.tabsDimensions, items = _a.items, renderItemsList = _a.renderItemsList, getChecked = _a.getChecked;
    var scrollContainerRef = react_1["default"].useRef(null);
    var _b = tslib_1.__read(useResizeObserved_1.useResizeObserved(react_1["default"].useMemo(function () { return [scrollContainerRef]; }, [scrollContainerRef]), function (el) {
        var _a;
        return ({
            isScrollable: el && el.scrollWidth > el.offsetWidth,
            width: (_a = el === null || el === void 0 ? void 0 : el.offsetWidth) !== null && _a !== void 0 ? _a : 0,
            paddingLeft: el ? parseInt(getComputedStyle(el).paddingLeft, 10) : 0
        });
    }), 1), _c = _b[0], isScrollable = _c.isScrollable, containerWidth = _c.width, containerPaddingLeft = _c.paddingLeft;
    var scrollLeft = useScrollPosition_1.useScrollPosition(scrollContainerRef.current).scrollLeft;
    var _d = tslib_1.__read(helpers_2.getVisibleTabsRange({
        tabsDimensions: tabsDimensions,
        containerWidth: containerWidth,
        containerPaddingLeft: containerPaddingLeft,
        scrollLeft: scrollLeft
    }), 2), firstVisibleTabIdx = _d[0], lastVisibleTabIdx = _d[1];
    var scrollTabIntoView = function (idx) {
        var _a;
        var tabIsVisible = idx >= firstVisibleTabIdx && idx <= lastVisibleTabIdx;
        if (!tabIsVisible) {
            var previousTabsWidth = helpers_1.getTabsWidth(tabsDimensions.slice(0, idx));
            (_a = scrollContainerRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                left: previousTabsWidth,
                behavior: 'smooth'
            });
        }
    };
    var scrollPrev = function () {
        scrollTabIntoView(firstVisibleTabIdx - 1);
    };
    var scrollNext = function () {
        scrollTabIntoView(lastVisibleTabIdx + 1);
    };
    // Подскролливаем к выбранному табу
    var checkedTabIdx = items.findIndex(getChecked);
    react_1["default"].useEffect(function () {
        if (isScrollable) {
            scrollTabIntoView(checkedTabIdx);
        }
    }, [checkedTabIdx, isScrollable]);
    return (react_1["default"].createElement("div", { className: cnTabsFitModeScrollWrapper() },
        isScrollable && (react_1["default"].createElement(react_1["default"].Fragment, null, ['prev', 'next'].map(function (buttonTo) { return (react_1["default"].createElement(Button_1.Button, { key: buttonTo, view: "clear", size: "xs", onlyIcon: true, disabled: buttonTo === 'prev'
                ? firstVisibleTabIdx === 0
                : lastVisibleTabIdx === items.length - 1, iconLeft: buttonTo === 'prev' ? IconArrowLeft_1.IconArrowLeft : IconArrowRight_1.IconArrowRight, className: cnTabsFitModeScrollWrapper('Button', { to: buttonTo }), onClick: buttonTo === 'prev' ? scrollPrev : scrollNext })); }))),
        react_1["default"].createElement("div", { className: cnTabsFitModeScrollWrapper('Content'), ref: scrollContainerRef }, renderItemsList({
            getTabClassName: function (idx) {
                return cnTabsFitModeScrollWrapper('Tab', { noMargin: idx === items.length - 1 });
            }
        }))));
};
