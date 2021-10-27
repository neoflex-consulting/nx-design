import { __assign, __read, __rest } from "tslib";
import './Tooltip.css';
import React, { useState } from 'react';
import { cn } from '../../utils/bem';
import { Popover } from '../Popover/Popover';
import { Text } from '../Text/Text';
import { generateThemeClassNames, ThemeContext, useTheme } from '../Theme/Theme';
var ARROW_SIZE = 6;
var ARROW_OFFSET = 8;
var cnTooltip = cn('Tooltip');
export var tooltipPropSizes = ['m', 's', 'l'];
export var tooltipPropSizesDefault = tooltipPropSizes[0];
export var tooltipPropStatus = ['normal', 'alert', 'success', 'warning'];
function renderChildren(children) {
    return typeof children === 'string' || typeof children === 'number' ? (React.createElement(Text, { size: "xs" }, children)) : (children);
}
export var Tooltip = React.forwardRef(function (props, ref) {
    var _a;
    var children = props.children, _b = props.size, size = _b === void 0 ? tooltipPropSizesDefault : _b, className = props.className, status = props.status, onSetDirectionProp = props.onSetDirection, style = props.style, rest = __rest(props, ["children", "size", "className", "status", "onSetDirection", "style"]);
    var theme = useTheme().theme;
    var _c = __read(useState(undefined), 2), direction = _c[0], setDirection = _c[1];
    var tooltipTheme = status
        ? __assign(__assign({}, theme), { color: {
                primary: theme.color.accent,
                accent: theme.color.accent,
                invert: theme.color.primary
            } }) : __assign(__assign({}, theme), { color: {
            primary: theme.color.invert,
            accent: theme.color.accent,
            invert: theme.color.primary
        } });
    var tooltipThemeClassNames = generateThemeClassNames(tooltipTheme);
    var onSetDirection = function (direction) {
        onSetDirectionProp && onSetDirectionProp(direction);
        setDirection(direction);
    };
    return (React.createElement(ThemeContext.Provider, { value: { theme: tooltipTheme, themeClassNames: tooltipThemeClassNames } },
        React.createElement(Popover, __assign({}, rest, { arrowOffset: ARROW_OFFSET + ARROW_SIZE, offset: ARROW_SIZE + 4, onSetDirection: onSetDirection, ref: ref, className: cnTooltip({ status: status }, [className]), style: __assign((_a = {}, _a['--tooltip-arrow-size'] = ARROW_SIZE + "px", _a['--tooltip-arrow-offset'] = ARROW_OFFSET + "px", _a), style) }),
            React.createElement("div", { className: cnTooltip('Background') }),
            React.createElement("div", { className: cnTooltip('Arrow', { direction: direction }) }),
            React.createElement("div", { className: cnTooltip('Content', { size: size }) }, renderChildren(children)))));
});
