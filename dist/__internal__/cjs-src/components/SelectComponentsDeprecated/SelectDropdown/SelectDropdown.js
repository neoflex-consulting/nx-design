"use strict";
exports.__esModule = true;
exports.SelectDropdown = exports.defaultSelectDropdownPropForm = exports.selectDropdownform = void 0;
var tslib_1 = require("tslib");
require("./SelectDropdown.css");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var bem_1 = require("../../../utils/bem");
var cnForCssTransition_1 = require("../../../utils/cnForCssTransition");
var Popover_1 = require("../../Popover/Popover");
var Text_1 = require("../../Text/Text");
var SelectCreateButton_1 = require("../SelectCreateButton/SelectCreateButton");
var SelectGroupLabel_1 = require("../SelectGroupLabel/SelectGroupLabel");
exports.selectDropdownform = ['default', 'brick', 'round'];
exports.defaultSelectDropdownPropForm = exports.selectDropdownform[0];
var cnSelectDropdown = bem_1.cn('SelectDropdownDeprecated');
var cnSelectDropdownCssTransition = cnForCssTransition_1.cnForCssTransition(cnSelectDropdown);
exports.SelectDropdown = function (props) {
    var controlRef = props.controlRef, visibleOptions = props.visibleOptions, highlightedIndex = props.highlightedIndex, size = props.size, getOptionProps = props.getOptionProps, inputValue = props.inputValue, dropdownRef = props.dropdownRef, id = props.id, _a = props.hasGroup, hasGroup = _a === void 0 ? false : _a, selectedValues = props.selectedValues, labelForCreate = props.labelForCreate, getOptionKey = props.getOptionKey, className = props.className, labelForNotFound = props.labelForNotFound, _b = props.form, form = _b === void 0 ? exports.defaultSelectDropdownPropForm : _b, isOpen = props.isOpen, renderItem = props.renderItem;
    return (react_1["default"].createElement(react_transition_group_1.CSSTransition, { "in": isOpen, unmountOnExit: true, appear: true, classNames: cnSelectDropdownCssTransition, timeout: 200 },
        react_1["default"].createElement(Popover_1.Popover, { anchorRef: controlRef, direction: "downStartLeft", possibleDirections: ['downStartLeft', 'upStartLeft', 'downStartRight', 'upStartRight'], offset: 1, role: "listbox", className: cnSelectDropdown({ form: form, size: size }, [className]), "aria-activedescendant": id + "-" + highlightedIndex, equalAnchorWidth: true },
            react_1["default"].createElement("div", { className: cnSelectDropdown('List', { size: size, form: form }), ref: dropdownRef }, visibleOptions.length > 0 ? (visibleOptions.map(function (option, index) {
                var isOptionForCreate = 'optionForCreate' in option;
                var currentOption = visibleOptions[index];
                var prevOption = visibleOptions[index - 1];
                var menuOption = isOptionForCreate ? visibleOptions[index + 1] : currentOption;
                var isFirstGroup = hasGroup && !isOptionForCreate && !visibleOptions[index - 1] && index === 0;
                var shouldShowGroupName = isFirstGroup ||
                    (hasGroup && prevOption && currentOption.group !== prevOption.group);
                var active = Boolean(!isOptionForCreate && (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.some(function (val) {
                    return getOptionKey(val) === getOptionKey(menuOption);
                })));
                var indent = form === 'round' ? 'increased' : 'normal';
                return (react_1["default"].createElement(react_1["default"].Fragment, { key: String(getOptionKey(option)) },
                    shouldShowGroupName && (react_1["default"].createElement(SelectGroupLabel_1.SelectGroupLabel, { label: menuOption.group, size: size, indent: indent })),
                    isOptionForCreate ? (react_1["default"].createElement(SelectCreateButton_1.SelectCreateButton, tslib_1.__assign({ size: size, labelForCreate: labelForCreate, inputValue: inputValue, id: id + "-" + index, active: active, hovered: index === highlightedIndex, indent: indent }, getOptionProps({ index: index })))) : (renderItem(tslib_1.__assign({ item: option, id: id + "-" + index, active: active, hovered: index === highlightedIndex }, getOptionProps({ index: index }))))));
            })) : (react_1["default"].createElement(Text_1.Text, { className: cnSelectDropdown('LabelForNotFound') }, labelForNotFound))))));
};
