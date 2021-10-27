import { __read } from "tslib";
import './TabsFitModeScrollWrapper.css';
import React from 'react';
import { useResizeObserved } from '../../../hooks/useResizeObserved/useResizeObserved';
import { useScrollPosition } from '../../../hooks/useScrollPosition/useScrollPosition';
import { IconArrowLeft } from '../../../icons/IconArrowLeft/IconArrowLeft';
import { IconArrowRight } from '../../../icons/IconArrowRight/IconArrowRight';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { getTabsWidth } from '../helpers';
import { getVisibleTabsRange } from './helpers';
var cnTabsFitModeScrollWrapper = cn('TabsFitModeScrollWrapper');
export var TabsFitModeScrollWrapper = function (_a) {
    var tabsDimensions = _a.tabsDimensions, items = _a.items, renderItemsList = _a.renderItemsList, getChecked = _a.getChecked;
    var scrollContainerRef = React.useRef(null);
    var _b = __read(useResizeObserved(React.useMemo(function () { return [scrollContainerRef]; }, [scrollContainerRef]), function (el) {
        var _a;
        return ({
            isScrollable: el && el.scrollWidth > el.offsetWidth,
            width: (_a = el === null || el === void 0 ? void 0 : el.offsetWidth) !== null && _a !== void 0 ? _a : 0,
            paddingLeft: el ? parseInt(getComputedStyle(el).paddingLeft, 10) : 0
        });
    }), 1), _c = _b[0], isScrollable = _c.isScrollable, containerWidth = _c.width, containerPaddingLeft = _c.paddingLeft;
    var scrollLeft = useScrollPosition(scrollContainerRef.current).scrollLeft;
    var _d = __read(getVisibleTabsRange({
        tabsDimensions: tabsDimensions,
        containerWidth: containerWidth,
        containerPaddingLeft: containerPaddingLeft,
        scrollLeft: scrollLeft
    }), 2), firstVisibleTabIdx = _d[0], lastVisibleTabIdx = _d[1];
    var scrollTabIntoView = function (idx) {
        var _a;
        var tabIsVisible = idx >= firstVisibleTabIdx && idx <= lastVisibleTabIdx;
        if (!tabIsVisible) {
            var previousTabsWidth = getTabsWidth(tabsDimensions.slice(0, idx));
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
    React.useEffect(function () {
        if (isScrollable) {
            scrollTabIntoView(checkedTabIdx);
        }
    }, [checkedTabIdx, isScrollable]);
    return (React.createElement("div", { className: cnTabsFitModeScrollWrapper() },
        isScrollable && (React.createElement(React.Fragment, null, ['prev', 'next'].map(function (buttonTo) { return (React.createElement(Button, { key: buttonTo, view: "clear", size: "xs", onlyIcon: true, disabled: buttonTo === 'prev'
                ? firstVisibleTabIdx === 0
                : lastVisibleTabIdx === items.length - 1, iconLeft: buttonTo === 'prev' ? IconArrowLeft : IconArrowRight, className: cnTabsFitModeScrollWrapper('Button', { to: buttonTo }), onClick: buttonTo === 'prev' ? scrollPrev : scrollNext })); }))),
        React.createElement("div", { className: cnTabsFitModeScrollWrapper('Content'), ref: scrollContainerRef }, renderItemsList({
            getTabClassName: function (idx) {
                return cnTabsFitModeScrollWrapper('Tab', { noMargin: idx === items.length - 1 });
            }
        }))));
};
