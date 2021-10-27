"use strict";
exports.__esModule = true;
exports.cnTabsTab = exports.TabsTab = exports.Tabs = exports.cnTabs = exports.tabsDefaultFitMode = exports.tabsFitModes = exports.tabsDefaultLinePosition = exports.tabsLinePositions = exports.tabsDefaultView = exports.tabsViews = exports.tabsDefaultSize = exports.tabsSizes = void 0;
var tslib_1 = require("tslib");
require("./Tabs.css");
var react_1 = tslib_1.__importStar(require("react"));
var useChoiceGroup_1 = require("../../hooks/useChoiceGroup/useChoiceGroup");
var useResizeObserved_1 = require("../../hooks/useResizeObserved/useResizeObserved");
var bem_1 = require("../../utils/bem");
var TabsFitModeDropdownWrapper_1 = require("./FitModeDropdownWrapper/TabsFitModeDropdownWrapper");
var TabsFitModeScrollWrapper_1 = require("./FitModeScrollWrapper/TabsFitModeScrollWrapper");
var TabsLine_1 = require("./Line/TabsLine");
var TabsTab_1 = require("./Tab/TabsTab");
exports.cnTabsTab = TabsTab_1.cnTabsTab;
exports.TabsTab = TabsTab_1.TabsTab;
var helpers_1 = require("./helpers");
exports.tabsSizes = ['m', 's'];
exports.tabsDefaultSize = exports.tabsSizes[0];
exports.tabsViews = ['bordered', 'clear'];
exports.tabsDefaultView = exports.tabsViews[0];
exports.tabsLinePositions = ['bottom', 'top', 'left', 'right'];
exports.tabsDefaultLinePosition = 'bottom';
exports.tabsFitModes = ['scroll', 'dropdown'];
exports.tabsDefaultFitMode = 'dropdown';
exports.cnTabs = bem_1.cn('Tabs');
function renderItemDefault(props) {
    var onChange = props.onChange, otherProps = tslib_1.__rest(props, ["onChange"]);
    return (react_1["default"].createElement(TabsTab_1.TabsTab, tslib_1.__assign({}, otherProps, { onChange: onChange })));
}
exports.Tabs = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? exports.tabsDefaultSize : _a, className = props.className, items = props.items, _b = props.view, view = _b === void 0 ? exports.tabsDefaultView : _b, value = props.value, _c = props.linePosition, linePosition = _c === void 0 ? exports.tabsDefaultLinePosition : _c, _d = props.fitMode, fitMode = _d === void 0 ? exports.tabsDefaultFitMode : _d, onlyIcon = props.onlyIcon, getIcon = props.getIcon, getLabel = props.getLabel, onChange = props.onChange, iconSize = props.iconSize, _e = props.renderItem, renderItemProp = _e === void 0 ? renderItemDefault : _e, otherProps = tslib_1.__rest(props, ["size", "className", "items", "view", "value", "linePosition", "fitMode", "onlyIcon", "getIcon", "getLabel", "onChange", "iconSize", "renderItem"]);
    var _f = useChoiceGroup_1.useChoiceGroup({
        value: value || null,
        getKey: getLabel,
        callBack: onChange,
        multiple: false
    }), getOnChange = _f.getOnChange, getChecked = _f.getChecked;
    var tabsDirection = helpers_1.getTabsDirection(linePosition);
    var isVertical = tabsDirection === 'vertical';
    var tabRefs = react_1.useMemo(function () { return new Array(items.length).fill(null).map(function () { return react_1.createRef(); }); }, [items, fitMode, isVertical]);
    var tabsDimensions = useResizeObserved_1.useResizeObserved(tabRefs, function (el) {
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
                getOnChange(item).apply(void 0, tslib_1.__spread(args));
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
        return (react_1["default"].createElement("div", { className: exports.cnTabs('List', { direction: tabsDirection, linePosition: linePosition }) },
            items.map(function (item, idx) { return (react_1["default"].createElement("div", { ref: tabRefs[idx], key: getLabel(item), className: exports.cnTabs('Tab', { direction: tabsDirection }, [getTabClassName === null || getTabClassName === void 0 ? void 0 : getTabClassName(idx)]) }, renderItem(item))); }),
            withRunningLine && (react_1["default"].createElement(TabsLine_1.TabsRunningLine, { linePosition: linePosition, tabsDimensions: tabsDimensions, activeTabIdx: activeTabIdx }))));
    };
    var Wrapper = getTabsWrapper(tabsDirection, fitMode);
    return (react_1["default"].createElement("div", tslib_1.__assign({ className: exports.cnTabs({ size: size, view: view, direction: tabsDirection }, [className]), ref: ref }, otherProps),
        react_1["default"].createElement(Wrapper, { tabRefs: tabRefs, tabsDimensions: tabsDimensions, renderItem: renderItem, renderItemsList: renderItemsList, getLabel: getLabel, getChecked: getChecked, items: items }),
        view === 'bordered' && react_1["default"].createElement(TabsLine_1.TabsBorderLine, { linePosition: linePosition })));
});
var getTabsWrapper = function (tabsDirection, fitMode) {
    if (tabsDirection === 'vertical') {
        return OnlyListWrapper;
    }
    return fitMode === 'scroll' ? TabsFitModeScrollWrapper_1.TabsFitModeScrollWrapper : TabsFitModeDropdownWrapper_1.TabsFitModeDropdownWrapper;
};
var OnlyListWrapper = function (_a) {
    var renderItemsList = _a.renderItemsList;
    return react_1["default"].createElement(react_1["default"].Fragment, null, renderItemsList({}));
};
