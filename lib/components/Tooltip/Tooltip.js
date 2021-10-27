"use strict";
exports.__esModule = true;
exports.Tooltip = exports.tooltipPropStatus = exports.tooltipPropSizesDefault = exports.tooltipPropSizes = void 0;
var tslib_1 = require("tslib");
require("./Tooltip.css");
var react_1 = tslib_1.__importStar(require("react"));
var bem_1 = require("../../utils/bem");
var Popover_1 = require("../Popover/Popover");
var Text_1 = require("../Text/Text");
var Theme_1 = require("../Theme/Theme");
var ARROW_SIZE = 6;
var ARROW_OFFSET = 8;
var cnTooltip = bem_1.cn('Tooltip');
exports.tooltipPropSizes = ['m', 's', 'l'];
exports.tooltipPropSizesDefault = exports.tooltipPropSizes[0];
exports.tooltipPropStatus = ['normal', 'alert', 'success', 'warning'];
function renderChildren(children) {
    return typeof children === 'string' || typeof children === 'number' ? (react_1["default"].createElement(Text_1.Text, { size: "xs" }, children)) : (children);
}
exports.Tooltip = react_1["default"].forwardRef(function (props, ref) {
    var _a;
    var children = props.children, _b = props.size, size = _b === void 0 ? exports.tooltipPropSizesDefault : _b, className = props.className, status = props.status, onSetDirectionProp = props.onSetDirection, style = props.style, rest = tslib_1.__rest(props, ["children", "size", "className", "status", "onSetDirection", "style"]);
    var theme = Theme_1.useTheme().theme;
    var _c = tslib_1.__read(react_1.useState(undefined), 2), direction = _c[0], setDirection = _c[1];
    var tooltipTheme = status
        ? tslib_1.__assign(tslib_1.__assign({}, theme), { color: {
                primary: theme.color.accent,
                accent: theme.color.accent,
                invert: theme.color.primary
            } }) : tslib_1.__assign(tslib_1.__assign({}, theme), { color: {
            primary: theme.color.invert,
            accent: theme.color.accent,
            invert: theme.color.primary
        } });
    var tooltipThemeClassNames = Theme_1.generateThemeClassNames(tooltipTheme);
    var onSetDirection = function (direction) {
        onSetDirectionProp && onSetDirectionProp(direction);
        setDirection(direction);
    };
    return (react_1["default"].createElement(Theme_1.ThemeContext.Provider, { value: { theme: tooltipTheme, themeClassNames: tooltipThemeClassNames } },
        react_1["default"].createElement(Popover_1.Popover, tslib_1.__assign({}, rest, { arrowOffset: ARROW_OFFSET + ARROW_SIZE, offset: ARROW_SIZE + 4, onSetDirection: onSetDirection, ref: ref, className: cnTooltip({ status: status }, [className]), style: tslib_1.__assign((_a = {}, _a['--tooltip-arrow-size'] = ARROW_SIZE + "px", _a['--tooltip-arrow-offset'] = ARROW_OFFSET + "px", _a), style) }),
            react_1["default"].createElement("div", { className: cnTooltip('Background') }),
            react_1["default"].createElement("div", { className: cnTooltip('Arrow', { direction: direction }) }),
            react_1["default"].createElement("div", { className: cnTooltip('Content', { size: size }) }, renderChildren(children)))));
});
