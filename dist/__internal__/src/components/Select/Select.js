import { __assign, __rest } from "tslib";
import '../SelectComponents/Select.css';
import React, { forwardRef, useRef } from 'react';
import { useForkRef } from '../../hooks/useForkRef/useForkRef';
import { useSelect } from '../../hooks/useSelect/useSelect';
import { IconSelect } from '../../icons/IconSelect/IconSelect';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';
import { cnSelect } from '../SelectComponents/cnSelect';
import { getSelectDropdownForm } from '../SelectComponents/helpers';
import { SelectContainer } from '../SelectComponents/SelectContainer/SelectContainer';
import { SelectDropdown } from '../SelectComponents/SelectDropdown/SelectDropdown';
import { SelectItem } from '../SelectComponents/SelectItem/SelectItem';
import { defaultPropForm, defaultPropSize, defaultPropView } from '../SelectComponents/types';
import { withDefaultGetters, } from './helpers';
function SelectRender(props, ref) {
    var defaultDropdownRef = useRef(null);
    var controlRef = useRef(null);
    var _a = usePropsHandler('Select', withDefaultGetters(props), controlRef), placeholder = _a.placeholder, onBlur = _a.onBlur, onFocus = _a.onFocus, items = _a.items, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, ariaLabel = _a.ariaLabel, id = _a.id, _b = _a.dropdownRef, dropdownRef = _b === void 0 ? defaultDropdownRef : _b, _c = _a.form, form = _c === void 0 ? defaultPropForm : _c, _d = _a.view, view = _d === void 0 ? defaultPropView : _d, _e = _a.size, size = _e === void 0 ? defaultPropSize : _e, dropdownClassName = _a.dropdownClassName, name = _a.name, _f = _a.groups, groups = _f === void 0 ? [] : _f, getItemLabel = _a.getItemLabel, getItemKey = _a.getItemKey, getItemGroupKey = _a.getItemGroupKey, getItemDisabled = _a.getItemDisabled, getGroupKey = _a.getGroupKey, getGroupLabel = _a.getGroupLabel, renderItem = _a.renderItem, renderValueProp = _a.renderValue, inputRefProp = _a.inputRef, restProps = __rest(_a, ["placeholder", "onBlur", "onFocus", "items", "onChange", "value", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name", "groups", "getItemLabel", "getItemKey", "getItemGroupKey", "getItemDisabled", "getGroupKey", "getGroupLabel", "renderItem", "renderValue", "inputRef"]);
    var _g = useSelect({
        items: items,
        groups: groups,
        value: value,
        onChange: onChange,
        dropdownRef: dropdownRef,
        controlRef: controlRef,
        disabled: disabled,
        getItemLabel: getItemLabel,
        getItemKey: getItemKey,
        getGroupKey: getGroupKey,
        getItemGroupKey: getItemGroupKey,
        getItemDisabled: getItemDisabled,
        multiple: false,
        onBlur: onBlur,
        onFocus: onFocus
    }), getKeyProps = _g.getKeyProps, getOptionProps = _g.getOptionProps, isOpen = _g.isOpen, visibleItems = _g.visibleItems, isFocused = _g.isFocused, handleInputFocus = _g.handleInputFocus, handleInputBlur = _g.handleInputBlur, handleToggleDropdown = _g.handleToggleDropdown, inputRef = _g.inputRef, handleInputClick = _g.handleInputClick;
    var dropdownForm = getSelectDropdownForm(form);
    var renderItemDefault = function (props) {
        var item = props.item, active = props.active, hovered = props.hovered, onClick = props.onClick, onMouseEnter = props.onMouseEnter;
        return (React.createElement(SelectItem, { label: getItemLabel(item), active: active, hovered: hovered, multiple: false, size: size, indent: dropdownForm === 'round' ? 'increased' : 'normal', onClick: onClick, onMouseEnter: onMouseEnter, disabled: getItemDisabled(item) }));
    };
    var renderValueDefault = function (props) {
        var label = getItemLabel(props.item);
        return (React.createElement("span", { className: cnSelect('ControlValue'), title: label }, label));
    };
    var renderValue = renderValueProp || renderValueDefault;
    return (React.createElement(SelectContainer, __assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form, ref: ref }, restProps),
        React.createElement("div", { className: cnSelect('Control'), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            React.createElement("div", { className: cnSelect('ControlInner') },
                React.createElement("div", { className: cnSelect('ControlValueContainer') },
                    React.createElement("input", __assign({}, getKeyProps(), { type: "button", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, onClick: handleInputClick, ref: useForkRef([inputRef, inputRefProp]), className: cnSelect('FakeField'), readOnly: true })),
                    value && renderValue({ item: value }),
                    !value && placeholder && (React.createElement("span", { className: cnSelect('Placeholder'), title: "placeholder" }, placeholder)))),
            React.createElement("span", { className: cnSelect('Indicators') },
                React.createElement("button", { type: "button", className: cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    React.createElement(IconSelect, { size: "xs", className: cnSelect('DropdownIndicatorIcon') })))),
        React.createElement(SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, getOptionProps: getOptionProps, dropdownRef: dropdownRef, form: dropdownForm, className: dropdownClassName, renderItem: renderItem || renderItemDefault, getGroupLabel: getGroupLabel, visibleItems: visibleItems })));
}
export var Select = forwardRef(SelectRender);
export * from './helpers';
