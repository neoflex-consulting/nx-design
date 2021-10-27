import { __assign, __rest } from "tslib";
import './Radio.css';
import React from 'react';
import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
import { cn } from '../../utils/bem';
export var radioPropSize = ['m', 'l'];
export var radioPropSizeDefault = radioPropSize[0];
export var radioPropView = ['primary', 'ghost'];
export var radioPropViewDefault = radioPropView[0];
export var radioPropAlign = ['center', 'top'];
export var radioPropAlignDefault = radioPropAlign[0];
export var cnRadio = cn('Radio');
export var Radio = React.forwardRef(function (props, ref) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, name = props.name, _b = props.size, size = _b === void 0 ? radioPropSizeDefault : _b, _c = props.view, view = _c === void 0 ? radioPropViewDefault : _c, _d = props.align, align = _d === void 0 ? radioPropAlignDefault : _d, disabled = props.disabled, className = props.className, label = props.label, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, readOnly = props.readOnly, required = props.required, step = props.step, tabIndex = props.tabIndex, inputRef = props.inputRef, otherProps = __rest(props, ["checked", "name", "size", "view", "align", "disabled", "className", "label", "onChange", "onFocus", "onBlur", "readOnly", "required", "step", "tabIndex", "inputRef"]);
    var handleChange = function (e) {
        if (onChange) {
            onChange({ e: e, checked: !checked });
        }
    };
    return (React.createElement("label", __assign({}, otherProps, { className: cnRadio({ size: size, view: view, disabled: disabled, align: align }, [className]), ref: ref }),
        React.createElement("input", { type: "radio", name: name, className: cnRadio('Input', [cnMixFocus()]), checked: checked, disabled: disabled, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, readOnly: readOnly, required: required, step: step, tabIndex: tabIndex, ref: inputRef }),
        label && React.createElement("span", { className: cnRadio('Label') }, label)));
});
