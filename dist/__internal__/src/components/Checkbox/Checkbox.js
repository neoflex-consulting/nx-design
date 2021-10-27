import { __assign, __rest } from "tslib";
import './Checkbox.css';
import React from 'react';
import { useForkRef } from '../../hooks/useForkRef/useForkRef';
import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
import { cn } from '../../utils/bem';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';
export var checkboxPropSize = ['m', 'l'];
export var checkboxPropSizeDefault = checkboxPropSize[0];
export var checkboxPropView = ['primary', 'ghost'];
export var checkboxPropViewDefault = checkboxPropView[0];
export var checkboxPropAlign = ['center', 'top'];
export var checkboxPropAlignDefault = checkboxPropAlign[0];
export var cnCheckbox = cn('Checkbox');
export var Checkbox = React.forwardRef(function (props, ref) {
    var checkboxRef = React.useRef(null);
    var _a = usePropsHandler(cnCheckbox(), props, checkboxRef), _b = _a.checked, checked = _b === void 0 ? false : _b, name = _a.name, _c = _a.size, size = _c === void 0 ? checkboxPropSizeDefault : _c, _d = _a.view, view = _d === void 0 ? checkboxPropViewDefault : _d, _e = _a.align, align = _e === void 0 ? checkboxPropAlignDefault : _e, disabled = _a.disabled, _f = _a.intermediate, intermediate = _f === void 0 ? false : _f, className = _a.className, label = _a.label, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, readOnly = _a.readOnly, required = _a.required, step = _a.step, tabIndex = _a.tabIndex, inputRef = _a.inputRef, otherProps = __rest(_a, ["checked", "name", "size", "view", "align", "disabled", "intermediate", "className", "label", "onChange", "onFocus", "onBlur", "readOnly", "required", "step", "tabIndex", "inputRef"]);
    var handleChange = function (e) {
        if (onChange) {
            onChange({ e: e, checked: !checked });
        }
    };
    return (React.createElement("label", __assign({}, otherProps, { className: cnCheckbox({ size: size, view: view, disabled: disabled, intermediate: intermediate, align: align }, [className]), ref: useForkRef([ref, checkboxRef]) }),
        React.createElement("input", { type: "checkbox", name: name, className: cnCheckbox('Input', [cnMixFocus()]), checked: checked, disabled: disabled, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, readOnly: readOnly, required: required, step: step, tabIndex: tabIndex, ref: inputRef }),
        label && React.createElement("span", { className: cnCheckbox('Label') }, label)));
});
