"use strict";
exports.__esModule = true;
exports.SelectDropdown = exports.defaultSelectDropdownPropForm = exports.selectDropdownform = void 0;
var tslib_1 = require("tslib");
require("./SelectDropdown.css");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var useSelect_1 = require("../../../hooks/useSelect/useSelect");
var bem_1 = require("../../../utils/bem");
var cnForCssTransition_1 = require("../../../utils/cnForCssTransition");
var fabricIndex_1 = require("../../../utils/fabricIndex");
var Popover_1 = require("../../Popover/Popover");
var Text_1 = require("../../Text/Text");
var SelectCreateButton_1 = require("../SelectCreateButton/SelectCreateButton");
var SelectGroupLabel_1 = require("../SelectGroupLabel/SelectGroupLabel");
exports.selectDropdownform = ['default', 'brick', 'round'];
exports.defaultSelectDropdownPropForm = exports.selectDropdownform[0];
var cnSelectDropdown = bem_1.cn('SelectDropdown');
var cnSelectDropdownCssTransition = cnForCssTransition_1.cnForCssTransition(cnSelectDropdown);
exports.SelectDropdown = function (props) {
    var controlRef = props.controlRef, size = props.size, getOptionProps = props.getOptionProps, dropdownRef = props.dropdownRef, labelForCreate = props.labelForCreate, className = props.className, labelForNotFound = props.labelForNotFound, form = props.form, isOpen = props.isOpen, renderItem = props.renderItem, visibleItems = props.visibleItems, getGroupLabel = props.getGroupLabel;
    var getIndex = fabricIndex_1.fabricIndex(-1);
    var indent = form === 'round' ? 'increased' : 'normal';
    return (react_1["default"].createElement(react_transition_group_1.CSSTransition, { "in": isOpen, unmountOnExit: true, appear: true, classNames: cnSelectDropdownCssTransition, timeout: 200 },
        react_1["default"].createElement(Popover_1.Popover, { anchorRef: controlRef, direction: "downStartLeft", possibleDirections: ['downStartLeft', 'upStartLeft', 'downStartRight', 'upStartRight'], offset: 1, role: "listbox", className: cnSelectDropdown({ form: form, size: size }, [className]), equalAnchorWidth: true },
            react_1["default"].createElement("div", { className: cnSelectDropdown('List', { size: size, form: form }), ref: dropdownRef },
                visibleItems.map(function (group) {
                    if (useSelect_1.isOptionForCreate(group)) {
                        return (react_1["default"].createElement(SelectCreateButton_1.SelectCreateButton, tslib_1.__assign({ size: size, labelForCreate: labelForCreate, inputValue: group.label, indent: indent }, getOptionProps({ index: getIndex(), item: group }))));
                    }
                    return (react_1["default"].createElement(react_1.Fragment, { key: group.key },
                        group.group && getGroupLabel && (react_1["default"].createElement(SelectGroupLabel_1.SelectGroupLabel, { label: getGroupLabel(group.group), size: size, indent: indent })),
                        group.items.map(function (item, i) {
                            return (react_1["default"].createElement(react_1.Fragment, { key: group.key + "-" + i }, renderItem(tslib_1.__assign({ item: item }, getOptionProps({ index: getIndex(), item: item })))));
                        })));
                }),
                visibleItems.length === 0 && (react_1["default"].createElement(Text_1.Text, { className: cnSelectDropdown('LabelForNotFound') }, labelForNotFound))))));
};
