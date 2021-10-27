import { __assign } from "tslib";
import './SelectDropdown.css';
import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { isOptionForCreate, } from '../../../hooks/useSelect/useSelect';
import { cn } from '../../../utils/bem';
import { cnForCssTransition } from '../../../utils/cnForCssTransition';
import { fabricIndex } from '../../../utils/fabricIndex';
import { Popover } from '../../Popover/Popover';
import { Text } from '../../Text/Text';
import { SelectCreateButton } from '../SelectCreateButton/SelectCreateButton';
import { SelectGroupLabel } from '../SelectGroupLabel/SelectGroupLabel';
export var selectDropdownform = ['default', 'brick', 'round'];
export var defaultSelectDropdownPropForm = selectDropdownform[0];
var cnSelectDropdown = cn('SelectDropdown');
var cnSelectDropdownCssTransition = cnForCssTransition(cnSelectDropdown);
export var SelectDropdown = function (props) {
    var controlRef = props.controlRef, size = props.size, getOptionProps = props.getOptionProps, dropdownRef = props.dropdownRef, labelForCreate = props.labelForCreate, className = props.className, labelForNotFound = props.labelForNotFound, form = props.form, isOpen = props.isOpen, renderItem = props.renderItem, visibleItems = props.visibleItems, getGroupLabel = props.getGroupLabel;
    var getIndex = fabricIndex(-1);
    var indent = form === 'round' ? 'increased' : 'normal';
    return (React.createElement(CSSTransition, { "in": isOpen, unmountOnExit: true, appear: true, classNames: cnSelectDropdownCssTransition, timeout: 200 },
        React.createElement(Popover, { anchorRef: controlRef, direction: "downStartLeft", possibleDirections: ['downStartLeft', 'upStartLeft', 'downStartRight', 'upStartRight'], offset: 1, role: "listbox", className: cnSelectDropdown({ form: form, size: size }, [className]), equalAnchorWidth: true },
            React.createElement("div", { className: cnSelectDropdown('List', { size: size, form: form }), ref: dropdownRef },
                visibleItems.map(function (group) {
                    if (isOptionForCreate(group)) {
                        return (React.createElement(SelectCreateButton, __assign({ size: size, labelForCreate: labelForCreate, inputValue: group.label, indent: indent }, getOptionProps({ index: getIndex(), item: group }))));
                    }
                    return (React.createElement(Fragment, { key: group.key },
                        group.group && getGroupLabel && (React.createElement(SelectGroupLabel, { label: getGroupLabel(group.group), size: size, indent: indent })),
                        group.items.map(function (item, i) {
                            return (React.createElement(Fragment, { key: group.key + "-" + i }, renderItem(__assign({ item: item }, getOptionProps({ index: getIndex(), item: item })))));
                        })));
                }),
                visibleItems.length === 0 && (React.createElement(Text, { className: cnSelectDropdown('LabelForNotFound') }, labelForNotFound))))));
};
