import './StepsStep.css';
import React from 'react';
import { IconCheck } from '../../../icons/IconCheck/IconCheck';
import { cn } from '../../../utils/bem';
import { getSizeByMap } from '../../../utils/getSizeByMap';
export var cnStepsStep = cn('StepsStep');
var sizeMap = {
    m: 'xs',
    l: 's'
};
export var StepsStep = React.forwardRef(function (props, ref) {
    var size = props.size, label = props.label, _a = props.active, active = _a === void 0 ? false : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, _c = props.completed, completed = _c === void 0 ? false : _c, _d = props.skipped, skipped = _d === void 0 ? false : _d, onChange = props.onChange, className = props.className;
    var clickHandler = function (e) {
        !active && !disabled && (onChange === null || onChange === void 0 ? void 0 : onChange(e));
    };
    var iconSize = getSizeByMap(sizeMap, size);
    return (React.createElement("button", { ref: ref, className: cnStepsStep({ size: size, active: active, disabled: disabled, completed: completed, skipped: skipped }, [className]), type: "button", title: label, onClick: clickHandler },
        completed && React.createElement(IconCheck, { className: cnStepsStep('Icon'), size: iconSize }),
        label));
});
