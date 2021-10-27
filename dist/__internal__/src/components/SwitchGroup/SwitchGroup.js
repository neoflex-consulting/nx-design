import { __assign, __rest } from "tslib";
import './SwitchGroup.css';
import React from 'react';
import { useChoiceGroup } from '../../hooks/useChoiceGroup/useChoiceGroup';
import { cn } from '../../utils/bem';
import { Switch } from '../Switch/Switch';
export var cnSwitchGroup = cn('SwitchGroup');
export var switchGroupDirections = ['column', 'row'];
export var switchGroupDefaultDirection = switchGroupDirections[0];
export var switchGroupSizes = ['m', 'l'];
export var switchGroupDefaultSize = switchGroupSizes[0];
export var switchGroupViews = ['primary', 'ghost'];
export var switchGroupDefaultView = switchGroupViews[0];
export var SwitchGroup = React.forwardRef(function (props, ref) {
    var _a = props.value, value = _a === void 0 ? null : _a, items = props.items, getLabel = props.getLabel, getDisabled = props.getDisabled, onChange = props.onChange, name = props.name, _b = props.direction, direction = _b === void 0 ? switchGroupDefaultDirection : _b, _c = props.size, size = _c === void 0 ? switchGroupDefaultSize : _c, _d = props.view, view = _d === void 0 ? switchGroupDefaultView : _d, _e = props.disabled, disabled = _e === void 0 ? false : _e, className = props.className, otherProps = __rest(props, ["value", "items", "getLabel", "getDisabled", "onChange", "name", "direction", "size", "view", "disabled", "className"]);
    var _f = useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: true
    }), getOnChange = _f.getOnChange, getChecked = _f.getChecked;
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnSwitchGroup({ direction: direction, size: size, view: view }, [className]) }), items.map(function (item) { return (React.createElement(Switch, { key: getLabel(item), label: getLabel(item), size: size, view: view, name: name, disabled: disabled || (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled(item)), checked: getChecked(item), onChange: function (_a) {
            var e = _a.e;
            return getOnChange(item)(e);
        }, className: cnSwitchGroup('Item') })); })));
});
