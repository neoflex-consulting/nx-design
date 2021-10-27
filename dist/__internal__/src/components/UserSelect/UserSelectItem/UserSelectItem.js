import { __assign, __rest } from "tslib";
import './UserSelectItem.css';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconCheck } from '../../../icons/IconCheck/IconCheck';
import { cn } from '../../../utils/bem';
import { cnForCssTransition } from '../../../utils/cnForCssTransition';
import { Avatar } from '../../Avatar/Avatar';
export var cnUserSelectItem = cn('UserSelectItem');
var cnUserSelectItemCheckIconCssTransition = cnForCssTransition(cnUserSelectItem, 'CheckIcon');
export var UserSelectItem = function (props) {
    var className = props.className, label = props.label, subLabel = props.subLabel, avatarUrl = props.avatarUrl, active = props.active, hovered = props.hovered, size = props.size, indent = props.indent, disable = props.disable, multiple = props.multiple, otherProps = __rest(props, ["className", "label", "subLabel", "avatarUrl", "active", "hovered", "size", "indent", "disable", "multiple"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnUserSelectItem({ active: active, hovered: hovered, size: size, indent: indent, disable: disable }, [className]), "aria-selected": active, role: "option" }),
        React.createElement("div", { className: cnUserSelectItem('AvatarContainer') },
            React.createElement(Avatar, { className: cnUserSelectItem('Avatar'), url: avatarUrl, name: label }),
            multiple && (React.createElement(CSSTransition, { "in": active, unmountOnExit: true, classNames: cnUserSelectItemCheckIconCssTransition, timeout: 200 },
                React.createElement(IconCheck, { className: cnUserSelectItem('CheckIcon') }))),
            !multiple && active && React.createElement(IconCheck, { className: cnUserSelectItem('CheckIcon') })),
        !subLabel ? (React.createElement("div", { className: cnUserSelectItem('Info') }, label)) : (React.createElement("div", { className: cnUserSelectItem('Info') },
            React.createElement("div", null, label),
            React.createElement("div", { className: cnUserSelectItem('SubLabel', { disable: disable }) }, subLabel)))));
};
