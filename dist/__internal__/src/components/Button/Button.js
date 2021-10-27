import { __assign, __rest } from "tslib";
import './Button.css';
import React from 'react';
import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';
import { Loader } from '../Loader/Loader';
export var buttonPropSize = ['xs', 's', 'm', 'l'];
export var buttonPropSizeDefault = buttonPropSize[2];
export var buttonPropView = ['primary', 'clear', 'ghost', 'secondary'];
export var buttonPropViewDefault = buttonPropView[0];
export var buttonPropWidth = ['default', 'full'];
export var buttonPropWidthDefault = buttonPropWidth[0];
export var buttonPropForm = [
    'default',
    'brick',
    'round',
    'brickRound',
    'roundBrick',
    'brickDefault',
    'defaultBrick',
];
export var buttonPropFormDefault = buttonPropForm[0];
export var cnButton = cn('Button');
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
export var Button = forwardRefWithAs(function (props, ref) {
    var _a = usePropsHandler(cnButton(), props), _b = _a.size, size = _b === void 0 ? buttonPropSizeDefault : _b, _c = _a.view, view = _c === void 0 ? buttonPropViewDefault : _c, _d = _a.width, width = _d === void 0 ? buttonPropWidthDefault : _d, _e = _a.form, form = _e === void 0 ? buttonPropFormDefault : _e, iconLeft = _a.iconLeft, iconRight = _a.iconRight, label = _a.label, className = _a.className, onClick = _a.onClick, disabled = _a.disabled, loading = _a.loading, tabIndex = _a.tabIndex, _f = _a.as, as = _f === void 0 ? 'button' : _f, onlyIcon = _a.onlyIcon, iconSizeProp = _a.iconSize, otherProps = __rest(_a, ["size", "view", "width", "form", "iconLeft", "iconRight", "label", "className", "onClick", "disabled", "loading", "tabIndex", "as", "onlyIcon", "iconSize"]);
    var Tag = as;
    var IconOnly = (!label || onlyIcon) && (iconLeft || iconRight);
    var IconLeft = iconLeft;
    var IconRight = iconRight;
    var withIcon = !!iconLeft || !!iconRight;
    var title = props.title || (!!IconOnly && label) || undefined;
    var iconSize = IconOnly
        ? getSizeByMap(sizeMapOnlyIcon, size, iconSizeProp)
        : getSizeByMap(sizeMap, size, iconSizeProp);
    var handleClick = function (e) {
        if (!disabled && !loading && onClick) {
            onClick(e);
        }
    };
    return (React.createElement(Tag, __assign({}, otherProps, { onClick: onClick ? handleClick : undefined, className: cnButton({
            size: size,
            view: view,
            width: width,
            form: form,
            disabled: disabled,
            loading: loading,
            withIcon: withIcon,
            onlyIcon: !!IconOnly
        }, [cnMixFocus(), className]), tabIndex: tabIndex, title: title, ref: ref }, (Tag === 'button' ? { disabled: disabled || loading } : {})),
        IconOnly && React.createElement(IconOnly, { className: cnButton('Icon'), size: iconSize }),
        !IconOnly &&
            ((IconLeft || IconRight) && label ? (React.createElement(React.Fragment, null,
                IconLeft && (React.createElement(IconLeft, { className: cnButton('Icon', { position: 'left' }), size: iconSize })),
                React.createElement("span", { className: cnButton('Label') }, label),
                IconRight && (React.createElement(IconRight, { className: cnButton('Icon', { position: 'right' }), size: iconSize })))) : (label)),
        loading && React.createElement(Loader, { className: cnButton('Loader'), size: "s" })));
});
