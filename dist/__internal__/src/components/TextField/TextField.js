import { __assign, __read, __rest } from "tslib";
import './TextField.css';
import React, { useState } from 'react';
import TextAreaAutoSize from 'react-textarea-autosize';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';
export var textFieldPropSize = ['m', 'xs', 's', 'l'];
export var textFieldPropSizeDefault = textFieldPropSize[0];
export var textFieldPropView = ['default', 'clear'];
export var textFieldPropViewDefault = textFieldPropView[0];
export var textFieldPropForm = [
    'default',
    'defaultClear',
    'defaultBrick',
    'brick',
    'brickDefault',
    'brickClear',
    'brickRound',
    'round',
    'roundClear',
    'roundBrick',
    'clearRound',
    'clearDefault',
    'clearBrick',
    'clearClear',
];
export var textFieldPropFormDefault = textFieldPropForm[0];
export var textFieldPropState = ['alert', 'success', 'warning'];
export var textFieldPropWidth = ['default', 'full'];
export var textFieldPropWidthDefault = textFieldPropWidth[0];
export var cnTextField = cn('TextField');
var sizeMap = {
    xs: 'xs',
    s: 's',
    m: 's',
    l: 'm'
};
export var TextField = React.forwardRef(function (props, ref) {
    var textFieldRef = ref || React.useRef(null);
    var _a = usePropsHandler(cnTextField(), props, textFieldRef), className = _a.className, _b = _a.type, type = _b === void 0 ? 'text' : _b, value = _a.value, onChange = _a.onChange, id = _a.id, name = _a.name, rows = _a.rows, cols = _a.cols, minRows = _a.minRows, maxRows = _a.maxRows, inputRef = _a.inputRef, maxLength = _a.maxLength, disabled = _a.disabled, _c = _a.size, size = _c === void 0 ? textFieldPropSizeDefault : _c, _d = _a.view, view = _d === void 0 ? textFieldPropViewDefault : _d, _e = _a.form, form = _e === void 0 ? textFieldPropFormDefault : _e, state = _a.state, _f = _a.width, width = _f === void 0 ? textFieldPropWidthDefault : _f, onBlur = _a.onBlur, onFocus = _a.onFocus, _g = _a.autoFocus, autoFocus = _g === void 0 ? false : _g, placeholder = _a.placeholder, leftSide = _a.leftSide, rightSide = _a.rightSide, autoComplete = _a.autoComplete, max = _a.max, min = _a.min, readOnly = _a.readOnly, required = _a.required, step = _a.step, tabIndex = _a.tabIndex, ariaLabel = _a.ariaLabel, iconSizeProp = _a.iconSize, otherProps = __rest(_a, ["className", "type", "value", "onChange", "id", "name", "rows", "cols", "minRows", "maxRows", "inputRef", "maxLength", "disabled", "size", "view", "form", "state", "width", "onBlur", "onFocus", "autoFocus", "placeholder", "leftSide", "rightSide", "autoComplete", "max", "min", "readOnly", "required", "step", "tabIndex", "ariaLabel", "iconSize"]);
    var _h = __read(useState(autoFocus), 2), focus = _h[0], setFocus = _h[1];
    var textarea = type === 'textarea';
    var LeftIcon = leftSide;
    var RightIcon = rightSide;
    var leftSideIsString = typeof leftSide === 'string';
    var rightSideIsString = typeof rightSide === 'string';
    var iconSize = getSizeByMap(sizeMap, size, iconSizeProp);
    var handleChange = function (e) {
        var value = e.target.value;
        !disabled && onChange && onChange({ e: e, id: id, name: name, value: value || null });
    };
    var handleBlur = function (e) {
        setFocus(false);
        onBlur && onBlur(e);
    };
    var handleFocus = function (e) {
        setFocus(true);
        onFocus && onFocus(e);
    };
    var commonProps = {
        'className': cnTextField('Input'),
        'value': value || '',
        'onChange': handleChange,
        maxLength: maxLength,
        disabled: disabled,
        'onBlur': handleBlur,
        'onFocus': handleFocus,
        autoFocus: autoFocus,
        placeholder: placeholder,
        autoComplete: autoComplete,
        readOnly: readOnly,
        required: required,
        tabIndex: tabIndex,
        name: name,
        'id': id ? id.toString() : '',
        'aria-label': ariaLabel
    };
    var textareaProps = {
        rows: rows,
        cols: cols,
        minRows: minRows || rows,
        maxRows: maxRows || rows,
        inputRef: inputRef === null
            ? undefined
            : inputRef
    };
    var inputProps = {
        type: type,
        max: max,
        min: min,
        step: step,
        ref: inputRef
    };
    return (React.createElement("div", __assign({ className: cnTextField({
            size: size,
            view: view,
            form: form,
            state: state,
            disabled: disabled,
            width: width,
            type: type,
            focus: focus,
            withValue: !!value
        }, [className]), ref: textFieldRef }, otherProps),
        LeftIcon && (React.createElement("div", { className: cnTextField('Side', {
                position: 'left',
                type: leftSideIsString ? 'string' : 'icon'
            }), title: typeof leftSide === 'string' ? leftSide : undefined }, leftSideIsString ? (leftSide) : (React.createElement(LeftIcon, { className: cnTextField('Icon'), size: iconSize })))),
        textarea ? (React.createElement(TextAreaAutoSize, __assign({}, commonProps, textareaProps))) : (React.createElement("input", __assign({}, commonProps, inputProps))),
        RightIcon && (React.createElement("div", { className: cnTextField('Side', {
                position: 'right',
                type: rightSideIsString ? 'string' : 'icon'
            }), title: typeof rightSide === 'string' ? rightSide : undefined }, rightSideIsString ? (rightSide) : (React.createElement(RightIcon, { className: cnTextField('Icon'), size: iconSize }))))));
});
