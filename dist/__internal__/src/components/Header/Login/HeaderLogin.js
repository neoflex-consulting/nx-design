import { __assign, __rest } from "tslib";
import React from 'react';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { User } from '../../User/User';
export var cnHeaderLogin = cn('HeaderLogin');
export var HeaderLogin = React.forwardRef(function (props, ref) {
    var isLogged = props.isLogged, onClick = props.onClick, personName = props.personName, personInfo = props.personInfo, personStatus = props.personStatus, personAvatarUrl = props.personAvatarUrl, isMinified = props.isMinified, className = props.className, authorized = props.authorized, otherProps = __rest(props, ["isLogged", "onClick", "personName", "personInfo", "personStatus", "personAvatarUrl", "isMinified", "className", "authorized"]);
    return isLogged || authorized ? (React.createElement(User, __assign({}, otherProps, { as: "button", view: "clear", size: "m", avatarUrl: personAvatarUrl, status: personStatus, name: personName, info: personInfo, onlyAvatar: isMinified, withArrow: isMinified, onClick: onClick, className: cnHeaderLogin({ authorized: true }, [className]), ref: ref }))) : (React.createElement(Button, __assign({}, otherProps, { className: cnHeaderLogin({ authorized: false }, [className]), onClick: onClick, size: "s", view: "primary", label: "\u0412\u043E\u0439\u0442\u0438", ref: ref })));
});
