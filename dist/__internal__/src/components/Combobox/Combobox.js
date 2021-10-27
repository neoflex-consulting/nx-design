import { __assign, __rest } from "tslib";
import '../SelectComponents/Select.css';
import React, { forwardRef, useRef } from 'react';
import { useForkRef } from '../../hooks/useForkRef/useForkRef';
import { useSelect } from '../../hooks/useSelect/useSelect';
import { IconClose } from '../../icons/IconClose/IconClose';
import { IconSelect } from '../../icons/IconSelect/IconSelect';
import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
import { cnSelect } from '../SelectComponents/cnSelect';
import { defaultlabelForCreate, defaultlabelForNotFound, getInputWidth, getSelectDropdownForm, } from '../SelectComponents/helpers';
import { SelectContainer } from '../SelectComponents/SelectContainer/SelectContainer';
import { SelectDropdown } from '../SelectComponents/SelectDropdown/SelectDropdown';
import { SelectItem } from '../SelectComponents/SelectItem/SelectItem';
import { SelectValueTag } from '../SelectComponents/SelectValueTag/SelectValueTag';
import { defaultPropForm, defaultPropSize, defaultPropView } from '../SelectComponents/types';
import { isMultipleParams, isNotMultipleParams, withDefaultGetters, } from './helpers';
function ComboboxRender(props, ref) {
    var defaultDropdownRef = useRef(null);
    var controlInnerRef = useRef(null);
    var helperInputFakeElement = useRef(null);
    var controlRef = useRef(null);
    var _a = withDefaultGetters(props), placeholder = _a.placeholder, onBlur = _a.onBlur, onFocus = _a.onFocus, items = _a.items, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, ariaLabel = _a.ariaLabel, id = _a.id, _b = _a.dropdownRef, dropdownRef = _b === void 0 ? defaultDropdownRef : _b, _c = _a.form, form = _c === void 0 ? defaultPropForm : _c, _d = _a.view, view = _d === void 0 ? defaultPropView : _d, _e = _a.size, size = _e === void 0 ? defaultPropSize : _e, dropdownClassName = _a.dropdownClassName, name = _a.name, _f = _a.groups, groups = _f === void 0 ? [] : _f, getItemLabel = _a.getItemLabel, getItemKey = _a.getItemKey, getItemGroupKey = _a.getItemGroupKey, getItemDisabled = _a.getItemDisabled, getGroupKey = _a.getGroupKey, getGroupLabel = _a.getGroupLabel, renderItem = _a.renderItem, renderValueProp = _a.renderValue, onCreate = _a.onCreate, inputRefProp = _a.inputRef, _g = _a.labelForNotFound, labelForNotFound = _g === void 0 ? defaultlabelForNotFound : _g, _h = _a.labelForCreate, labelForCreate = _h === void 0 ? defaultlabelForCreate : _h, searchFunction = _a.searchFunction, _j = _a.multiple, multiple = _j === void 0 ? false : _j, restProps = __rest(_a, ["placeholder", "onBlur", "onFocus", "items", "onChange", "value", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name", "groups", "getItemLabel", "getItemKey", "getItemGroupKey", "getItemDisabled", "getGroupKey", "getGroupLabel", "renderItem", "renderValue", "onCreate", "inputRef", "labelForNotFound", "labelForCreate", "searchFunction", "multiple"]);
    var _k = useSelect({
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
        multiple: multiple,
        onBlur: onBlur,
        onFocus: onFocus,
        onCreate: onCreate,
        searchFunction: searchFunction
    }), getKeyProps = _k.getKeyProps, getOptionProps = _k.getOptionProps, isOpen = _k.isOpen, visibleItems = _k.visibleItems, isFocused = _k.isFocused, handleInputFocus = _k.handleInputFocus, handleInputBlur = _k.handleInputBlur, handleToggleDropdown = _k.handleToggleDropdown, inputRef = _k.inputRef, handleInputClick = _k.handleInputClick, handleInputChange = _k.handleInputChange, searchValue = _k.searchValue, clearValue = _k.clearValue, getHandleRemoveValue = _k.getHandleRemoveValue;
    var dropdownForm = getSelectDropdownForm(form);
    var renderItemDefault = function (props) {
        var item = props.item, active = props.active, hovered = props.hovered, onClick = props.onClick, onMouseEnter = props.onMouseEnter;
        return (React.createElement(SelectItem, { label: getItemLabel(item), active: active, hovered: hovered, multiple: multiple, size: size, indent: dropdownForm === 'round' ? 'increased' : 'normal', onClick: onClick, onMouseEnter: onMouseEnter, disabled: getItemDisabled(item) }));
    };
    var renderValueDefaultMultiple = function (_a) {
        var item = _a.item, handleRemove = _a.handleRemove;
        return (React.createElement(SelectValueTag, { label: getItemLabel(item), key: getItemKey(item), size: size, handleRemove: disabled ? undefined : handleRemove }));
    };
    var renderValueDefaultNotMultiple = function (props) {
        var valueLable = getItemLabel(props.item);
        return (React.createElement("span", { className: cnSelect('ControlValue'), title: valueLable }, valueLable));
    };
    var renderValue = renderValueProp || (multiple ? renderValueDefaultMultiple : renderValueDefaultNotMultiple);
    var inputRefForRender = useForkRef([inputRef, inputRefProp]);
    var renderControlValue = function () {
        var width = multiple ? getInputWidth(controlInnerRef, helperInputFakeElement) : undefined;
        return (React.createElement(React.Fragment, null,
            isMultipleParams(props) &&
                Array.isArray(props.value) &&
                props.value.map(function (item) {
                    return renderValue({ item: item, handleRemove: getHandleRemoveValue(item) });
                }),
            isNotMultipleParams(props) && props.value && renderValue({ item: props.value }),
            (!value || (Array.isArray(value) && value.length === 0)) && !searchValue && placeholder && (React.createElement("span", { className: cnSelect('Placeholder'), title: "placeholder" }, placeholder)),
            React.createElement("input", __assign({}, getKeyProps(), { type: "text", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, onChange: handleInputChange, ref: inputRefForRender, className: cnSelect('Input', { size: size, hide: !multiple && !!value, multiple: multiple }), value: searchValue, style: { width: width } }))));
    };
    return (React.createElement(SelectContainer, __assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form, multiple: multiple, ref: ref }, restProps),
        React.createElement("div", { className: cnSelect('Control', { hasInput: true }), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            React.createElement("div", { className: cnSelect('ControlInner'), onClick: handleInputClick, role: "button", ref: controlInnerRef, "aria-hidden": "true" },
                React.createElement("div", { className: cnSelect('ControlValueContainer') }, multiple ? (React.createElement("div", { className: cnSelect('ControlValue') }, renderControlValue())) : (renderControlValue()))),
            React.createElement("span", { className: cnSelect('Indicators') },
                value && (React.createElement("button", { type: "button", onClick: clearValue, className: cnSelect('ClearIndicator', [cnMixFocus()]) },
                    React.createElement(IconClose, { size: "xs", className: cnSelect('ClearIndicatorIcon') }))),
                React.createElement("span", { className: cnSelect('Delimiter') }),
                React.createElement("button", { type: "button", className: cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    React.createElement(IconSelect, { size: "xs", className: cnSelect('DropdownIndicatorIcon') })))),
        React.createElement(SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, getOptionProps: getOptionProps, dropdownRef: dropdownRef, form: dropdownForm, className: dropdownClassName, renderItem: renderItem || renderItemDefault, getGroupLabel: getGroupLabel, visibleItems: visibleItems, labelForNotFound: labelForNotFound, labelForCreate: labelForCreate }),
        React.createElement("div", { className: cnSelect('HelperInputFakeElement'), ref: helperInputFakeElement }, searchValue)));
}
export var Combobox = forwardRef(ComboboxRender);
export * from './helpers';
