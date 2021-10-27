import { __assign, __read, __rest, __spread } from "tslib";
import './TagBase.css';
import React from 'react';
import { IconClose } from '../../icons/IconClose/IconClose';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
export var tagBasePropSize = ['m', 'xs', 's', 'l'];
export var tagBasePropSizeDefault = tagBasePropSize[0];
export var tagBasePropGroupNumberValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export var tagBasePropGroupStringValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
export var tagBasePropGroup = __spread(tagBasePropGroupNumberValue, tagBasePropGroupStringValue);
export var tagBasePropView = ['stroked', 'filled'];
export var tagBasePropViewDefault = tagBasePropView[0];
export var cnTagBase = cn('TagBase');
var sizeMap = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 's'
};
export var TagBase = forwardRefWithAs(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? tagBasePropSizeDefault : _a, _b = props.as, as = _b === void 0 ? 'div' : _b, label = props.label, className = props.className, group = props.group, _c = props.view, view = _c === void 0 ? tagBasePropViewDefault : _c, onCancel = props.onCancel, Icon = props.icon, iconSize = props.iconSize, withAction = props.withAction, otherProps = __rest(props, ["size", "as", "label", "className", "group", "view", "onCancel", "icon", "iconSize", "withAction"]);
    var Tag = as;
    var withCancel = typeof onCancel === 'function';
    var withIcon = !!Icon;
    var IconCloseSize = getSizeByMap(sizeMap, size);
    var IconSize = getSizeByMap(sizeMap, size, iconSize);
    return (React.createElement(Tag, __assign({}, otherProps, { className: cnTagBase({
            size: size,
            view: view,
            withCancel: withCancel,
            withIcon: withIcon,
            group: group,
            withAction: withAction
        }, [className]), ref: ref }), withCancel || Icon ? (React.createElement(React.Fragment, null,
        Icon && (React.createElement("span", { className: cnTagBase('IconWrapper') },
            React.createElement(Icon, { size: IconSize, className: cnTagBase('Icon') }))),
        React.createElement("span", { className: cnTagBase('Label') }, label),
        withCancel && (React.createElement("button", { className: cnTagBase('CancelButton'), type: "button", onClick: onCancel },
            React.createElement(IconClose, { className: cnTagBase('CancelIcon'), size: IconCloseSize }))))) : (label)));
});
