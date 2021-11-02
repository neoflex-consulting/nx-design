"use strict";
exports.__esModule = true;
exports.cnButton = exports.buttonPropFormDefault = exports.buttonPropForm = exports.buttonPropWidthDefault = exports.buttonPropWidth = exports.buttonPropViewDefault = exports.buttonPropView = exports.buttonPropSizeDefault = exports.buttonPropSize = void 0;
var tslib_1 = require("tslib");
require("./Button.css");
var react_1 = tslib_1.__importDefault(require("react"));
var MixFocus_1 = require("../../mixs/MixFocus/MixFocus");
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
var usePropsHandler_1 = require("../EventInterceptor/usePropsHandler");
var Loader_1 = require("../Loader/Loader");
exports.buttonPropSize = ['xs', 's', 'm', 'l'];
exports.buttonPropSizeDefault = exports.buttonPropSize[2];
exports.buttonPropView = ['primary', 'clear', 'ghost', 'secondary'];
exports.buttonPropViewDefault = exports.buttonPropView[0];
exports.buttonPropWidth = ['default', 'full'];
exports.buttonPropWidthDefault = exports.buttonPropWidth[0];
exports.buttonPropForm = [
    'default',
    'brick',
    'round',
    'brickRound',
    'roundBrick',
    'brickDefault',
    'defaultBrick',
];
exports.buttonPropFormDefault = exports.buttonPropForm[0];
exports.cnButton = bem_1.cn('Button');
var sizeMap = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 'm'
};
var sizeMapOnlyIcon = {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'm'
};
var Button = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var _a = usePropsHandler_1.usePropsHandler(exports.cnButton(), props), _b = _a.size, size = _b === void 0 ? exports.buttonPropSizeDefault : _b, _c = _a.view, view = _c === void 0 ? exports.buttonPropViewDefault : _c, _d = _a.width, width = _d === void 0 ? exports.buttonPropWidthDefault : _d, _e = _a.form, form = _e === void 0 ? exports.buttonPropFormDefault : _e, iconLeft = _a.iconLeft, iconRight = _a.iconRight, label = _a.label, className = _a.className, onClick = _a.onClick, disabled = _a.disabled, loading = _a.loading, tabIndex = _a.tabIndex, _f = _a.as, as = _f === void 0 ? 'button' : _f, onlyIcon = _a.onlyIcon, iconSizeProp = _a.iconSize, otherProps = tslib_1.__rest(_a, ["size", "view", "width", "form", "iconLeft", "iconRight", "label", "className", "onClick", "disabled", "loading", "tabIndex", "as", "onlyIcon", "iconSize"]);
    var Tag = as;
    var IconOnly = (!label || onlyIcon) && (iconLeft || iconRight);
    var IconLeft = iconLeft;
    var IconRight = iconRight;
    var withIcon = !!iconLeft || !!iconRight;
    var title = props.title || (!!IconOnly && label) || undefined;
    var iconSize = IconOnly
        ? getSizeByMap_1.getSizeByMap(sizeMapOnlyIcon, size, iconSizeProp)
        : getSizeByMap_1.getSizeByMap(sizeMap, size, iconSizeProp);
    var handleClick = function (e) {
        if (!disabled && !loading && onClick) {
            onClick(e);
        }
    };
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { onClick: onClick ? handleClick : undefined, className: exports.cnButton({
            size: size,
            view: view,
            width: width,
            form: form,
            disabled: disabled,
            loading: loading,
            withIcon: withIcon,
            onlyIcon: !!IconOnly
        }, [MixFocus_1.cnMixFocus(), className]), tabIndex: tabIndex, title: title, ref: ref }, (Tag === 'button' ? { disabled: disabled || loading } : {})),
        IconOnly && react_1["default"].createElement(IconOnly, { className: exports.cnButton('Icon'), size: iconSize }),
        !IconOnly &&
            ((IconLeft || IconRight) && label ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                IconLeft && (react_1["default"].createElement(IconLeft, { className: exports.cnButton('Icon', { position: 'left' }), size: iconSize })),
                react_1["default"].createElement("span", { className: exports.cnButton('Label') }, label),
                IconRight && (react_1["default"].createElement(IconRight, { className: exports.cnButton('Icon', { position: 'right' }), size: iconSize })))) : (label)),
        loading && react_1["default"].createElement(Loader_1.Loader, { className: exports.cnButton('Loader'), size: "s" })));
});
exports["default"] = Button;
