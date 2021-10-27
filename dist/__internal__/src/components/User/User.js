import { __assign, __rest } from "tslib";
import './User.css';
import React from 'react';
import { IconSelect } from '../../icons/IconSelect/IconSelect';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
export var userPropSize = ['m', 's', 'l'];
export var userPropSizeDefault = userPropSize[0];
export var userPropView = ['clear', 'ghost'];
export var userPropViewDefault = userPropView[0];
export var userPropWidth = ['default', 'full'];
export var userPropWidthDefault = userPropWidth[0];
export var userPropStatus = ['available', 'remote', 'out'];
export var cnUser = cn('User');
var infoSizeMap = {
    s: '2xs',
    m: '2xs',
    l: 'xs'
};
var iconSizeMap = {
    s: 'xs',
    m: 'xs',
    l: 's'
};
var avatarSizeMap = {
    s: 'xs',
    m: 's',
    l: 'm'
};
var buttonSizeMap = {
    s: 'xs',
    m: 'xs',
    l: 's'
};
export var User = forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, className = props.className, _b = props.size, size = _b === void 0 ? userPropSizeDefault : _b, avatarUrl = props.avatarUrl, name = props.name, _c = props.view, view = _c === void 0 ? userPropViewDefault : _c, _d = props.width, width = _d === void 0 ? userPropWidthDefault : _d, propOnlyAvatar = props.onlyAvatar, withArrow = props.withArrow, iconRight = props.iconRight, onIconRightClick = props.onIconRightClick, info = props.info, status = props.status, otherProps = __rest(props, ["as", "className", "size", "avatarUrl", "name", "view", "width", "onlyAvatar", "withArrow", "iconRight", "onIconRightClick", "info", "status"]);
    var Tag = as;
    var onlyAvatar = propOnlyAvatar || (!name && !info);
    var IconRight = iconRight;
    return (React.createElement(Tag, __assign({}, otherProps, { className: cnUser({ size: size, view: view, width: width, withArrow: withArrow, minified: onlyAvatar }, [className]), ref: ref }),
        React.createElement("div", { className: cnUser('AvatarWrapper', { status: status }) },
            React.createElement(Avatar, { size: getSizeByMap(avatarSizeMap, size), url: avatarUrl, name: name })),
        !onlyAvatar && (name || info) && (React.createElement("div", { className: cnUser('Block') },
            name && (React.createElement(Text, { className: cnUser('Name'), size: size, view: "primary", lineHeight: "2xs" }, name)),
            info && size !== 's' && (React.createElement(Text, { className: cnUser('Info'), size: getSizeByMap(infoSizeMap, size), view: "secondary", lineHeight: "2xs" }, info)))),
        withArrow && (React.createElement(IconSelect, { className: cnUser('Icon'), size: getSizeByMap(iconSizeMap, size), view: "secondary" })),
        IconRight && !onIconRightClick && (React.createElement(IconRight, { className: cnUser('Icon'), size: getSizeByMap(iconSizeMap, size), view: "secondary" })),
        IconRight && onIconRightClick && (React.createElement(Button, { className: cnUser('IconRightButton'), onClick: onIconRightClick, iconRight: IconRight, onlyIcon: true, view: "clear", size: getSizeByMap(buttonSizeMap, size), form: "round" }))));
});
