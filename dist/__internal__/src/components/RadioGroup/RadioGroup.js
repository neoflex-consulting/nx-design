import { __assign, __rest } from "tslib";
import './RadioGroup.css';
import React from 'react';
import { useChoiceGroup } from '../../hooks/useChoiceGroup/useChoiceGroup';
import { cn } from '../../utils/bem';
import { Radio } from '../Radio/Radio';
export var cnRadioGroup = cn('RadioGroup');
export var radioGroupDirections = ['column', 'row'];
export var radioGroupDefaultDirection = radioGroupDirections[0];
export var radioGroupSizes = ['m', 'l'];
export var radioGroupDefaultSize = radioGroupSizes[0];
export var radioGroupViews = ['primary', 'ghost'];
export var radioGroupDefaultView = radioGroupViews[0];
export var radioGroupPropAlign = ['center', 'top'];
export var radioGroupPropAlignDefault = radioGroupPropAlign[0];
export var RadioGroup = React.forwardRef(function (props, ref) {
    var _a = props.value, value = _a === void 0 ? null : _a, items = props.items, getLabel = props.getLabel, getDisabled = props.getDisabled, onChange = props.onChange, name = props.name, _b = props.direction, direction = _b === void 0 ? radioGroupDefaultDirection : _b, _c = props.size, size = _c === void 0 ? radioGroupDefaultSize : _c, _d = props.view, view = _d === void 0 ? radioGroupDefaultView : _d, _e = props.align, align = _e === void 0 ? radioGroupPropAlignDefault : _e, _f = props.disabled, disabled = _f === void 0 ? false : _f, className = props.className, otherProps = __rest(props, ["value", "items", "getLabel", "getDisabled", "onChange", "name", "direction", "size", "view", "align", "disabled", "className"]);
    var _g = useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: false
    }), getOnChange = _g.getOnChange, getChecked = _g.getChecked;
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnRadioGroup({ direction: direction, size: size, view: view }, [className]) }), items.map(function (item) { return (React.createElement(Radio, { align: align, key: getLabel(item), label: getLabel(item), size: size, view: view, name: name, disabled: disabled || (!!getDisabled && getDisabled(item)), checked: getChecked(item), onChange: function (_a) {
            var e = _a.e;
            return getOnChange(item)(e);
        }, className: cnRadioGroup('Item') })); })));
});
