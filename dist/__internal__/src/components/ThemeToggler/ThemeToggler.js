import { __assign, __read, __rest } from "tslib";
import React, { useEffect, useRef, useState } from 'react';
import { useChoiceGroup } from '../../hooks/useChoiceGroup/useChoiceGroup';
import { IconCheck } from '../../icons/IconCheck/IconCheck';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { setRef } from '../../utils/setRef';
import { Button } from '../Button/Button';
import { ContextMenu } from '../ContextMenu/ContextMenu';
export var themeTogglerPropSize = ['m', 'l', 's', 'xs'];
export var themeTogglerPropSizeDefault = themeTogglerPropSize[0];
var iconSizeMap = {
    l: 'm',
    m: 's',
    s: 's',
    xs: 'xs'
};
var contextMenuSizeMap = {
    l: 'l',
    m: 'm',
    s: 's',
    xs: 's'
};
export var ThemeToggler = React.forwardRef(function (props, componentRef) {
    var _a = props.size, size = _a === void 0 ? themeTogglerPropSizeDefault : _a, items = props.items, value = props.value, onChange = props.onChange, getItemKey = props.getItemKey, getItemLabel = props.getItemLabel, getItemIcon = props.getItemIcon, direction = props.direction, possibleDirections = props.possibleDirections, otherProps = __rest(props, ["size", "items", "value", "onChange", "getItemKey", "getItemLabel", "getItemIcon", "direction", "possibleDirections"]);
    var ref = useRef(null);
    var _b = __read(useState(false), 2), isOpen = _b[0], setIsOpen = _b[1];
    useEffect(function () {
        if (componentRef) {
            setRef(componentRef, ref.current);
        }
    });
    var _c = useChoiceGroup({
        value: value,
        getKey: getItemKey || getItemLabel,
        callBack: onChange,
        multiple: false
    }), getOnChange = _c.getOnChange, getChecked = _c.getChecked;
    var iconSize = getSizeByMap(iconSizeMap, size);
    var contextMenuSize = getSizeByMap(contextMenuSizeMap, size);
    var getButtonIcon = function () { return getItemIcon(items.find(function (theme) { return getChecked(theme); })); };
    var onButtonClick = function (e) {
        if (items.length > 2) {
            setIsOpen(!isOpen);
        }
        else {
            var isFirstThemeSelected = getChecked(items[0]);
            getOnChange(items[isFirstThemeSelected ? 1 : 0])(e);
        }
    };
    var renderIcons = function (item) {
        var Icon = getItemIcon(item);
        return React.createElement(Icon, { size: iconSize });
    };
    var renderChecks = function (item) {
        return getChecked(item) && React.createElement(IconCheck, { size: iconSize });
    };
    if (items.length <= 1) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, __assign({}, otherProps, { ref: ref, iconLeft: getButtonIcon(), onClick: onButtonClick, onlyIcon: true, size: size, view: "clear" })),
        items.length > 2 && isOpen && (React.createElement(ContextMenu, { offset: 8, items: items, getLabel: getItemLabel, anchorRef: ref, direction: direction, possibleDirections: possibleDirections, getLeftSideBar: renderIcons, getRightSideBar: renderChecks, onClickOutside: function () { return setIsOpen(false); }, getOnClick: getOnChange, size: contextMenuSize }))));
});
