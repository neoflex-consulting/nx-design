import { __assign, __rest } from "tslib";
import './Steps.css';
import React from 'react';
import { useChoiceGroup } from '../../hooks/useChoiceGroup/useChoiceGroup';
import { cn } from '../../utils/bem';
import { StepsStep } from './StepsStep/StepsStep';
export var stepsSizes = ['m', 'l'];
export var stepsDefaultSize = stepsSizes[0];
export var cnSteps = cn('Steps');
export var Steps = React.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? stepsDefaultSize : _a, items = props.items, value = props.value, getLabel = props.getLabel, getDisabled = props.getDisabled, getCompleted = props.getCompleted, getSkipped = props.getSkipped, onChange = props.onChange, className = props.className, otherProps = __rest(props, ["size", "items", "value", "getLabel", "getDisabled", "getCompleted", "getSkipped", "onChange", "className"]);
    var _b = useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: false
    }), getOnChange = _b.getOnChange, getChecked = _b.getChecked;
    return (React.createElement("div", __assign({ ref: ref, className: cnSteps({ size: size }, [className]) }, otherProps), items.map(function (item, index) { return (React.createElement(StepsStep, { key: index, className: cnSteps('Item'), label: (getCompleted === null || getCompleted === void 0 ? void 0 : getCompleted(item)) ? getLabel(item) : index + 1 + " " + getLabel(item), size: size, active: getChecked(item), onChange: getOnChange(item), completed: getCompleted === null || getCompleted === void 0 ? void 0 : getCompleted(item), skipped: getSkipped === null || getSkipped === void 0 ? void 0 : getSkipped(item), disabled: getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled(item) })); })));
});
