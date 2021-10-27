import { __assign, __rest } from "tslib";
import './ChoiceGroup.css';
import React from 'react';
import { useChoiceGroup } from '../../hooks/useChoiceGroup/useChoiceGroup';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { ChoiceGroupItem } from './Item/ChoiceGroup-Item';
export var choiceGroupForms = ['default', 'brick', 'round'];
export var choiceGroupDefaultForm = 'default';
export var choiceGroupSizes = ['xs', 's', 'm', 'l'];
export var choiceGroupDefaultSize = 'm';
export var choiceGroupViews = ['primary', 'ghost', 'secondary'];
export var choiceGroupDefaultView = 'primary';
export var choiceGroupWidth = ['default', 'full'];
export var choiceGroupWidthDefault = choiceGroupWidth[0];
var sizeMap = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 'm'
};
export var cnChoiceGroup = cn('ChoiceGroup');
export var ChoiceGroup = React.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? choiceGroupDefaultSize : _a, _b = props.form, form = _b === void 0 ? choiceGroupDefaultForm : _b, _c = props.view, view = _c === void 0 ? choiceGroupDefaultView : _c, _d = props.width, width = _d === void 0 ? choiceGroupWidthDefault : _d, onlyIcon = props.onlyIcon, iconSizeProp = props.iconSize, _e = props.value, value = _e === void 0 ? null : _e, _f = props.multiple, multiple = _f === void 0 ? false : _f, items = props.items, getLabel = props.getLabel, onChange = props.onChange, getIcon = props.getIcon, name = props.name, className = props.className, otherProps = __rest(props, ["size", "form", "view", "width", "onlyIcon", "iconSize", "value", "multiple", "items", "getLabel", "onChange", "getIcon", "name", "className"]);
    var _g = useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: multiple
    }), getOnChange = _g.getOnChange, getChecked = _g.getChecked;
    var iconSize = getSizeByMap(sizeMap, size, iconSizeProp);
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnChoiceGroup({ size: size, form: form, view: view, width: width, onlyIcon: onlyIcon }, [className]) }), items.map(function (item) { return (React.createElement(ChoiceGroupItem, { key: getLabel(item), onChange: getOnChange(item), checked: getChecked(item), label: getLabel(item).toString(), icon: getIcon && getIcon(item), iconSize: iconSize, multiple: multiple, onlyIcon: onlyIcon, name: name })); })));
});
