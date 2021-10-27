"use strict";
exports.__esModule = true;
exports.Combobox = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var useForkRef_1 = require("../../hooks/useForkRef/useForkRef");
var useSelect_1 = require("../../hooks/useSelectDeprecated/useSelect");
var IconClose_1 = require("../../icons/IconClose/IconClose");
var IconSelect_1 = require("../../icons/IconSelect/IconSelect");
var MixFocus_1 = require("../../mixs/MixFocus/MixFocus");
var scrollIntoView_1 = require("../../utils/scrollIntoView");
var cnSelect_1 = require("../SelectComponentsDeprecated/cnSelect");
var helpers_1 = require("../SelectComponentsDeprecated/helpers");
var SelectContainer_1 = require("../SelectComponentsDeprecated/SelectContainer/SelectContainer");
var SelectDropdown_1 = require("../SelectComponentsDeprecated/SelectDropdown/SelectDropdown");
var SelectItem_1 = require("../SelectComponentsDeprecated/SelectItem/SelectItem");
var types_1 = require("../SelectComponentsDeprecated/types");
exports.Combobox = function (props) {
    var defaultOptionsRef = react_1.useRef(null);
    var getOptionKeyDefault = props.getOptionLabel;
    var placeholder = props.placeholder, onBlur = props.onBlur, onFocus = props.onFocus, options = props.options, onChange = props.onChange, value = props.value, getOptionLabel = props.getOptionLabel, _a = props.getOptionKey, getOptionKey = _a === void 0 ? getOptionKeyDefault : _a, disabled = props.disabled, ariaLabel = props.ariaLabel, id = props.id, _b = props.form, form = _b === void 0 ? types_1.DefaultPropForm : _b, _c = props.view, view = _c === void 0 ? types_1.DefaultPropView : _c, _d = props.size, size = _d === void 0 ? types_1.DefaultPropSize : _d, dropdownClassName = props.dropdownClassName, onCreate = props.onCreate, getGroupOptions = props.getGroupOptions, _e = props.labelForCreate, labelForCreate = _e === void 0 ? 'Добавить' : _e, _f = props.labelForNotFound, labelForNotFound = _f === void 0 ? 'Не найдено' : _f, _g = props.dropdownRef, dropdownRef = _g === void 0 ? defaultOptionsRef : _g, name = props.name, inputRef = props.inputRef, restProps = tslib_1.__rest(props, ["placeholder", "onBlur", "onFocus", "options", "onChange", "value", "getOptionLabel", "getOptionKey", "disabled", "ariaLabel", "id", "form", "view", "size", "dropdownClassName", "onCreate", "getGroupOptions", "labelForCreate", "labelForNotFound", "dropdownRef", "name", "inputRef"]);
    var _h = tslib_1.__read(react_1.useState(false), 2), isFocused = _h[0], setIsFocused = _h[1];
    var _j = tslib_1.__read(react_1.useState({
        value: ''
    }), 2), inputData = _j[0], setInputData = _j[1];
    var toggleRef = react_1.useRef(null);
    var handlerChangeValue = function (v) {
        var _a;
        if (typeof onChange === 'function' && v) {
            onChange(v);
        }
        setInputData({ value: (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.value });
    };
    var controlRef = react_1.useRef(null);
    var arrValue = typeof value !== 'undefined' && value !== null ? [value] : null;
    var hasGroup = typeof getGroupOptions === 'function';
    var scrollToIndex = function (index) {
        if (!dropdownRef.current) {
            return;
        }
        var elements = dropdownRef.current.querySelectorAll('div[role=option]');
        if (index > elements.length - 1 || index < 0) {
            return;
        }
        scrollIntoView_1.scrollIntoView(elements[index], dropdownRef.current);
    };
    var searchFunctionDefault = function (item, searchValue) {
        var searchValueLowerCase = searchValue.toLowerCase();
        return getOptionLabel(item)
            .toLowerCase()
            .includes(searchValueLowerCase);
    };
    var _k = useSelect_1.useSelect({
        options: options,
        value: arrValue,
        onChange: handlerChangeValue,
        optionsRef: dropdownRef,
        controlRef: controlRef,
        scrollToIndex: scrollToIndex,
        disabled: disabled,
        getOptionLabel: getOptionLabel,
        getOptionKey: getOptionKey,
        searchFunction: searchFunctionDefault,
        onCreate: onCreate,
        getGroupOptions: getGroupOptions
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
        typeof onChange === 'function' && onChange(null);
        var inputValue = (_b = (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        setInputData({ value: inputValue });
    };
    var handleControlClick = function () {
        var _a;
        (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var showPlaceholder = (!(arrValue === null || arrValue === void 0 ? void 0 : arrValue.length) && inputData.value === '') || (arrValue === null && inputData.value === '');
    var showInput = arrValue !== null && arrValue.length > 0;
    var handleCreate = function () {
        var _a;
        if (typeof onCreate === 'function') {
            var newValue = (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.value.trim();
            newValue && onCreate(newValue);
        }
    };
    var renderItemDefault = function (props) {
        var item = props.item, itemId = props.id, active = props.active, hovered = props.hovered, restProps = tslib_1.__rest(props, ["item", "id", "active", "hovered"]);
        if (!item) {
            return null;
        }
        var label = getOptionLabel(item);
        var indent = form === 'round' ? 'increased' : 'normal';
        return (react_1["default"].createElement(SelectItem_1.SelectItem, tslib_1.__assign({ id: itemId, label: label, item: item, active: active, hovered: hovered, multiple: false, size: size, indent: indent }, restProps)));
    };
    return (react_1["default"].createElement(SelectContainer_1.SelectContainer, tslib_1.__assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form }, restProps),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Control', { hasInput: true }), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlInner'), onClick: handleControlClick, onKeyDown: handleControlClick, role: "button" },
                react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValueContainer') },
                    arrValue && (react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('ControlValue') }, getOptionLabel(arrValue[0]))),
                    showPlaceholder && react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Placeholder') }, placeholder),
                    react_1["default"].createElement("input", tslib_1.__assign({}, getToggleProps({ onChange: handleInputChange }), { type: "text", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, ref: useForkRef_1.useForkRef([toggleRef, inputRef]), value: inputData.value, className: cnSelect_1.cnSelect('Input', { size: size, hide: showInput }) })))),
            react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Indicators') },
                arrValue && (react_1["default"].createElement("button", { type: "button", onClick: handleClear, className: cnSelect_1.cnSelect('ClearIndicator', [MixFocus_1.cnMixFocus()]), onFocus: handleClearButtonFocus, onBlur: handleClearButtonBlur },
                    react_1["default"].createElement(IconClose_1.IconClose, { size: "xs", className: cnSelect_1.cnSelect('ClearIndicatorIcon') }))),
                react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Delimiter') }),
                react_1["default"].createElement("button", { type: "button", className: cnSelect_1.cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    react_1["default"].createElement(IconSelect_1.IconSelect, { size: "xs", className: cnSelect_1.cnSelect('DropdownIndicatorIcon') })))),
        react_1["default"].createElement(SelectDropdown_1.SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, visibleOptions: visibleOptions, highlightedIndex: highlightedIndex, getOptionProps: getOptionProps, onCreate: handleCreate, dropdownRef: dropdownRef, inputValue: inputData.value, id: id, hasGroup: hasGroup, selectedValues: arrValue, getOptionKey: getOptionKey, labelForCreate: labelForCreate, labelForNotFound: labelForNotFound, form: helpers_1.getSelectDropdownForm(form), className: dropdownClassName, renderItem: renderItemDefault })));
};
