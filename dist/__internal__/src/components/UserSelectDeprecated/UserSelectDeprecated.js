import { __assign, __read, __rest, __spread } from "tslib";
import React, { useRef, useState } from 'react';
import { useSelect } from '../../hooks/useSelectDeprecated/useSelect';
import { IconClose } from '../../icons/IconClose/IconClose';
import { IconSelect } from '../../icons/IconSelect/IconSelect';
import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
import { scrollIntoView } from '../../utils/scrollIntoView';
import { cnSelect } from '../SelectComponentsDeprecated/cnSelect';
import { getSelectDropdownForm } from '../SelectComponentsDeprecated/helpers';
import { SelectContainer } from '../SelectComponentsDeprecated/SelectContainer/SelectContainer';
import { SelectDropdown, } from '../SelectComponentsDeprecated/SelectDropdown/SelectDropdown';
import { DefaultPropForm, DefaultPropView, } from '../SelectComponentsDeprecated/types';
import { UserSelectItem } from './UserSelectItem/UserSelectItem';
import { UserSelectValue } from './UserSelectValue/UserSelectValue';
export var userSelectPropSize = ['m', 's', 'l'];
export var userSelectPropSizeDefault = userSelectPropSize[0];
export var UserSelect = function (props) {
    var defaultOptionsRef = useRef(null);
    var getOptionKeyDefault = props.getOptionLabel;
    var placeholder = props.placeholder, onBlur = props.onBlur, onFocus = props.onFocus, options = props.options, onChange = props.onChange, value = props.value, getOptionLabel = props.getOptionLabel, _a = props.getOptionKey, getOptionKey = _a === void 0 ? getOptionKeyDefault : _a, getOptionAdditionalInfo = props.getOptionAdditionalInfo, getOptionAvatarUrl = props.getOptionAvatarUrl, searchFunction = props.searchFunction, disabled = props.disabled, ariaLabel = props.ariaLabel, id = props.id, _b = props.form, form = _b === void 0 ? DefaultPropForm : _b, _c = props.view, view = _c === void 0 ? DefaultPropView : _c, _d = props.size, size = _d === void 0 ? userSelectPropSizeDefault : _d, getGroupOptions = props.getGroupOptions, _e = props.labelForNotFound, labelForNotFound = _e === void 0 ? 'Не найдено' : _e, dropdownClassName = props.dropdownClassName, _f = props.dropdownRef, dropdownRef = _f === void 0 ? defaultOptionsRef : _f, name = props.name, _g = props.multiple, multiple = _g === void 0 ? false : _g, restProps = __rest(props, ["placeholder", "onBlur", "onFocus", "options", "onChange", "value", "getOptionLabel", "getOptionKey", "getOptionAdditionalInfo", "getOptionAvatarUrl", "searchFunction", "disabled", "ariaLabel", "id", "form", "view", "size", "getGroupOptions", "labelForNotFound", "dropdownClassName", "dropdownRef", "name", "multiple"]);
    var _h = __read(useState(false), 2), isFocused = _h[0], setIsFocused = _h[1];
    var _j = __read(useState({
        value: ''
    }), 2), inputData = _j[0], setInputData = _j[1];
    var toggleRef = useRef(null);
    var controlInnerRef = useRef(null);
    var helperInputFakeElement = useRef(null);
    var handlerChangeValue = function (values) {
        var _a;
        if (typeof onChange === 'function' && values) {
            onChange(values);
        }
        setInputData({ value: (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.value });
    };
    var controlRef = useRef(null);
    var arrValue = typeof value !== 'undefined' && value !== null ? __spread(value) : null;
    var hasGroup = typeof getGroupOptions === 'function';
    var scrollToIndex = function (index) {
        if (!dropdownRef.current) {
            return;
        }
        var elements = dropdownRef.current.querySelectorAll('div[role=option]');
        scrollIntoView(elements[index], dropdownRef.current);
    };
    var onSelectOption = function () {
        setInputData({ value: '' });
    };
    var searchFunctionDefault = function (item, searchValue) {
        var searchValueLowerCase = searchValue.toLowerCase();
        var label = getOptionLabel(item)
            .toLowerCase()
            .includes(searchValueLowerCase);
        var additionalInfo = getOptionAdditionalInfo
            ? getOptionAdditionalInfo(item)
                .toLowerCase()
                .includes(searchValueLowerCase)
            : false;
        return label || additionalInfo;
    };
    var searchFn = searchFunction || searchFunctionDefault;
    var _k = useSelect({
        options: options,
        value: arrValue,
        onChange: handlerChangeValue,
        optionsRef: dropdownRef,
        controlRef: controlRef,
        scrollToIndex: scrollToIndex,
        disabled: disabled,
        getOptionLabel: getOptionLabel,
        getOptionKey: getOptionKey,
        searchFunction: searchFn,
        getGroupOptions: getGroupOptions,
        multiple: multiple,
        onSelectOption: onSelectOption
    }), visibleOptions = _k.visibleOptions, highlightedIndex = _k.highlightedIndex, getToggleProps = _k.getToggleProps, getOptionProps = _k.getOptionProps, isOpen = _k.isOpen, setOpen = _k.setOpen;
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
    var handleClear = function () {
        setInputData({ value: '' });
        typeof onChange === 'function' && onChange(null);
        setIsFocused(false);
    };
    var handleClearButtonFocus = function () {
        setIsFocused(true);
    };
    var handleClearButtonBlur = function () {
        setIsFocused(false);
    };
    var handleInputChange = function () {
        var _a, _b;
        if (!isOpen) {
            setOpen(true);
        }
        var inputValue = (_b = (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        setInputData({ value: inputValue });
    };
    var handleControlClick = function () {
        var _a;
        (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        if (!isFocused) {
            setOpen(!isOpen);
        }
    };
    var showPlaceholder = (!(arrValue === null || arrValue === void 0 ? void 0 : arrValue.length) && inputData.value === '') || (arrValue === null && inputData.value === '');
    var handleRemoveValue = function (option) {
        var newVal = arrValue === null || arrValue === void 0 ? void 0 : arrValue.filter(function (arrVal) { return getOptionLabel(arrVal) !== getOptionLabel(option); });
        handlerChangeValue(newVal);
    };
    var getInputStyle = function () {
        if (!controlInnerRef.current || !helperInputFakeElement.current) {
            return {
                width: 0
            };
        }
        var fakeElWidth = helperInputFakeElement.current.offsetWidth + 20;
        var maxWidth = controlInnerRef.current ? controlInnerRef.current.offsetWidth - 15 : 0;
        var width = fakeElWidth > maxWidth ? maxWidth : fakeElWidth;
        return {
            width: width
        };
    };
    var renderItemDefault = function (props) {
        var item = props.item, itemId = props.id, active = props.active, hovered = props.hovered, restProps = __rest(props, ["item", "id", "active", "hovered"]);
        var label = getOptionLabel(item);
        var subLabel = getOptionAdditionalInfo ? getOptionAdditionalInfo(item) : '';
        var url = getOptionAvatarUrl ? getOptionAvatarUrl(item) : '';
        var indent = form === 'round' ? 'increased' : 'normal';
        return (React.createElement(UserSelectItem, __assign({ id: itemId, label: label, subLabel: subLabel, url: url, active: active, hovered: hovered, size: size, indent: indent }, restProps)));
    };
    var inputStyle = React.useMemo(function () { return getInputStyle(); }, [inputData.value, arrValue]);
    return (React.createElement(SelectContainer, __assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form, multiple: true }, restProps),
        React.createElement("div", { className: cnSelect('Control', { hasInput: true }), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            React.createElement("div", { className: cnSelect('ControlInner'), onClick: handleControlClick, onKeyDown: handleControlClick, role: "button", ref: controlInnerRef },
                React.createElement("div", { className: cnSelect('ControlValueContainer') },
                    React.createElement("div", { className: cnSelect('ControlValue', { isUserSelect: true }) }, arrValue === null || arrValue === void 0 ? void 0 :
                        arrValue.map(function (option) {
                            var label = getOptionLabel(option);
                            var subLabel = getOptionAdditionalInfo ? getOptionAdditionalInfo(option) : '';
                            var url = getOptionAvatarUrl ? getOptionAvatarUrl(option) : '';
                            var handleRemove = function (e) {
                                e.stopPropagation();
                                handleRemoveValue(option);
                            };
                            return (React.createElement(UserSelectValue, { url: url, label: label, subLabel: subLabel, key: label, size: size, disabled: Boolean(disabled), onCancel: handleRemove }));
                        }),
                        React.createElement("input", __assign({}, getToggleProps({ onChange: handleInputChange }), { type: "text", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, ref: toggleRef, value: inputData.value, className: cnSelect('Input', { size: size }), style: inputStyle })),
                        React.createElement("div", { className: cnSelect('Placeholder', { isHidden: !showPlaceholder }) }, placeholder)))),
            React.createElement("div", { className: cnSelect('Indicators') },
                arrValue && arrValue.length !== 0 && !disabled && (React.createElement("button", { type: "button", onClick: handleClear, className: cnSelect('ClearIndicator', [cnMixFocus()]), onFocus: handleClearButtonFocus, onBlur: handleClearButtonBlur },
                    React.createElement(IconClose, { size: "xs", className: cnSelect('ClearIndicatorIcon') }))),
                React.createElement("div", { className: cnSelect('Delimiter') }),
                React.createElement("button", { type: "button", className: cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    React.createElement(IconSelect, { size: "xs", className: cnSelect('DropdownIndicatorIcon') })))),
        React.createElement(SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, visibleOptions: visibleOptions, highlightedIndex: highlightedIndex, getOptionProps: getOptionProps, dropdownRef: dropdownRef, inputValue: inputData.value, id: id, hasGroup: hasGroup, selectedValues: arrValue, labelForNotFound: labelForNotFound, getOptionKey: getOptionKey, form: getSelectDropdownForm(form), className: dropdownClassName, renderItem: renderItemDefault }),
        React.createElement("div", { className: cnSelect('HelperInputFakeElement'), ref: helperInputFakeElement }, inputData.value)));
};
