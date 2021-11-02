"use strict";
exports.__esModule = true;
exports.HeaderLogin = exports.cnHeaderLogin = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var index_1 = require("../../index");
var User_1 = require("../../User/User");
exports.cnHeaderLogin = bem_1.cn('HeaderLogin');
exports.HeaderLogin = react_1["default"].forwardRef(function (props, ref) {
    var isLogged = props.isLogged, onClick = props.onClick, personName = props.personName, personInfo = props.personInfo, personStatus = props.personStatus, personAvatarUrl = props.personAvatarUrl, isMinified = props.isMinified, className = props.className, authorized = props.authorized, otherProps = tslib_1.__rest(props, ["isLogged", "onClick", "personName", "personInfo", "personStatus", "personAvatarUrl", "isMinified", "className", "authorized"]);
    return isLogged || authorized ? (react_1["default"].createElement(User_1.User, tslib_1.__assign({}, otherProps, { as: "button", view: "clear", size: "m", avatarUrl: personAvatarUrl, status: personStatus, name: personName, info: personInfo, onlyAvatar: isMinified, withArrow: isMinified, onClick: onClick, className: exports.cnHeaderLogin({ authorized: true }, [className]), ref: ref }))) : (react_1["default"].createElement(index_1.Button, tslib_1.__assign({}, otherProps, { className: exports.cnHeaderLogin({ authorized: false }, [className]), onClick: onClick, size: "s", view: "primary", label: "\u0412\u043E\u0439\u0442\u0438", ref: ref })));
});
