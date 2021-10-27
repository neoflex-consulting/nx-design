import { __assign, __rest } from "tslib";
import React, { forwardRef } from 'react';
import { IconArrowDown } from '../../icons/IconArrowDown/IconArrowDown';
import { Collapse, collapsePropCloseDirectionIconDefault, collapsePropDirectionIconDefault, collapsePropIconPositionDefault, collapsePropSizeDefault, collapsePropViewDefault, } from '../Collapse/Collapse';
import { withDefaultGetters } from './helpers';
import { useChoice } from './useChoice';
var CollapseGroupRender = function (props, ref) {
    var _a = withDefaultGetters(props), items = _a.items, getItemLabel = _a.getItemLabel, getItemContent = _a.getItemContent, _b = _a.size, size = _b === void 0 ? collapsePropSizeDefault : _b, _c = _a.view, view = _c === void 0 ? collapsePropViewDefault : _c, hoverEffect = _a.hoverEffect, divider = _a.divider, _d = _a.icon, icon = _d === void 0 ? IconArrowDown : _d, closeIcon = _a.closeIcon, getItemRightSide = _a.getItemRightSide, horizontalSpace = _a.horizontalSpace, _e = _a.iconPosition, iconPosition = _e === void 0 ? collapsePropIconPositionDefault : _e, _f = _a.directionIcon, directionIcon = _f === void 0 ? collapsePropDirectionIconDefault : _f, _g = _a.closeDirectionIcon, closeDirectionIcon = _g === void 0 ? collapsePropCloseDirectionIconDefault : _g, otherProps = __rest(_a, ["items", "getItemLabel", "getItemContent", "size", "view", "hoverEffect", "divider", "icon", "closeIcon", "getItemRightSide", "horizontalSpace", "iconPosition", "directionIcon", "closeDirectionIcon"]);
    var _h = useChoice(props), getChecked = _h.getChecked, getOnChange = _h.getOnChange;
    return (React.createElement("div", __assign({ ref: ref }, otherProps), items.map(function (item, index) {
        return (React.createElement(Collapse, __assign({ label: getItemLabel(item), key: index, size: size, view: view, horizontalSpace: horizontalSpace, icon: icon, hoverEffect: hoverEffect, divider: divider, isOpen: getChecked(index), onClick: getOnChange(index) }, (iconPosition === 'left'
            ? {
                iconPosition: iconPosition,
                rightSide: getItemRightSide(item)
            }
            : { iconPosition: iconPosition }), (closeIcon
            ? { closeIcon: closeIcon }
            : {
                directionIcon: directionIcon,
                closeDirectionIcon: closeDirectionIcon
            })), getItemContent(item)));
    })));
};
export var CollapseGroup = forwardRef(CollapseGroupRender);
export * from './helpers';
