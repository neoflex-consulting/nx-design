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
import { defaultPropForm, defaultPropSize, defaultPropView } from '../SelectComponents/types';
import { UserSelectItem } from './UserSelectItem/UserSelectItem';
import { UserSelectValue } from './UserSelectValue/UserSelectValue';
import { isMultipleParams, isNotMultipleParams, searchCompare, withDefaultGetters, } from './helpers';
function UserSelectRender(props, ref) {
    var defaultDropdownRef = useRef(null);
    var controlInnerRef = useRef(null);
    var helperInputFakeElement = useRef(null);
    var controlRef = useRef(null);
    var _a = withDefaultGetters(props), placeholder = _a.placeholder, onBlur = _a.onBlur, onFocus = _a.onFocus, items = _a.items, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, ariaLabel = _a.ariaLabel, id = _a.id, _b = _a.dropdownRef, dropdownRef = _b === void 0 ? defaultDropdownRef : _b, _c = _a.form, form = _c === void 0 ? defaultPropForm : _c, _d = _a.view, view = _d === void 0 ? defaultPropView : _d, _e = _a.size, size = _e === void 0 ? defaultPropSize : _e, dropdownClassName = _a.dropdownClassName, name = _a.name, _f = _a.groups, groups = _f === void 0 ? [] : _f, getItemKey = _a.getItemKey, getItemLabel = _a.getItemLabel, getItemSubLabel = _a.getItemSubLabel, getItemAvatarUrl = _a.getItemAvatarUrl, getItemGroupKey = _a.getItemGroupKey, getItemDisabled = _a.getItemDisabled, getGroupKey = _a.getGroupKey, getGroupLabel = _a.getGroupLabel, renderItem = _a.renderItem, renderValueProp = _a.renderValue, onCreate = _a.onCreate, inputRefProp = _a.inputRef, _g = _a.labelForNotFound, labelForNotFound = _g === void 0 ? defaultlabelForNotFound : _g, _h = _a.labelForCreate, labelForCreate = _h === void 0 ? defaultlabelForCreate : _h, _j = _a.multiple, multiple = _j === void 0 ? false : _j, searchFunction = _a.searchFunction, restProps = __rest(_a, ["placeholder", "onBlur", "onFocus", "items", "onChange", "value", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name", "groups", "getItemKey", "getItemLabel", "getItemSubLabel", "getItemAvatarUrl", "getItemGroupKey", "getItemDisabled", "getGroupKey", "getGroupLabel", "renderItem", "renderValue", "onCreate", "inputRef", "labelForNotFound", "labelForCreate", "multiple", "searchFunction"]);
    var searchFunctionDefault = function (item, searchValue) {
        var searchOfLabel = searchCompare(searchValue, getItemLabel(item));
        if (searchOfLabel) {
            return searchOfLabel;
        }
        return searchCompare(searchValue, getItemSubLabel(item));
    };
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
        searchFunction: searchFunction || searchFunctionDefault
    }), getKeyProps = _k.getKeyProps, getOptionProps = _k.getOptionProps, isOpen = _k.isOpen, visibleItems = _k.visibleItems, isFocused = _k.isFocused, handleInputFocus = _k.handleInputFocus, handleInputBlur = _k.handleInputBlur, handleToggleDropdown = _k.handleToggleDropdown, inputRef = _k.inputRef, handleInputClick = _k.handleInputClick, handleInputChange = _k.handleInputChange, searchValue = _k.searchValue, clearValue = _k.clearValue, getHandleRemoveValue = _k.getHandleRemoveValue;
    var dropdownForm = getSelectDropdownForm(form);
    var renderItemDefault = function (props) {
        var item = props.item, active = props.active, hovered = props.hovered, onClick = props.onClick, onMouseEnter = props.onMouseEnter;
        return (React.createElement(UserSelectItem, { label: getItemLabel(item), subLabel: getItemSubLabel(item), avatarUrl: getItemAvatarUrl(item), active: active, hovered: hovered, size: size, indent: dropdownForm === 'round' ? 'increased' : 'normal', onClick: onClick, onMouseEnter: onMouseEnter, disable: getItemDisabled(item), multiple: multiple }));
    };
    var renderValueDefault = function (_a) {
        var item = _a.item, handleRemove = _a.handleRemove;
        return (React.createElement(UserSelectValue, { label: getItemLabel(item), subLabel: getItemSubLabel(item), avatarUrl: getItemAvatarUrl(item), key: getItemKey(item), size: size, handleRemove: handleRemove, multiple: multiple, disabled: disabled }));
    };
    var renderValue = renderValueProp || renderValueDefault;
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
            React.createElement("input", __assign({}, getKeyProps(), { type: "text", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, onChange: handleInputChange, ref: inputRefForRender, className: cnSelect('Input', {
                    size: size,
                    hide: !multiple && !!value,
                    multiple: multiple,
                    isUserSelect: true
                }), value: searchValue, style: { width: width } }))));
    };
    return (React.createElement(SelectContainer, __assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form, multiple: true, ref: ref }, restProps),
        React.createElement("div", { className: cnSelect('Control', { hasInput: true }), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            React.createElement("div", { className: cnSelect('ControlInner'), onClick: handleInputClick, role: "button", ref: controlInnerRef, "aria-hidden": "true" },
                React.createElement("div", { className: cnSelect('ControlValueContainer') }, multiple ? (React.createElement("div", { className: cnSelect('ControlValue', { isUserSelect: true }) }, renderControlValue())) : (renderControlValue()))),
            React.createElement("span", { className: cnSelect('Indicators') },
                value && (React.createElement("button", { type: "button", onClick: clearValue, className: cnSelect('ClearIndicator', [cnMixFocus()]) },
                    React.createElement(IconClose, { size: "xs", className: cnSelect('ClearIndicatorIcon') }))),
                React.createElement("span", { className: cnSelect('Delimiter') }),
                React.createElement("button", { type: "button", className: cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    React.createElement(IconSelect, { size: "xs", className: cnSelect('DropdownIndicatorIcon') })))),
        React.createElement(SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, getOptionProps: getOptionProps, dropdownRef: dropdownRef, form: dropdownForm, className: dropdownClassName, renderItem: renderItem || renderItemDefault, getGroupLabel: getGroupLabel, visibleItems: visibleItems, labelForNotFound: labelForNotFound, labelForCreate: labelForCreate }),
        React.createElement("div", { className: cnSelect('HelperInputFakeElement'), ref: helperInputFakeElement }, searchValue)));
}
export var UserSelect = forwardRef(UserSelectRender);
export * from './helpers';
