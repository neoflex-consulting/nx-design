import { __assign, __rest } from "tslib";
import './CheckboxGroup.css';
import React from 'react';
import { useChoiceGroup } from '../../hooks/useChoiceGroup/useChoiceGroup';
import { cn } from '../../utils/bem';
import { Checkbox } from '../Checkbox/Checkbox';
export var cnCheckboxGroup = cn('CheckboxGroup');
export var checkboxGroupDirections = ['column', 'row'];
export var checkboxGroupDefaultDirection = checkboxGroupDirections[0];
export var checkboxGroupSizes = ['m', 'l'];
export var checkboxGroupDefaultSize = checkboxGroupSizes[0];
export var checkboxGroupViews = ['primary', 'ghost'];
export var checkboxGroupDefaultView = checkboxGroupViews[0];
export var CheckboxGroup = React.forwardRef(function (props, ref) {
    var _a = props.value, value = _a === void 0 ? null : _a, items = props.items, getLabel = props.getLabel, getDisabled = props.getDisabled, onChange = props.onChange, name = props.name, _b = props.direction, direction = _b === void 0 ? checkboxGroupDefaultDirection : _b, _c = props.size, size = _c === void 0 ? checkboxGroupDefaultSize : _c, _d = props.view, view = _d === void 0 ? checkboxGroupDefaultView : _d, _e = props.disabled, disabled = _e === void 0 ? false : _e, className = props.className, otherProps = __rest(props, ["value", "items", "getLabel", "getDisabled", "onChange", "name", "direction", "size", "view", "disabled", "className"]);
    var _f = useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: true
    }), getOnChange = _f.getOnChange, getChecked = _f.getChecked;
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnCheckboxGroup({ direction: direction, size: size, view: view }, [className]) }), items.map(function (item) { return (React.createElement(Checkbox, { key: getLabel(item), label: getLabel(item), size: size, view: view, name: name, disabled: disabled || (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled(item)), checked: getChecked(item), onChange: function (_a) {
            var e = _a.e;
            return getOnChange(item)(e);
        }, className: cnCheckboxGroup('Item') })); })));
});
