"use strict";
exports.__esModule = true;
exports.UserSelectItem = exports.cnUserItemCssTransition = exports.cnUserItem = void 0;
var tslib_1 = require("tslib");
require("./UserSelectItem.css");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var IconCheck_1 = require("../../../icons/IconCheck/IconCheck");
var bem_1 = require("../../../utils/bem");
var cnForCssTransition_1 = require("../../../utils/cnForCssTransition");
var Avatar_1 = require("../../Avatar/Avatar");
var sizes = ['xs', 's', 'm', 'l'];
exports.cnUserItem = bem_1.cn('UserSelectItemDeprecated');
exports.cnUserItemCssTransition = cnForCssTransition_1.cnForCssTransition(exports.cnUserItem);
exports.UserSelectItem = function (props) {
    var className = props.className, label = props.label, subLabel = props.subLabel, url = props.url, active = props.active, hovered = props.hovered, size = props.size, indent = props.indent, otherProps = tslib_1.__rest(props, ["className", "label", "subLabel", "url", "active", "hovered", "size", "indent"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnUserItem({ active: active, hovered: hovered, size: size, indent: indent }, [className]), "aria-selected": active, role: "option" }),
        react_1["default"].createElement("div", { className: exports.cnUserItem('AvatarBlock') },
            react_1["default"].createElement(Avatar_1.Avatar, { url: url, name: label }),
            react_1["default"].createElement(react_transition_group_1.CSSTransition, { "in": active, unmountOnExit: true, appear: true, classNames: exports.cnUserItemCssTransition, timeout: 200 },
                react_1["default"].createElement(IconCheck_1.IconCheck, { className: exports.cnUserItem('CheckIcon') }))),
        !subLabel ? (react_1["default"].createElement("div", { className: exports.cnUserItem('AdditionalInfo') }, label)) : (react_1["default"].createElement("div", { className: exports.cnUserItem('AdditionalInfo') },
            react_1["default"].createElement("div", null, label),
            react_1["default"].createElement("div", { className: exports.cnUserItem('SubUserLabel') }, subLabel)))));
};
