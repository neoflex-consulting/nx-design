"use strict";
exports.__esModule = true;
exports.UserSelect = void 0;
var tslib_1 = require("tslib");
require("../SelectComponents/Select.css");
var react_1 = tslib_1.__importStar(require("react"));
var useForkRef_1 = require("../../hooks/useForkRef/useForkRef");
var useSelect_1 = require("../../hooks/useSelect/useSelect");
var IconClose_1 = require("../../icons/IconClose/IconClose");
var IconSelect_1 = require("../../icons/IconSelect/IconSelect");
var MixFocus_1 = require("../../mixs/MixFocus/MixFocus");
var cnSelect_1 = require("../SelectComponents/cnSelect");
var helpers_1 = require("../SelectComponents/helpers");
var SelectContainer_1 = require("../SelectComponents/SelectContainer/SelectContainer");
var SelectDropdown_1 = require("../SelectComponents/SelectDropdown/SelectDropdown");
var types_1 = require("../SelectComponents/types");
var UserSelectItem_1 = require("./UserSelectItem/UserSelectItem");
var UserSelectValue_1 = require("./UserSelectValue/UserSelectValue");
var helpers_2 = require("./helpers");
function UserSelectRender(props, ref) {
    var defaultDropdownRef = react_1.useRef(null);
    var controlInnerRef = react_1.useRef(null);
    var helperInputFakeElement = react_1.useRef(null);
    var controlRef = react_1.useRef(null);
    var _a = helpers_2.withDefaultGetters(props), placeholder = _a.placeholder, onBlur = _a.onBlur, onFocus = _a.onFocus, items = _a.items, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, ariaLabel = _a.ariaLabel, id = _a.id, _b = _a.dropdownRef, dropdownRef = _b === void 0 ? defaultDropdownRef : _b, _c = _a.form, form = _c === void 0 ? types_1.defaultPropForm : _c, _d = _a.view, view = _d === void 0 ? types_1.defaultPropView : _d, _e = _a.size, size = _e === void 0 ? types_1.defaultPropSize : _e, dropdownClassName = _a.dropdownClassName, name = _a.name, _f = _a.groups, groups = _f === void 0 ? [] : _f, getItemKey = _a.getItemKey, getItemLabel = _a.getItemLabel, getItemSubLabel = _a.getItemSubLabel, getItemAvatarUrl = _a.getItemAvatarUrl, getItemGroupKey = _a.getItemGroupKey, getItemDisabled = _a.getItemDisabled, getGroupKey = _a.getGroupKey, getGroupLabel = _a.getGroupLabel, renderItem = _a.renderItem, renderValueProp = _a.renderValue, onCreate = _a.onCreate, inputRefProp = _a.inputRef, _g = _a.labelForNotFound, labelForNotFound = _g === void 0 ? helpers_1.defaultlabelForNotFound : _g, _h = _a.labelForCreate, labelForCreate = _h === void 0 ? helpers_1.defaultlabelForCreate : _h, _j = _a.multiple, multiple = _j === void 0 ? false : _j, searchFunction = _a.searchFunction, restProps = tslib_1.__rest(_a, ["placeholder", "onBlur", "onFocus", "items", "onChange", "value", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name", "groups", "getItemKey", "getItemLabel", "getItemSubLabel", "getItemAvatarUrl", "getItemGroupKey", "getItemDisabled", "getGroupKey", "getGroupLabel", "renderItem", "renderValue", "onCreate", "inputRef", "labelForNotFound", "labelForCreate", "multiple", "searchFunction"]);
    var searchFunctionDefault = function (item, searchValue) {
        var searchOfLabel = helpers_2.searchCompare(searchValue, getItemLabel(item));
        if (searchOfLabel) {
            return searchOfLabel;
        }
        return helpers_2.searchCompare(searchValue, getItemSubLabel(item));
    };
    var _k = useSelect_1.useSelect({
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
    var dropdownForm = helpers_1.getSelectDropdownForm(form);
    var renderItemDefault = function (props) {
        var item = props.item, active = props.active, hovered = props.hovered, onClick = props.onClick, onMouseEnter = props.onMouseEnter;
        return (react_1["default"].createElement(UserSelectItem_1.UserSelectItem, { label: getItemLabel(item), subLabel: getItemSubLabel(item), avatarUrl: getItemAvatarUrl(item), active: active, hovered: hovered, size: size, indent: dropdownForm === 'round' ? 'increased' : 'normal', onClick: onClick, onMouseEnter: onMouseEnter, disable: getItemDisabled(item), multiple: multiple }));
    };
    var renderValueDefault = function (_a) {
        var item = _a.item, handleRemove = _a.handleRemove;
        return (react_1["default"].createElement(UserSelectValue_1.UserSelectValue, { label: getItemLabel(item), subLabel: getItemSubLabel(item), avatarUrl: getItemAvatarUrl(item), key: getItemKey(item), size: size, handleRemove: handleRemove, multiple: multiple, disabled: disabled }));
    };
    var renderValue = renderValueProp || renderValueDefault;
    var inputRefForRender = useForkRef_1.useForkRef([inputRef, inputRefProp]);
    var renderControlValue = function () {
        var width = multiple ? helpers_1.getInputWidth(controlInnerRef, helperInputFakeElement) : undefined;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            helpers_2.isMultipleParams(props) &&
                Array.isArray(props.value) &&
                props.value.map(function (item) {
                    return renderValue({ item: item, handleRemove: getHandleRemoveValue(item) });
                }),
            helpers_2.isNotMultipleParams(props) && props.value && renderValue({ item: props.value }),
            (!value || (Array.isArray(value) && value.length === 0)) && !searchValue && placeholder && (react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Placeholder'), title: "placeholder" }, placeholder)),
            react_1["default"].createElement("input", tslib_1.__assign({}, getKeyProps(), { type: "text", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, onChange: handleInputChange, ref: inputRefForRender, className: cnSelect_1.cnSelect('Input', {
                    size: size,
                    hide: !multiple && !!value,
                    multiple: multiple,
                    isUserSelect: true
                }), value: searchValue, style: { width: width } }))));
    };
    return (react_1["default"].createElement(SelectContainer_1.SelectContainer, tslib_1.__assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form, multiple: true, ref: ref }, restProps),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Control', { hasInput: true }), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlInner'), onClick: handleInputClick, role: "button", ref: controlInnerRef, "aria-hidden": "true" },
                react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValueContainer') }, multiple ? (react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValue', { isUserSelect: true }) }, renderControlValue())) : (renderControlValue()))),
            react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Indicators') },
                value && (react_1["default"].createElement("button", { type: "button", onClick: clearValue, className: cnSelect_1.cnSelect('ClearIndicator', [MixFocus_1.cnMixFocus()]) },
                    react_1["default"].createElement(IconClose_1.IconClose, { size: "xs", className: cnSelect_1.cnSelect('ClearIndicatorIcon') }))),
                react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Delimiter') }),
                react_1["default"].createElement("button", { type: "button", className: cnSelect_1.cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    react_1["default"].createElement(IconSelect_1.IconSelect, { size: "xs", className: cnSelect_1.cnSelect('DropdownIndicatorIcon') })))),
        react_1["default"].createElement(SelectDropdown_1.SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, getOptionProps: getOptionProps, dropdownRef: dropdownRef, form: dropdownForm, className: dropdownClassName, renderItem: renderItem || renderItemDefault, getGroupLabel: getGroupLabel, visibleItems: visibleItems, labelForNotFound: labelForNotFound, labelForCreate: labelForCreate }),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('HelperInputFakeElement'), ref: helperInputFakeElement }, searchValue)));
}
exports.UserSelect = react_1.forwardRef(UserSelectRender);
tslib_1.__exportStar(require("./helpers"), exports);
