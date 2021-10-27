"use strict";
exports.__esModule = true;
exports.UserSelectValue = exports.cnUserSelectValue = void 0;
var tslib_1 = require("tslib");
require("./UserSelectValue.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconClose_1 = require("../../../icons/IconClose/IconClose");
var bem_1 = require("../../../utils/bem");
var User_1 = require("../../User/User");
exports.cnUserSelectValue = bem_1.cn('UserSelectValue');
exports.UserSelectValue = function (props) {
    var size = props.size, label = props.label, subLabel = props.subLabel, disabled = props.disabled, handleRemove = props.handleRemove, avatarUrl = props.avatarUrl, multiple = props.multiple;
    return (react_1["default"].createElement(User_1.User, { className: exports.cnUserSelectValue({ multiple: multiple, size: size }), avatarUrl: avatarUrl, name: label, info: subLabel, size: size, view: multiple ? 'ghost' : 'clear', iconRight: !disabled && multiple ? IconClose_1.IconClose : undefined, onIconRightClick: !disabled && multiple ? handleRemove : undefined }));
};
