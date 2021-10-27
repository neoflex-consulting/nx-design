import { __assign, __rest } from "tslib";
import './SelectItem.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { getSizeByMap } from '../../../utils/getSizeByMap';
import { Checkbox } from '../../Checkbox/Checkbox';
export var cnSelectItem = cn('SelectItem');
var sizeCheckboxMap = {
    xs: 'm',
    s: 'm',
    m: 'l',
    l: 'l'
};
export var SelectItem = function (props) {
    var className = props.className, label = props.label, active = props.active, hovered = props.hovered, multiple = props.multiple, size = props.size, indent = props.indent, disabled = props.disabled, otherProps = __rest(props, ["className", "label", "active", "hovered", "multiple", "size", "indent", "disabled"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnSelectItem({ active: active, hovered: hovered, multiple: multiple, size: size, indent: indent, disabled: disabled }, [className]), "aria-selected": active, "aria-disabled": disabled, role: "option" }),
        multiple && (React.createElement(Checkbox, { className: cnSelectItem('Checkbox'), checked: active, size: getSizeByMap(sizeCheckboxMap, size) })),
        label));
};
