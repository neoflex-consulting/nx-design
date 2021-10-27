import { __assign } from "tslib";
import './SelectDropdown.css';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { cn } from '../../../utils/bem';
import { cnForCssTransition } from '../../../utils/cnForCssTransition';
import { Popover } from '../../Popover/Popover';
import { Text } from '../../Text/Text';
import { SelectCreateButton } from '../SelectCreateButton/SelectCreateButton';
import { SelectGroupLabel } from '../SelectGroupLabel/SelectGroupLabel';
export var selectDropdownform = ['default', 'brick', 'round'];
export var defaultSelectDropdownPropForm = selectDropdownform[0];
var cnSelectDropdown = cn('SelectDropdownDeprecated');
var cnSelectDropdownCssTransition = cnForCssTransition(cnSelectDropdown);
export var SelectDropdown = function (props) {
    var controlRef = props.controlRef, visibleOptions = props.visibleOptions, highlightedIndex = props.highlightedIndex, size = props.size, getOptionProps = props.getOptionProps, inputValue = props.inputValue, dropdownRef = props.dropdownRef, id = props.id, _a = props.hasGroup, hasGroup = _a === void 0 ? false : _a, selectedValues = props.selectedValues, labelForCreate = props.labelForCreate, getOptionKey = props.getOptionKey, className = props.className, labelForNotFound = props.labelForNotFound, _b = props.form, form = _b === void 0 ? defaultSelectDropdownPropForm : _b, isOpen = props.isOpen, renderItem = props.renderItem;
    return (React.createElement(CSSTransition, { "in": isOpen, unmountOnExit: true, appear: true, classNames: cnSelectDropdownCssTransition, timeout: 200 },
        React.createElement(Popover, { anchorRef: controlRef, direction: "downStartLeft", possibleDirections: ['downStartLeft', 'upStartLeft', 'downStartRight', 'upStartRight'], offset: 1, role: "listbox", className: cnSelectDropdown({ form: form, size: size }, [className]), "aria-activedescendant": id + "-" + highlightedIndex, equalAnchorWidth: true },
            React.createElement("div", { className: cnSelectDropdown('List', { size: size, form: form }), ref: dropdownRef }, visibleOptions.length > 0 ? (visibleOptions.map(function (option, index) {
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
                return (React.createElement(React.Fragment, { key: String(getOptionKey(option)) },
                    shouldShowGroupName && (React.createElement(SelectGroupLabel, { label: menuOption.group, size: size, indent: indent })),
                    isOptionForCreate ? (React.createElement(SelectCreateButton, __assign({ size: size, labelForCreate: labelForCreate, inputValue: inputValue, id: id + "-" + index, active: active, hovered: index === highlightedIndex, indent: indent }, getOptionProps({ index: index })))) : (renderItem(__assign({ item: option, id: id + "-" + index, active: active, hovered: index === highlightedIndex }, getOptionProps({ index: index }))))));
            })) : (React.createElement(Text, { className: cnSelectDropdown('LabelForNotFound') }, labelForNotFound))))));
};
