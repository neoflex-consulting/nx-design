import { __assign, __rest } from "tslib";
import './UserSelectItem.css';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconCheck } from '../../../icons/IconCheck/IconCheck';
import { cn } from '../../../utils/bem';
import { cnForCssTransition } from '../../../utils/cnForCssTransition';
import { Avatar } from '../../Avatar/Avatar';
var sizes = ['xs', 's', 'm', 'l'];
export var cnUserItem = cn('UserSelectItemDeprecated');
export var cnUserItemCssTransition = cnForCssTransition(cnUserItem);
export var UserSelectItem = function (props) {
    var className = props.className, label = props.label, subLabel = props.subLabel, url = props.url, active = props.active, hovered = props.hovered, size = props.size, indent = props.indent, otherProps = __rest(props, ["className", "label", "subLabel", "url", "active", "hovered", "size", "indent"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnUserItem({ active: active, hovered: hovered, size: size, indent: indent }, [className]), "aria-selected": active, role: "option" }),
        React.createElement("div", { className: cnUserItem('AvatarBlock') },
            React.createElement(Avatar, { url: url, name: label }),
            React.createElement(CSSTransition, { "in": active, unmountOnExit: true, appear: true, classNames: cnUserItemCssTransition, timeout: 200 },
                React.createElement(IconCheck, { className: cnUserItem('CheckIcon') }))),
        !subLabel ? (React.createElement("div", { className: cnUserItem('AdditionalInfo') }, label)) : (React.createElement("div", { className: cnUserItem('AdditionalInfo') },
            React.createElement("div", null, label),
            React.createElement("div", { className: cnUserItem('SubUserLabel') }, subLabel)))));
};
