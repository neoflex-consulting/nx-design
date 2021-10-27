import { __assign, __rest } from "tslib";
import './SelectItem.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { getSizeByMap } from '../../../utils/getSizeByMap';
import { Checkbox } from '../../Checkbox/Checkbox';
export var cnSelectItem = cn('SelectItemDeprecated');
// в дальнейшем уберем обязательность onChange у Checkbox
// eslint-disable-next-line @typescript-eslint/no-empty-function
var emptyFunction = function () { };
var sizeCheckboxMap = {
    xs: 'm',
    s: 'm',
    m: 'l',
    l: 'l'
};
export var SelectItem = function (props) {
    var className = props.className, label = props.label, active = props.active, hovered = props.hovered, multiple = props.multiple, size = props.size, indent = props.indent, otherProps = __rest(props, ["className", "label", "active", "hovered", "multiple", "size", "indent"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnSelectItem({ active: active, hovered: hovered, multiple: multiple, size: size, indent: indent }, [className]), "aria-selected": active, role: "option" }),
        multiple && (React.createElement(Checkbox, { className: cnSelectItem('Checkbox'), checked: active, onChange: emptyFunction, size: getSizeByMap(sizeCheckboxMap, size) })),
        label));
};
