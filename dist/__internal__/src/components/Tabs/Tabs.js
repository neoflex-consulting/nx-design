import { __assign, __read, __rest, __spread } from "tslib";
import './Tabs.css';
import React, { createRef, useMemo } from 'react';
import { useChoiceGroup } from '../../hooks/useChoiceGroup/useChoiceGroup';
import { useResizeObserved } from '../../hooks/useResizeObserved/useResizeObserved';
import { cn } from '../../utils/bem';
import { TabsFitModeDropdownWrapper } from './FitModeDropdownWrapper/TabsFitModeDropdownWrapper';
import { TabsFitModeScrollWrapper } from './FitModeScrollWrapper/TabsFitModeScrollWrapper';
import { TabsBorderLine, TabsRunningLine } from './Line/TabsLine';
import { cnTabsTab, TabsTab } from './Tab/TabsTab';
import { getTabsDirection, } from './helpers';
export var tabsSizes = ['m', 's'];
export var tabsDefaultSize = tabsSizes[0];
export var tabsViews = ['bordered', 'clear'];
export var tabsDefaultView = tabsViews[0];
export var tabsLinePositions = ['bottom', 'top', 'left', 'right'];
export var tabsDefaultLinePosition = 'bottom';
export var tabsFitModes = ['scroll', 'dropdown'];
export var tabsDefaultFitMode = 'dropdown';
export var cnTabs = cn('Tabs');
function renderItemDefault(props) {
    var onChange = props.onChange, otherProps = __rest(props, ["onChange"]);
    return (React.createElement(TabsTab, __assign({}, otherProps, { onChange: onChange })));
}
export var Tabs = React.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? tabsDefaultSize : _a, className = props.className, items = props.items, _b = props.view, view = _b === void 0 ? tabsDefaultView : _b, value = props.value, _c = props.linePosition, linePosition = _c === void 0 ? tabsDefaultLinePosition : _c, _d = props.fitMode, fitMode = _d === void 0 ? tabsDefaultFitMode : _d, onlyIcon = props.onlyIcon, getIcon = props.getIcon, getLabel = props.getLabel, onChange = props.onChange, iconSize = props.iconSize, _e = props.renderItem, renderItemProp = _e === void 0 ? renderItemDefault : _e, otherProps = __rest(props, ["size", "className", "items", "view", "value", "linePosition", "fitMode", "onlyIcon", "getIcon", "getLabel", "onChange", "iconSize", "renderItem"]);
    var _f = useChoiceGroup({
        value: value || null,
        getKey: getLabel,
        callBack: onChange,
        multiple: false
    }), getOnChange = _f.getOnChange, getChecked = _f.getChecked;
    var tabsDirection = getTabsDirection(linePosition);
    var isVertical = tabsDirection === 'vertical';
    var tabRefs = useMemo(function () { return new Array(items.length).fill(null).map(function () { return createRef(); }); }, [items, fitMode, isVertical]);
    var tabsDimensions = useResizeObserved(tabRefs, function (el) {
        var _a;
        return ({
            size: (_a = el === null || el === void 0 ? void 0 : el[isVertical ? 'offsetHeight' : 'offsetWidth']) !== null && _a !== void 0 ? _a : 0,
            gap: el ? parseInt(getComputedStyle(el)[isVertical ? 'marginBottom' : 'marginRight'], 10) : 0
        });
    });
    var activeTabIdx = items.findIndex(getChecked);
    var renderItem = function (item, onClick) {
        return renderItemProp({
            item: item,
            onChange: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                onClick === null || onClick === void 0 ? void 0 : onClick();
                getOnChange(item).apply(void 0, __spread(args));
            },
            checked: getChecked(item),
            label: getLabel(item).toString(),
            icon: getIcon && getIcon(item),
            onlyIcon: onlyIcon,
            size: size,
            iconSize: iconSize
        });
    };
    var renderItemsList = function (_a) {
        var _b = _a.withRunningLine, withRunningLine = _b === void 0 ? true : _b, getTabClassName = _a.getTabClassName;
        return (React.createElement("div", { className: cnTabs('List', { direction: tabsDirection, linePosition: linePosition }) },
            items.map(function (item, idx) { return (React.createElement("div", { ref: tabRefs[idx], key: getLabel(item), className: cnTabs('Tab', { direction: tabsDirection }, [getTabClassName === null || getTabClassName === void 0 ? void 0 : getTabClassName(idx)]) }, renderItem(item))); }),
            withRunningLine && (React.createElement(TabsRunningLine, { linePosition: linePosition, tabsDimensions: tabsDimensions, activeTabIdx: activeTabIdx }))));
    };
    var Wrapper = getTabsWrapper(tabsDirection, fitMode);
    return (React.createElement("div", __assign({ className: cnTabs({ size: size, view: view, direction: tabsDirection }, [className]), ref: ref }, otherProps),
        React.createElement(Wrapper, { tabRefs: tabRefs, tabsDimensions: tabsDimensions, renderItem: renderItem, renderItemsList: renderItemsList, getLabel: getLabel, getChecked: getChecked, items: items }),
        view === 'bordered' && React.createElement(TabsBorderLine, { linePosition: linePosition })));
});
var getTabsWrapper = function (tabsDirection, fitMode) {
    if (tabsDirection === 'vertical') {
        return OnlyListWrapper;
    }
    return fitMode === 'scroll' ? TabsFitModeScrollWrapper : TabsFitModeDropdownWrapper;
};
var OnlyListWrapper = function (_a) {
    var renderItemsList = _a.renderItemsList;
    return React.createElement(React.Fragment, null, renderItemsList({}));
};
export { TabsTab, cnTabsTab };
