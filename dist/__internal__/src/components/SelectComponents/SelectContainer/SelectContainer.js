import { __assign, __rest } from "tslib";
import './SelectContainer.css';
import React, { forwardRef } from 'react';
import { cnSelect } from '../cnSelect';
import { defaultPropForm, defaultPropSize, defaultPropView, } from '../types';
export var SelectContainer = forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? defaultPropSize : _a, _b = props.form, form = _b === void 0 ? defaultPropForm : _b, _c = props.view, view = _c === void 0 ? defaultPropView : _c, className = props.className, disabled = props.disabled, children = props.children, focused = props.focused, multiple = props.multiple, otherProps = __rest(props, ["size", "form", "view", "className", "disabled", "children", "focused", "multiple"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnSelect({ size: size, form: form, disabled: disabled, view: view, focused: focused, multiple: multiple }, [className]), ref: ref }), children));
});
