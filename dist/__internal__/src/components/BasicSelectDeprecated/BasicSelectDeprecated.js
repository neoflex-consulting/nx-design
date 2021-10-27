import { __assign, __read, __rest } from "tslib";
import '../SelectComponentsDeprecated/Select.css';
import React, { useRef, useState } from 'react';
import { useSelect } from '../../hooks/useSelectDeprecated/useSelect';
import { IconSelect } from '../../icons/IconSelect/IconSelect';
import { scrollIntoView } from '../../utils/scrollIntoView';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';
import { cnSelect } from '../SelectComponentsDeprecated/cnSelect';
import { getSelectDropdownForm } from '../SelectComponentsDeprecated/helpers';
import { SelectContainer } from '../SelectComponentsDeprecated/SelectContainer/SelectContainer';
import { SelectDropdown, } from '../SelectComponentsDeprecated/SelectDropdown/SelectDropdown';
import { SelectItem } from '../SelectComponentsDeprecated/SelectItem/SelectItem';
import { DefaultPropForm, DefaultPropSize, DefaultPropView, } from '../SelectComponentsDeprecated/types';
export var BasicSelect = function (props) {
    var defaultOptionsRef = useRef(null);
    var controlRef = useRef(null);
    var getOptionKeyDefault = props.getOptionLabel;
    var _a = usePropsHandler(cnSelect(), props, controlRef), placeholder = _a.placeholder, onBlur = _a.onBlur, onFocus = _a.onFocus, options = _a.options, onChange = _a.onChange, value = _a.value, getOptionLabel = _a.getOptionLabel, _b = _a.getOptionKey, getOptionKey = _b === void 0 ? getOptionKeyDefault : _b, disabled = _a.disabled, ariaLabel = _a.ariaLabel, id = _a.id, _c = _a.dropdownRef, dropdownRef = _c === void 0 ? defaultOptionsRef : _c, _d = _a.form, form = _d === void 0 ? DefaultPropForm : _d, _e = _a.view, view = _e === void 0 ? DefaultPropView : _e, _f = _a.size, size = _f === void 0 ? DefaultPropSize : _f, dropdownClassName = _a.dropdownClassName, name = _a.name, restProps = __rest(_a, ["placeholder", "onBlur", "onFocus", "options", "onChange", "value", "getOptionLabel", "getOptionKey", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name"]);
    var toggleRef = useRef(null);
    var _g = __read(useState(false), 2), isFocused = _g[0], setIsFocused = _g[1];
    var handlerChangeValue = function (v) {
        if (typeof onChange === 'function' && v) {
            onChange(v);
        }
    };
    var arrValue = typeof value !== 'undefined' && value !== null ? [value] : null;
    var scrollToIndex = function (index) {
        if (!dropdownRef.current) {
            return;
        }
        var elements = dropdownRef.current.querySelectorAll('div[role=option]');
        scrollIntoView(elements[index], dropdownRef.current);
    };
    var searchFunctionDefault = function (item, searchValue) {
        var searchValueLowerCase = searchValue.toLowerCase();
        return getOptionLabel(item)
            .toLowerCase()
            .includes(searchValueLowerCase);
    };
    var _h = useSelect({
        options: options,
        value: arrValue,
        onChange: handlerChangeValue,
        optionsRef: dropdownRef,
        controlRef: controlRef,
        scrollToIndex: scrollToIndex,
        disabled: disabled,
        getOptionLabel: getOptionLabel,
        getOptionKey: getOptionKey,
        searchFunction: searchFunctionDefault
    }), visibleOptions = _h.visibleOptions, highlightedIndex = _h.highlightedIndex, getToggleProps = _h.getToggleProps, getOptionProps = _h.getOptionProps, isOpen = _h.isOpen, setOpen = _h.setOpen;
    var handleInputFocus = function (e) {
        if (!disabled) {
            if (!isFocused) {
                setIsFocused(true);
            }
            if (typeof onFocus === 'function') {
                onFocus(e);
            }
        }
    };
    var handleInputBlur = function (e) {
        var _a;
        if (isOpen) {
            (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
        if (isFocused) {
            setIsFocused(false);
            if (typeof onBlur === 'function') {
                onBlur(e);
            }
        }
    };
    var handleToggleDropdown = function () {
        var _a;
        if (isOpen) {
            setOpen(false);
            setIsFocused(false);
        }
        else {
            setOpen(true);
            setIsFocused(true);
            (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    var renderItemDefault = function (props) {
        var item = props.item, itemId = props.id, active = props.active, hovered = props.hovered, restProps = __rest(props, ["item", "id", "active", "hovered"]);
        if (!item) {
            return null;
        }
        var label = getOptionLabel(item);
        var indent = form === 'round' ? 'increased' : 'normal';
        return (React.createElement(SelectItem, __assign({ id: itemId, label: label, item: item, active: active, hovered: hovered, multiple: false, size: size, indent: indent }, restProps)));
    };
    return (React.createElement(SelectContainer, __assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form }, restProps),
        React.createElement("div", { className: cnSelect('Control'), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            React.createElement("div", { className: cnSelect('ControlInner') },
                React.createElement("div", { className: cnSelect('ControlValueContainer') },
                    React.createElement("input", __assign({}, getToggleProps(), { type: "button", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, ref: toggleRef, className: cnSelect('FakeField'), readOnly: true })),
                    arrValue ? (React.createElement("span", { className: cnSelect('ControlValue'), title: getOptionLabel(arrValue[0]) }, getOptionLabel(arrValue[0]))) : (React.createElement("span", { className: cnSelect('Placeholder'), title: "placeholder" }, placeholder || '')))),
            React.createElement("span", { className: cnSelect('Indicators') },
                React.createElement("button", { type: "button", className: cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    React.createElement(IconSelect, { size: "xs", className: cnSelect('DropdownIndicatorIcon') })))),
        React.createElement(SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, visibleOptions: visibleOptions, highlightedIndex: highlightedIndex, getOptionProps: getOptionProps, dropdownRef: dropdownRef, id: id, selectedValues: arrValue, getOptionKey: getOptionKey, form: getSelectDropdownForm(form), className: dropdownClassName, renderItem: renderItemDefault })));
};
