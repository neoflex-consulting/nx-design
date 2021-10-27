"use strict";
exports.__esModule = true;
exports.UserSelectItem = exports.cnUserSelectItem = void 0;
var tslib_1 = require("tslib");
require("./UserSelectItem.css");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var IconCheck_1 = require("../../../icons/IconCheck/IconCheck");
var bem_1 = require("../../../utils/bem");
var cnForCssTransition_1 = require("../../../utils/cnForCssTransition");
var Avatar_1 = require("../../Avatar/Avatar");
exports.cnUserSelectItem = bem_1.cn('UserSelectItem');
var cnUserSelectItemCheckIconCssTransition = cnForCssTransition_1.cnForCssTransition(exports.cnUserSelectItem, 'CheckIcon');
exports.UserSelectItem = function (props) {
    var className = props.className, label = props.label, subLabel = props.subLabel, avatarUrl = props.avatarUrl, active = props.active, hovered = props.hovered, size = props.size, indent = props.indent, disable = props.disable, multiple = props.multiple, otherProps = tslib_1.__rest(props, ["className", "label", "subLabel", "avatarUrl", "active", "hovered", "size", "indent", "disable", "multiple"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnUserSelectItem({ active: active, hovered: hovered, size: size, indent: indent, disable: disable }, [className]), "aria-selected": active, role: "option" }),
        react_1["default"].createElement("div", { className: exports.cnUserSelectItem('AvatarContainer') },
            react_1["default"].createElement(Avatar_1.Avatar, { className: exports.cnUserSelectItem('Avatar'), url: avatarUrl, name: label }),
            multiple && (react_1["default"].createElement(react_transition_group_1.CSSTransition, { "in": active, unmountOnExit: true, classNames: cnUserSelectItemCheckIconCssTransition, timeout: 200 },
                react_1["default"].createElement(IconCheck_1.IconCheck, { className: exports.cnUserSelectItem('CheckIcon') }))),
            !multiple && active && react_1["default"].createElement(IconCheck_1.IconCheck, { className: exports.cnUserSelectItem('CheckIcon') })),
        !subLabel ? (react_1["default"].createElement("div", { className: exports.cnUserSelectItem('Info') }, label)) : (react_1["default"].createElement("div", { className: exports.cnUserSelectItem('Info') },
            react_1["default"].createElement("div", null, label),
            react_1["default"].createElement("div", { className: exports.cnUserSelectItem('SubLabel', { disable: disable }) }, subLabel)))));
};
