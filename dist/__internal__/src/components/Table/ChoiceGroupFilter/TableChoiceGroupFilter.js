import { __read, __spread } from "tslib";
import './TableChoiceGroupFilter.css';
import React, { useMemo, useState } from 'react';
import { cn } from '../../../utils/bem';
import { ChoiceGroup } from '../../ChoiceGroup/ChoiceGroup';
import { TableFilterContainer } from '../FilterContainer/TableFilterContainer';
var defaultValue = { name: 'Все', value: undefined };
export var TableChoiceGroupFilter = function (_a) {
    var onConfirm = _a.onConfirm, _b = _a.items, items = _b === void 0 ? [] : _b, filterValue = _a.filterValue, title = _a.title, onCancel = _a.onCancel;
    var cnChoiceGroupFilter = cn('TableChoiceGroupFilter');
    var _c = __read(useState(filterValue || defaultValue), 2), value = _c[0], setValue = _c[1];
    var confirmHandler = function () {
        onConfirm(value);
    };
    var choiceGroupItems = useMemo(function () { return __spread([defaultValue], items); }, [items]);
    var onChange = function (_a) {
        var value = _a.value;
        setValue(value);
    };
    return (React.createElement(TableFilterContainer, { title: title, onCancel: onCancel, onConfirm: confirmHandler },
        React.createElement(ChoiceGroup, { size: "s", items: choiceGroupItems, getLabel: function (item) { return item.name; }, name: "choiceGroup", onChange: onChange, value: (value === null || value === void 0 ? void 0 : value.value) ? value : defaultValue, multiple: false, className: cnChoiceGroupFilter() })));
};
