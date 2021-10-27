"use strict";
exports.__esModule = true;
exports.UserSelect = exports.userSelectPropSizeDefault = exports.userSelectPropSize = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var useSelect_1 = require("../../hooks/useSelectDeprecated/useSelect");
var IconClose_1 = require("../../icons/IconClose/IconClose");
var IconSelect_1 = require("../../icons/IconSelect/IconSelect");
var MixFocus_1 = require("../../mixs/MixFocus/MixFocus");
var scrollIntoView_1 = require("../../utils/scrollIntoView");
var cnSelect_1 = require("../SelectComponentsDeprecated/cnSelect");
var helpers_1 = require("../SelectComponentsDeprecated/helpers");
var SelectContainer_1 = require("../SelectComponentsDeprecated/SelectContainer/SelectContainer");
var SelectDropdown_1 = require("../SelectComponentsDeprecated/SelectDropdown/SelectDropdown");
var types_1 = require("../SelectComponentsDeprecated/types");
var UserSelectItem_1 = require("./UserSelectItem/UserSelectItem");
var UserSelectValue_1 = require("./UserSelectValue/UserSelectValue");
exports.userSelectPropSize = ['m', 's', 'l'];
exports.userSelectPropSizeDefault = exports.userSelectPropSize[0];
exports.UserSelect = function (props) {
    var defaultOptionsRef = react_1.useRef(null);
    var getOptionKeyDefault = props.getOptionLabel;
    var placeholder = props.placeholder, onBlur = props.onBlur, onFocus = props.onFocus, options = props.options, onChange = props.onChange, value = props.value, getOptionLabel = props.getOptionLabel, _a = props.getOptionKey, getOptionKey = _a === void 0 ? getOptionKeyDefault : _a, getOptionAdditionalInfo = props.getOptionAdditionalInfo, getOptionAvatarUrl = props.getOptionAvatarUrl, searchFunction = props.searchFunction, disabled = props.disabled, ariaLabel = props.ariaLabel, id = props.id, _b = props.form, form = _b === void 0 ? types_1.DefaultPropForm : _b, _c = props.view, view = _c === void 0 ? types_1.DefaultPropView : _c, _d = props.size, size = _d === void 0 ? exports.userSelectPropSizeDefault : _d, getGroupOptions = props.getGroupOptions, _e = props.labelForNotFound, labelForNotFound = _e === void 0 ? 'Не найдено' : _e, dropdownClassName = props.dropdownClassName, _f = props.dropdownRef, dropdownRef = _f === void 0 ? defaultOptionsRef : _f, name = props.name, _g = props.multiple, multiple = _g === void 0 ? false : _g, restProps = tslib_1.__rest(props, ["placeholder", "onBlur", "onFocus", "options", "onChange", "value", "getOptionLabel", "getOptionKey", "getOptionAdditionalInfo", "getOptionAvatarUrl", "searchFunction", "disabled", "ariaLabel", "id", "form", "view", "size", "getGroupOptions", "labelForNotFound", "dropdownClassName", "dropdownRef", "name", "multiple"]);
    var _h = tslib_1.__read(react_1.useState(false), 2), isFocused = _h[0], setIsFocused = _h[1];
    var _j = tslib_1.__read(react_1.useState({
        value: ''
    }), 2), inputData = _j[0], setInputData = _j[1];
    var toggleRef = react_1.useRef(null);
    var controlInnerRef = react_1.useRef(null);
    var helperInputFakeElement = react_1.useRef(null);
    var handlerChangeValue = function (values) {
        var _a;
        if (typeof onChange === 'function' && values) {
            onChange(values);
        }
        setInputData({ value: (_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.value });
    };
    var controlRef = react_1.useRef(null);
    var arrValue = typeof value !== 'undefined' && value !== null ? tslib_1.__spread(value) : null;
    var hasGroup = typeof getGroupOptions === 'function';
    var scrollToIndex = function (index) {
        if (!dropdownRef.current) {
            return;
        }
        var elements = dropdownRef.current.querySelectorAll('div[role=option]');
        scrollIntoView_1.scrollIntoView(elements[index], dropdownRef.current);
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
        var item = props.item, itemId = props.id, active = props.active, hovered = props.hovered, restProps = tslib_1.__rest(props, ["item", "id", "active", "hovered"]);
        var label = getOptionLabel(item);
        var subLabel = getOptionAdditionalInfo ? getOptionAdditionalInfo(item) : '';
        var url = getOptionAvatarUrl ? getOptionAvatarUrl(item) : '';
        var indent = form === 'round' ? 'increased' : 'normal';
        return (react_1["default"].createElement(UserSelectItem_1.UserSelectItem, tslib_1.__assign({ id: itemId, label: label, subLabel: subLabel, url: url, active: active, hovered: hovered, size: size, indent: indent }, restProps)));
    };
    var inputStyle = react_1["default"].useMemo(function () { return getInputStyle(); }, [inputData.value, arrValue]);
    return (react_1["default"].createElement(SelectContainer_1.SelectContainer, tslib_1.__assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form, multiple: true }, restProps),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Control', { hasInput: true }), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlInner'), onClick: handleControlClick, onKeyDown: handleControlClick, role: "button", ref: controlInnerRef },
                react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValueContainer') },
                    react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValue', { isUserSelect: true }) }, arrValue === null || arrValue === void 0 ? void 0 :
                        arrValue.map(function (option) {
                            var label = getOptionLabel(option);
                            var subLabel = getOptionAdditionalInfo ? getOptionAdditionalInfo(option) : '';
                            var url = getOptionAvatarUrl ? getOptionAvatarUrl(option) : '';
                            var handleRemove = function (e) {
                                e.stopPropagation();
                                handleRemoveValue(option);
                            };
                            return (react_1["default"].createElement(UserSelectValue_1.UserSelectValue, { url: url, label: label, subLabel: subLabel, key: label, size: size, disabled: Boolean(disabled), onCancel: handleRemove }));
                        }),
                        react_1["default"].createElement("input", tslib_1.__assign({}, getToggleProps({ onChange: handleInputChange }), { type: "text", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, ref: toggleRef, value: inputData.value, className: cnSelect_1.cnSelect('Input', { size: size }), style: inputStyle })),
                        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Placeholder', { isHidden: !showPlaceholder }) }, placeholder)))),
            react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Indicators') },
                arrValue && arrValue.length !== 0 && !disabled && (react_1["default"].createElement("button", { type: "button", onClick: handleClear, className: cnSelect_1.cnSelect('ClearIndicator', [MixFocus_1.cnMixFocus()]), onFocus: handleClearButtonFocus, onBlur: handleClearButtonBlur },
                    react_1["default"].createElement(IconClose_1.IconClose, { size: "xs", className: cnSelect_1.cnSelect('ClearIndicatorIcon') }))),
                react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Delimiter') }),
                react_1["default"].createElement("button", { type: "button", className: cnSelect_1.cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    react_1["default"].createElement(IconSelect_1.IconSelect, { size: "xs", className: cnSelect_1.cnSelect('DropdownIndicatorIcon') })))),
        react_1["default"].createElement(SelectDropdown_1.SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, visibleOptions: visibleOptions, highlightedIndex: highlightedIndex, getOptionProps: getOptionProps, dropdownRef: dropdownRef, inputValue: inputData.value, id: id, hasGroup: hasGroup, selectedValues: arrValue, labelForNotFound: labelForNotFound, getOptionKey: getOptionKey, form: helpers_1.getSelectDropdownForm(form), className: dropdownClassName, renderItem: renderItemDefault }),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('HelperInputFakeElement'), ref: helperInputFakeElement }, inputData.value)));
};
