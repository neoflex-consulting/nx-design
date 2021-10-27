"use strict";
exports.__esModule = true;
exports.TableTextFilter = void 0;
var tslib_1 = require("tslib");
require("./TableTextFilter.css");
var react_1 = tslib_1.__importStar(require("react"));
var IconSearch_1 = require("../../../icons/IconSearch/IconSearch");
var bem_1 = require("../../../utils/bem");
var Button_1 = require("../../Button/Button");
var CheckboxGroup_1 = require("../../CheckboxGroup/CheckboxGroup");
var Text_1 = require("../../Text/Text");
var TextField_1 = require("../../TextField/TextField");
var TableFilterContainer_1 = require("../FilterContainer/TableFilterContainer");
var cnTextFilter = bem_1.cn('TableTextFilter');
exports.TableTextFilter = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.withSearch, withSearch = _c === void 0 ? false : _c, onConfirm = _a.onConfirm, onCancel = _a.onCancel, filterValue = _a.filterValue, title = _a.title, _d = _a.emptySearchText, emptySearchText = _d === void 0 ? 'Ничего не найдено :(' : _d;
    var _e = tslib_1.__read(react_1.useState(null), 2), searchValue = _e[0], setSearchValue = _e[1];
    var _f = tslib_1.__read(react_1.useState(filterValue || items), 2), checkboxGroupValue = _f[0], setCheckboxGroupValue = _f[1];
    var confirmHandler = function () {
        setSearchValue(null);
        onConfirm(checkboxGroupValue === null ? [] : checkboxGroupValue);
    };
    var resetHandler = function () {
        setCheckboxGroupValue(null);
    };
    var filteredItems = react_1.useMemo(function () {
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
    var isAllSelected = react_1.useMemo(function () { return filteredItems.length === (checkboxGroupValue === null || checkboxGroupValue === void 0 ? void 0 : checkboxGroupValue.length); }, [
        filteredItems,
        checkboxGroupValue,
    ]);
    return (react_1["default"].createElement(TableFilterContainer_1.TableFilterContainer, { title: title, onCancel: onCancel, onConfirm: confirmHandler },
        withSearch && (react_1["default"].createElement(TextField_1.TextField, { value: searchValue, onChange: function (_a) {
                var value = _a.value;
                return setSearchValue(value);
            }, leftSide: IconSearch_1.IconSearch, size: "s", placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435", width: "full", className: cnTextFilter('Searchbar') })),
        react_1["default"].createElement("div", { className: cnTextFilter('Controls') },
            react_1["default"].createElement(Button_1.Button, { size: "m", form: "brick", label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435", view: "clear", onClick: setAll, disabled: !filteredItems.length || isAllSelected }),
            react_1["default"].createElement(Button_1.Button, { size: "m", form: "brick", label: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C", view: "clear", onClick: resetHandler, disabled: !filteredItems.length })),
        react_1["default"].createElement("div", { className: cnTextFilter('Checkboxes') }, filteredItems.length ? (react_1["default"].createElement(CheckboxGroup_1.CheckboxGroup, { items: filteredItems, value: checkboxGroupValue, getLabel: function (item) { return item.name; }, onChange: function (_a) {
                var value = _a.value;
                setCheckboxGroupValue(value);
            }, name: "checkboxGroup" })) : (react_1["default"].createElement(Text_1.Text, { lineHeight: "2xs" }, emptySearchText)))));
};
