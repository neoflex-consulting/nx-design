"use strict";
exports.__esModule = true;
exports.UserSelectValue = void 0;
var tslib_1 = require("tslib");
require("./UserSelectValue.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconClose_1 = require("../../../icons/IconClose/IconClose");
var bem_1 = require("../../../utils/bem");
var TagBase_1 = require("../../TagBase/TagBase");
var User_1 = require("../../User/User");
var cnUserValue = bem_1.cn('UserSelectValueDeprecated');
exports.UserSelectValue = function (props) {
    var _a = props.size, size = _a === void 0 ? TagBase_1.tagBasePropSizeDefault : _a, label = props.label, subLabel = props.subLabel, disabled = props.disabled, onCancel = props.onCancel, url = props.url;
    var withCancel = typeof onCancel === 'function';
    return (react_1["default"].createElement(User_1.User, { className: cnUserValue({ withCancel: withCancel }), avatarUrl: url, name: label, info: subLabel, size: size, view: "ghost", iconRight: !disabled ? IconClose_1.IconClose : undefined, onIconRightClick: !disabled ? onCancel : undefined }));
};
