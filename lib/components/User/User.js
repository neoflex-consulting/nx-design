"use strict";
exports.__esModule = true;
exports.User = exports.cnUser = exports.buttonPropSizeDefault = exports.buttonPropSize = exports.userPropStatus = exports.userPropWidthDefault = exports.userPropWidth = exports.userPropViewDefault = exports.userPropView = exports.userPropSizeDefault = exports.userPropSize = void 0;
var tslib_1 = require("tslib");
require("./User.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconSelect_1 = require("../../icons/IconSelect/IconSelect");
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
var Avatar_1 = require("../Avatar/Avatar");
var index_1 = require("../index");
var Text_1 = require("../Text/Text");
exports.userPropSize = ['m', 's', 'l'];
exports.userPropSizeDefault = exports.userPropSize[0];
exports.userPropView = ['clear', 'ghost'];
exports.userPropViewDefault = exports.userPropView[0];
exports.userPropWidth = ['default', 'full'];
exports.userPropWidthDefault = exports.userPropWidth[0];
exports.userPropStatus = ['available', 'remote', 'out'];
exports.buttonPropSize = ['xs', 's', 'm', 'l'];
exports.buttonPropSizeDefault = exports.buttonPropSize[2];
exports.cnUser = bem_1.cn('User');
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
exports.User = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, className = props.className, _b = props.size, size = _b === void 0 ? exports.userPropSizeDefault : _b, avatarUrl = props.avatarUrl, name = props.name, _c = props.view, view = _c === void 0 ? exports.userPropViewDefault : _c, _d = props.width, width = _d === void 0 ? exports.userPropWidthDefault : _d, propOnlyAvatar = props.onlyAvatar, withArrow = props.withArrow, iconRight = props.iconRight, onIconRightClick = props.onIconRightClick, info = props.info, status = props.status, otherProps = tslib_1.__rest(props, ["as", "className", "size", "avatarUrl", "name", "view", "width", "onlyAvatar", "withArrow", "iconRight", "onIconRightClick", "info", "status"]);
    var Tag = as;
    var onlyAvatar = propOnlyAvatar || (!name && !info);
    var IconRight = iconRight;
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { className: exports.cnUser({ size: size, view: view, width: width, withArrow: withArrow, minified: onlyAvatar }, [className]), ref: ref }),
        react_1["default"].createElement("div", { className: exports.cnUser('AvatarWrapper', { status: status }) },
            react_1["default"].createElement(Avatar_1.Avatar, { size: getSizeByMap_1.getSizeByMap(avatarSizeMap, size), url: avatarUrl, name: name })),
        !onlyAvatar && (name || info) && (react_1["default"].createElement("div", { className: exports.cnUser('Block') },
            name && (react_1["default"].createElement(Text_1.Text, { className: exports.cnUser('Name'), size: size, view: "primary", lineHeight: "2xs" }, name)),
            info && size !== 's' && (react_1["default"].createElement(Text_1.Text, { className: exports.cnUser('Info'), size: getSizeByMap_1.getSizeByMap(infoSizeMap, size), view: "secondary", lineHeight: "2xs" }, info)))),
        withArrow && (react_1["default"].createElement(IconSelect_1.IconSelect, { className: exports.cnUser('Icon'), size: getSizeByMap_1.getSizeByMap(iconSizeMap, size), view: "secondary" })),
        IconRight && !onIconRightClick && (react_1["default"].createElement(IconRight, { className: exports.cnUser('Icon'), size: getSizeByMap_1.getSizeByMap(iconSizeMap, size), view: "secondary" })),
        IconRight && onIconRightClick && (react_1["default"].createElement(index_1.Button, { className: exports.cnUser('IconRightButton'), onClick: onIconRightClick, iconRight: IconRight, onlyIcon: true, view: "clear", size: getSizeByMap_1.getSizeByMap(buttonSizeMap, size), form: "round" }))));
});
