"use strict";
exports.__esModule = true;
exports.Combobox = void 0;
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
var SelectItem_1 = require("../SelectComponents/SelectItem/SelectItem");
var SelectValueTag_1 = require("../SelectComponents/SelectValueTag/SelectValueTag");
var types_1 = require("../SelectComponents/types");
var helpers_2 = require("./helpers");
function ComboboxRender(props, ref) {
    var defaultDropdownRef = react_1.useRef(null);
    var controlInnerRef = react_1.useRef(null);
    var helperInputFakeElement = react_1.useRef(null);
    var controlRef = react_1.useRef(null);
    var _a = helpers_2.withDefaultGetters(props), placeholder = _a.placeholder, onBlur = _a.onBlur, onFocus = _a.onFocus, items = _a.items, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, ariaLabel = _a.ariaLabel, id = _a.id, _b = _a.dropdownRef, dropdownRef = _b === void 0 ? defaultDropdownRef : _b, _c = _a.form, form = _c === void 0 ? types_1.defaultPropForm : _c, _d = _a.view, view = _d === void 0 ? types_1.defaultPropView : _d, _e = _a.size, size = _e === void 0 ? types_1.defaultPropSize : _e, dropdownClassName = _a.dropdownClassName, name = _a.name, _f = _a.groups, groups = _f === void 0 ? [] : _f, getItemLabel = _a.getItemLabel, getItemKey = _a.getItemKey, getItemGroupKey = _a.getItemGroupKey, getItemDisabled = _a.getItemDisabled, getGroupKey = _a.getGroupKey, getGroupLabel = _a.getGroupLabel, renderItem = _a.renderItem, renderValueProp = _a.renderValue, onCreate = _a.onCreate, inputRefProp = _a.inputRef, _g = _a.labelForNotFound, labelForNotFound = _g === void 0 ? helpers_1.defaultlabelForNotFound : _g, _h = _a.labelForCreate, labelForCreate = _h === void 0 ? helpers_1.defaultlabelForCreate : _h, searchFunction = _a.searchFunction, _j = _a.multiple, multiple = _j === void 0 ? false : _j, restProps = tslib_1.__rest(_a, ["placeholder", "onBlur", "onFocus", "items", "onChange", "value", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name", "groups", "getItemLabel", "getItemKey", "getItemGroupKey", "getItemDisabled", "getGroupKey", "getGroupLabel", "renderItem", "renderValue", "onCreate", "inputRef", "labelForNotFound", "labelForCreate", "searchFunction", "multiple"]);
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
        searchFunction: searchFunction
    }), getKeyProps = _k.getKeyProps, getOptionProps = _k.getOptionProps, isOpen = _k.isOpen, visibleItems = _k.visibleItems, isFocused = _k.isFocused, handleInputFocus = _k.handleInputFocus, handleInputBlur = _k.handleInputBlur, handleToggleDropdown = _k.handleToggleDropdown, inputRef = _k.inputRef, handleInputClick = _k.handleInputClick, handleInputChange = _k.handleInputChange, searchValue = _k.searchValue, clearValue = _k.clearValue, getHandleRemoveValue = _k.getHandleRemoveValue;
    var dropdownForm = helpers_1.getSelectDropdownForm(form);
    var renderItemDefault = function (props) {
        var item = props.item, active = props.active, hovered = props.hovered, onClick = props.onClick, onMouseEnter = props.onMouseEnter;
        return (react_1["default"].createElement(SelectItem_1.SelectItem, { label: getItemLabel(item), active: active, hovered: hovered, multiple: multiple, size: size, indent: dropdownForm === 'round' ? 'increased' : 'normal', onClick: onClick, onMouseEnter: onMouseEnter, disabled: getItemDisabled(item) }));
    };
    var renderValueDefaultMultiple = function (_a) {
        var item = _a.item, handleRemove = _a.handleRemove;
        return (react_1["default"].createElement(SelectValueTag_1.SelectValueTag, { label: getItemLabel(item), key: getItemKey(item), size: size, handleRemove: disabled ? undefined : handleRemove }));
    };
    var renderValueDefaultNotMultiple = function (props) {
        var valueLable = getItemLabel(props.item);
        return (react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('ControlValue'), title: valueLable }, valueLable));
    };
    var renderValue = renderValueProp || (multiple ? renderValueDefaultMultiple : renderValueDefaultNotMultiple);
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
            react_1["default"].createElement("input", tslib_1.__assign({}, getKeyProps(), { type: "text", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, onChange: handleInputChange, ref: inputRefForRender, className: cnSelect_1.cnSelect('Input', { size: size, hide: !multiple && !!value, multiple: multiple }), value: searchValue, style: { width: width } }))));
    };
    return (react_1["default"].createElement(SelectContainer_1.SelectContainer, tslib_1.__assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form, multiple: multiple, ref: ref }, restProps),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Control', { hasInput: true }), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlInner'), onClick: handleInputClick, role: "button", ref: controlInnerRef, "aria-hidden": "true" },
                react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValueContainer') }, multiple ? (react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValue') }, renderControlValue())) : (renderControlValue()))),
            react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Indicators') },
                value && (react_1["default"].createElement("button", { type: "button", onClick: clearValue, className: cnSelect_1.cnSelect('ClearIndicator', [MixFocus_1.cnMixFocus()]) },
                    react_1["default"].createElement(IconClose_1.IconClose, { size: "xs", className: cnSelect_1.cnSelect('ClearIndicatorIcon') }))),
                react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Delimiter') }),
                react_1["default"].createElement("button", { type: "button", className: cnSelect_1.cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    react_1["default"].createElement(IconSelect_1.IconSelect, { size: "xs", className: cnSelect_1.cnSelect('DropdownIndicatorIcon') })))),
        react_1["default"].createElement(SelectDropdown_1.SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, getOptionProps: getOptionProps, dropdownRef: dropdownRef, form: dropdownForm, className: dropdownClassName, renderItem: renderItem || renderItemDefault, getGroupLabel: getGroupLabel, visibleItems: visibleItems, labelForNotFound: labelForNotFound, labelForCreate: labelForCreate }),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('HelperInputFakeElement'), ref: helperInputFakeElement }, searchValue)));
}
exports.Combobox = react_1.forwardRef(ComboboxRender);
tslib_1.__exportStar(require("./helpers"), exports);
