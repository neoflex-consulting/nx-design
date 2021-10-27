import { __read } from "tslib";
import './TableTextFilter.css';
import React, { useMemo, useState } from 'react';
import { IconSearch } from '../../../icons/IconSearch/IconSearch';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { CheckboxGroup } from '../../CheckboxGroup/CheckboxGroup';
import { Text } from '../../Text/Text';
import { TextField } from '../../TextField/TextField';
import { TableFilterContainer } from '../FilterContainer/TableFilterContainer';
var cnTextFilter = cn('TableTextFilter');
export var TableTextFilter = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.withSearch, withSearch = _c === void 0 ? false : _c, onConfirm = _a.onConfirm, onCancel = _a.onCancel, filterValue = _a.filterValue, title = _a.title, _d = _a.emptySearchText, emptySearchText = _d === void 0 ? 'Ничего не найдено :(' : _d;
    var _e = __read(useState(null), 2), searchValue = _e[0], setSearchValue = _e[1];
    var _f = __read(useState(filterValue || items), 2), checkboxGroupValue = _f[0], setCheckboxGroupValue = _f[1];
    var confirmHandler = function () {
        setSearchValue(null);
        onConfirm(checkboxGroupValue === null ? [] : checkboxGroupValue);
    };
    var resetHandler = function () {
        setCheckboxGroupValue(null);
    };
    var filteredItems = useMemo(function () {
        if (!searchValue) {
            return items;
        }
        return items.filter(function (_a) {
            var name = _a.name;
            return name.match(new RegExp("" + searchValue, 'i'));
        });
    }, [searchValue, items]);
    var setAll = function () {
        setCheckboxGroupValue(filteredItems);
    };
    var isAllSelected = useMemo(function () { return filteredItems.length === (checkboxGroupValue === null || checkboxGroupValue === void 0 ? void 0 : checkboxGroupValue.length); }, [
        filteredItems,
        checkboxGroupValue,
    ]);
    return (React.createElement(TableFilterContainer, { title: title, onCancel: onCancel, onConfirm: confirmHandler },
        withSearch && (React.createElement(TextField, { value: searchValue, onChange: function (_a) {
                var value = _a.value;
                return setSearchValue(value);
            }, leftSide: IconSearch, size: "s", placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435", width: "full", className: cnTextFilter('Searchbar') })),
        React.createElement("div", { className: cnTextFilter('Controls') },
            React.createElement(Button, { size: "m", form: "brick", label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435", view: "clear", onClick: setAll, disabled: !filteredItems.length || isAllSelected }),
            React.createElement(Button, { size: "m", form: "brick", label: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C", view: "clear", onClick: resetHandler, disabled: !filteredItems.length })),
        React.createElement("div", { className: cnTextFilter('Checkboxes') }, filteredItems.length ? (React.createElement(CheckboxGroup, { items: filteredItems, value: checkboxGroupValue, getLabel: function (item) { return item.name; }, onChange: function (_a) {
                var value = _a.value;
                setCheckboxGroupValue(value);
            }, name: "checkboxGroup" })) : (React.createElement(Text, { lineHeight: "2xs" }, emptySearchText)))));
};
