"use strict";
exports.__esModule = true;
exports.Select = void 0;
var tslib_1 = require("tslib");
require("../SelectComponents/Select.css");
var react_1 = tslib_1.__importStar(require("react"));
var useForkRef_1 = require("../../hooks/useForkRef/useForkRef");
var useSelect_1 = require("../../hooks/useSelect/useSelect");
var IconSelect_1 = require("../../icons/IconSelect/IconSelect");
var usePropsHandler_1 = require("../EventInterceptor/usePropsHandler");
var cnSelect_1 = require("../SelectComponents/cnSelect");
var helpers_1 = require("../SelectComponents/helpers");
var SelectContainer_1 = require("../SelectComponents/SelectContainer/SelectContainer");
var SelectDropdown_1 = require("../SelectComponents/SelectDropdown/SelectDropdown");
var SelectItem_1 = require("../SelectComponents/SelectItem/SelectItem");
var types_1 = require("../SelectComponents/types");
var helpers_2 = require("./helpers");
function SelectRender(props, ref) {
    var defaultDropdownRef = react_1.useRef(null);
    var controlRef = react_1.useRef(null);
    var _a = usePropsHandler_1.usePropsHandler('Select', helpers_2.withDefaultGetters(props), controlRef), placeholder = _a.placeholder, onBlur = _a.onBlur, onFocus = _a.onFocus, items = _a.items, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, ariaLabel = _a.ariaLabel, id = _a.id, _b = _a.dropdownRef, dropdownRef = _b === void 0 ? defaultDropdownRef : _b, _c = _a.form, form = _c === void 0 ? types_1.defaultPropForm : _c, _d = _a.view, view = _d === void 0 ? types_1.defaultPropView : _d, _e = _a.size, size = _e === void 0 ? types_1.defaultPropSize : _e, dropdownClassName = _a.dropdownClassName, name = _a.name, _f = _a.groups, groups = _f === void 0 ? [] : _f, getItemLabel = _a.getItemLabel, getItemKey = _a.getItemKey, getItemGroupKey = _a.getItemGroupKey, getItemDisabled = _a.getItemDisabled, getGroupKey = _a.getGroupKey, getGroupLabel = _a.getGroupLabel, renderItem = _a.renderItem, renderValueProp = _a.renderValue, inputRefProp = _a.inputRef, restProps = tslib_1.__rest(_a, ["placeholder", "onBlur", "onFocus", "items", "onChange", "value", "disabled", "ariaLabel", "id", "dropdownRef", "form", "view", "size", "dropdownClassName", "name", "groups", "getItemLabel", "getItemKey", "getItemGroupKey", "getItemDisabled", "getGroupKey", "getGroupLabel", "renderItem", "renderValue", "inputRef"]);
    var _g = useSelect_1.useSelect({
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
    var dropdownForm = helpers_1.getSelectDropdownForm(form);
    var renderItemDefault = function (props) {
        var item = props.item, active = props.active, hovered = props.hovered, onClick = props.onClick, onMouseEnter = props.onMouseEnter;
        return (react_1["default"].createElement(SelectItem_1.SelectItem, { label: getItemLabel(item), active: active, hovered: hovered, multiple: false, size: size, indent: dropdownForm === 'round' ? 'increased' : 'normal', onClick: onClick, onMouseEnter: onMouseEnter, disabled: getItemDisabled(item) }));
    };
    var renderValueDefault = function (props) {
        var label = getItemLabel(props.item);
        return (react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('ControlValue'), title: label }, label));
    };
    var renderValue = renderValueProp || renderValueDefault;
    return (react_1["default"].createElement(SelectContainer_1.SelectContainer, tslib_1.__assign({ focused: isFocused, disabled: disabled, size: size, view: view, form: form, ref: ref }, restProps),
        react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('Control'), ref: controlRef, "aria-expanded": isOpen, "aria-haspopup": "listbox", id: id },
            react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlInner') },
                react_1["default"].createElement("div", { className: cnSelect_1.cnSelect('ControlValueContainer') },
                    react_1["default"].createElement("input", tslib_1.__assign({}, getKeyProps(), { type: "button", name: name, onFocus: handleInputFocus, onBlur: handleInputBlur, "aria-label": ariaLabel, onClick: handleInputClick, ref: useForkRef_1.useForkRef([inputRef, inputRefProp]), className: cnSelect_1.cnSelect('FakeField'), readOnly: true })),
                    value && renderValue({ item: value }),
                    !value && placeholder && (react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Placeholder'), title: "placeholder" }, placeholder)))),
            react_1["default"].createElement("span", { className: cnSelect_1.cnSelect('Indicators') },
                react_1["default"].createElement("button", { type: "button", className: cnSelect_1.cnSelect('IndicatorsDropdown'), tabIndex: -1, onClick: handleToggleDropdown },
                    react_1["default"].createElement(IconSelect_1.IconSelect, { size: "xs", className: cnSelect_1.cnSelect('DropdownIndicatorIcon') })))),
        react_1["default"].createElement(SelectDropdown_1.SelectDropdown, { isOpen: isOpen, size: size, controlRef: controlRef, getOptionProps: getOptionProps, dropdownRef: dropdownRef, form: dropdownForm, className: dropdownClassName, renderItem: renderItem || renderItemDefault, getGroupLabel: getGroupLabel, visibleItems: visibleItems })));
}
exports.Select = react_1.forwardRef(SelectRender);
tslib_1.__exportStar(require("./helpers"), exports);
