import { __assign, __rest } from "tslib";
import './Switch.css';
import React from 'react';
import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
import { cn } from '../../utils/bem';
export var switchPropSize = ['m', 's', 'l'];
export var switchPropSizeDefault = switchPropSize[0];
export var switchPropView = ['primary', 'ghost'];
export var switchPropViewDefault = switchPropView[0];
export var switchPropAlign = ['center', 'top'];
export var switchPropAlignDefault = switchPropAlign[0];
export var cnSwitch = cn('Switch');
export var Switch = React.forwardRef(function (props, ref) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, name = props.name, _b = props.size, size = _b === void 0 ? switchPropSizeDefault : _b, _c = props.view, view = _c === void 0 ? switchPropViewDefault : _c, _d = props.align, align = _d === void 0 ? switchPropAlignDefault : _d, disabled = props.disabled, className = props.className, label = props.label, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, readOnly = props.readOnly, required = props.required, step = props.step, tabIndex = props.tabIndex, inputRef = props.inputRef, otherProps = __rest(props, ["checked", "name", "size", "view", "align", "disabled", "className", "label", "onChange", "onFocus", "onBlur", "readOnly", "required", "step", "tabIndex", "inputRef"]);
    var handleChange = function (e) {
        if (onChange) {
            onChange({ e: e, checked: !checked });
        }
    };
    return (React.createElement("label", __assign({}, otherProps, { className: cnSwitch({ size: size, view: view, disabled: disabled, align: align }, [className]), ref: ref }),
        React.createElement("input", { type: "checkbox", name: name, className: cnSwitch('Input', [cnMixFocus()]), checked: checked, disabled: disabled, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, readOnly: readOnly, required: required, step: step, tabIndex: tabIndex, ref: inputRef }),
        label && React.createElement("span", { className: cnSwitch('Label') }, label)));
});
