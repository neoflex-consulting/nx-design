import { __assign, __read, __rest, __spread } from "tslib";
import './ContextMenuItem.css';
import React from 'react';
import { IconArrowRight } from '../../../icons/IconArrowRight/IconArrowRight';
import { cn } from '../../../utils/bem';
import { Text } from '../../Text/Text';
import { contextMenuDefaultSize } from '../helpers';
export var cnContextMenuItem = cn('ContextMenuItem');
function renderSide(side, position, withArrow) {
    var sides = side ? __spread((Array.isArray(side) ? side : [side])) : [];
    if (withArrow) {
        sides.push(React.createElement(IconArrowRight, { size: "xs", view: "secondary" }));
    }
    var sidesRender = sides.map(function (item, index) { return (React.createElement("div", { className: cnContextMenuItem('Side', {
            position: position
        }), key: index }, item)); });
    return sidesRender;
}
export var ContextMenuItem = React.forwardRef(function (props, ref) {
    var label = props.label, rightSide = props.rightSide, leftSide = props.leftSide, _a = props.size, size = _a === void 0 ? contextMenuDefaultSize : _a, active = props.active, withSubMenu = props.withSubMenu, accent = props.accent, disabled = props.disabled, otherProps = __rest(props, ["label", "rightSide", "leftSide", "size", "active", "withSubMenu", "accent", "disabled"]);
    var view = disabled ? undefined : accent;
    return (React.createElement(Text, __assign({}, otherProps, { className: cnContextMenuItem({ size: size, active: active, disabled: disabled }), ref: ref, size: size, view: view, lineHeight: "xs" }),
        renderSide(leftSide, 'left', false),
        !rightSide && !leftSide && !withSubMenu ? (label) : (React.createElement("div", { className: cnContextMenuItem('Side', { position: 'center' }) }, label)),
        renderSide(rightSide, 'right', withSubMenu)));
});
