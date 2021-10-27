"use strict";
exports.__esModule = true;
exports.BasicSelect = void 0;
var tslib_1 = require("tslib");
require("../SelectComponentsDeprecated/Select.css");
var react_1 = tslib_1.__importStar(require("react"));
var useSelect_1 = require("../../hooks/useSelectDeprecated/useSelect");
var IconSelect_1 = require("../../icons/IconSelect/IconSelect");
var scrollIntoView_1 = require("../../utils/scrollIntoView");
var usePropsHandler_1 = require("../EventInterceptor/usePropsHandler");
var cnSelect_1 = require("../SelectComponentsDeprecated/cnSelect");
var helpers_1 = require("../SelectComponentsDeprecated/helpers");
var SelectContainer_1 = require("../SelectComponentsDeprecated/SelectContainer/SelectContainer");
var SelectDropdown_1 = require("../SelectComponentsDeprecated/SelectDropdown/SelectDropdown");
var SelectItem_1 = require("../SelectComponentsDeprecated/SelectItem/SelectItem");
var types_1 = require("../SelectComponentsDeprecated/types");
exports.BasicSelect = function (props) {
    var defaultOptionsRef = react_1.useRef(null);
    var controlRef = react_1.useRef(null);
    var getOptionKeyDefault = props.getOptionLabel;
    var _a = usePropsHandler_1.usePropsHandler(cnSelect_1.cnSelect(), props, controlRef), placeholder = _a.placeholder, onBlur = _a.onBlur, onFocus = _a.onFocus, options = _a.options, onChange = _a.onChange, value = _a.value, getOptionLabel = _a.getOptionLabel, _b = _a.getOptionKey, getOptionKey = _b === void 0 ? getOptionKeyDefault : _b, disabled = _a.disabled, ariaLabel = _a.ariaLabel, id = _a.id, _c = _a.dropdownRef, dropdownRef = _c === void 0 ? defaultOptionsRef : _c, _d = _a.form, form = _d === void 0 ? types_1.DefaultPropForm : _d, _e = _a.view, view = _e === void 0 ? types_1.DefaultPropView : _e, _f = _a.size, size = _f === void 0 ? types_1.DefaultPropSize : _f, dropdownClassName = _a.dropdownClassName, name = _a.name, restProps = tslib_1.__rest(_a, ["placeholder", "onBlur", "onFocus", "options", "onChange", "value", "getOptionLabel", "getOptionKey", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name"]);
    var toggleRef = react_1.useRef(null);
    var _g = tslib_1.__read(react_1.useState(false), 2), isFocused = _g[0], setIsFocused = _g[1];
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
        scrollIntoView_1.scrollIntoView(elements[index], dropdownRef.current);
    };
    var searchFunctionDefault = function (item, searchValue) {
        var searchValueLowerCase = searchValue.toLowerCase();
        return getOptionLabel(item)
            .toLowerCase()
            .includes(searchValueLowerCase);
    };
    var _h = useSelect_1.useSelect({
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
        var item = props.item, itemId = props.id, active = props.active, hovered = props.hovered, restProps = tslib_1.__rest(props, ["item", "id", "active", "hovered"]);
        if (!item) {
            return null;
        }
        var label = getOptionLabel(item);
        var indent = form === 'round' ? 'increased' : 'normal';
        return (react_1["default"].createElement(SelectItem_1.SelectItem, tslib_1.__assign({ id: itemId, label: label, item: item, active: active, hovered: hovered, multiple: false, size: size, indent: indent }, restProps)));
    };
    return (react_1["default"].createElement(SelectContainer_1.SelectContainer, tslib_1.__assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form }, restProps),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Control'), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlInner') },
                react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValueContainer') },
                    react_1["default"].createElement("input", tslib_1.__assign({}, getToggleProps(), { type: "button", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, ref: toggleRef, className: cnSelect_1.cnSelect('FakeField'), readOnly: true })),
                    arrValue ? (react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('ControlValue'), title: getOptionLabel(arrValue[0]) }, getOptionLabel(arrValue[0]))) : (react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Placeholder'), title: "placeholder" }, placeholder || '')))),
            react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Indicators') },
                react_1["default"].createElement("button", { type: "button", className: cnSelect_1.cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    react_1["default"].createElement(IconSelect_1.IconSelect, { size: "xs", className: cnSelect_1.cnSelect('DropdownIndicatorIcon') })))),
        react_1["default"].createElement(SelectDropdown_1.SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, visibleOptions: visibleOptions, highlightedIndex: highlightedIndex, getOptionProps: getOptionProps, dropdownRef: dropdownRef, id: id, selectedValues: arrValue, getOptionKey: getOptionKey, form: helpers_1.getSelectDropdownForm(form), className: dropdownClassName, renderItem: renderItemDefault })));
};
