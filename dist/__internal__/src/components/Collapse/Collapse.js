import { __assign, __read, __rest, __spread } from "tslib";
import './Collapse.css';
import React from 'react';
import { IconArrowDown } from '../../icons/IconArrowDown/IconArrowDown';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { Text } from '../Text/Text';
import { CollapseIcon, collapseIconPropDirection, } from './CollapseIcon/CollapseIcon';
export var collapsePropSize = ['m', 'l', 's', 'xs', '2xs'];
export var collapsePropSizeDefault = collapsePropSize[0];
export var collapsePropView = ['primary', 'secondary'];
export var collapsePropViewDefault = collapsePropView[0];
export var collapsePropHorizontalSpace = [
    '3xs',
    '6xl',
    '5xl',
    '4xl',
    '3xl',
    '2xl',
    'xl',
    'l',
    'm',
    's',
    'xs',
    '2xs',
];
export var collapsePropIconPosition = ['left', 'right'];
export var collapsePropIconPositionDefault = collapsePropIconPosition[0];
export var collapsePropDirectionIcon = collapseIconPropDirection;
export var collapsePropDirectionIconDefault = collapsePropDirectionIcon[0];
export var collapsePropCloseDirectionIconDefault = collapsePropDirectionIcon[2];
export var cnCollapse = cn('Collapse');
export var sizeIconMap = {
    '2xs': 'xs',
    'xs': 'xs',
    's': 'xs',
    'm': 's',
    'l': 's'
};
function renderSide(side) {
    var sides = side ? __spread((Array.isArray(side) ? side : [side])) : [];
    return sides.map(function (item, index) { return (React.createElement("div", { className: cnCollapse('Side'), key: index }, item)); });
}
export var Collapse = React.forwardRef(function (props, ref) {
    var label = props.label, _a = props.size, size = _a === void 0 ? collapsePropSizeDefault : _a, _b = props.view, view = _b === void 0 ? collapsePropViewDefault : _b, className = props.className, isOpen = props.isOpen, children = props.children, hoverEffect = props.hoverEffect, divider = props.divider, _c = props.icon, icon = _c === void 0 ? IconArrowDown : _c, closeIcon = props.closeIcon, rightSide = props.rightSide, horizontalSpace = props.horizontalSpace, _d = props.iconPosition, iconPosition = _d === void 0 ? collapsePropIconPositionDefault : _d, _e = props.directionIcon, directionIcon = _e === void 0 ? collapsePropDirectionIconDefault : _e, _f = props.closeDirectionIcon, closeDirectionIcon = _f === void 0 ? collapsePropCloseDirectionIconDefault : _f, style = props.style, otherProps = __rest(props, ["label", "size", "view", "className", "isOpen", "children", "hoverEffect", "divider", "icon", "closeIcon", "rightSide", "horizontalSpace", "iconPosition", "directionIcon", "closeDirectionIcon", "style"]);
    return (React.createElement("div", { ref: ref, className: cnCollapse({ size: size, view: view, horizontalSpace: horizontalSpace }, [className]), style: style },
        React.createElement("div", __assign({ className: cnCollapse('Label', {
                hoverEffect: hoverEffect,
                divider: divider,
                iconPosition: iconPosition
            }) }, otherProps),
            React.createElement(CollapseIcon, { className: cnCollapse('Icon', { position: iconPosition }), size: getSizeByMap(sizeIconMap, size), icon: icon, closeIcon: closeIcon, isOpen: isOpen, direction: directionIcon, closeDirection: closeDirectionIcon }),
            React.createElement(Text, { className: cnCollapse('LabelText'), view: view, size: size }, label),
            iconPosition === 'left' && renderSide(rightSide)),
        React.createElement("div", { className: cnCollapse('Body', { isOpen: isOpen }) },
            React.createElement("div", { className: cnCollapse('Content') }, children))));
});
