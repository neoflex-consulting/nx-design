"use strict";
exports.__esModule = true;
exports.TableChoiceGroupFilter = void 0;
var tslib_1 = require("tslib");
require("./TableChoiceGroupFilter.css");
var react_1 = tslib_1.__importStar(require("react"));
var bem_1 = require("../../../utils/bem");
var ChoiceGroup_1 = require("../../ChoiceGroup/ChoiceGroup");
var TableFilterContainer_1 = require("../FilterContainer/TableFilterContainer");
var defaultValue = { name: 'Все', value: undefined };
exports.TableChoiceGroupFilter = function (_a) {
    var onConfirm = _a.onConfirm, _b = _a.items, items = _b === void 0 ? [] : _b, filterValue = _a.filterValue, title = _a.title, onCancel = _a.onCancel;
    var cnChoiceGroupFilter = bem_1.cn('TableChoiceGroupFilter');
    var _c = tslib_1.__read(react_1.useState(filterValue || defaultValue), 2), value = _c[0], setValue = _c[1];
    var confirmHandler = function () {
        onConfirm(value);
    };
    var choiceGroupItems = react_1.useMemo(function () { return tslib_1.__spread([defaultValue], items); }, [items]);
    var onChange = function (_a) {
        var value = _a.value;
        setValue(value);
    };
    return (react_1["default"].createElement(TableFilterContainer_1.TableFilterContainer, { title: title, onCancel: onCancel, onConfirm: confirmHandler },
        react_1["default"].createElement(ChoiceGroup_1.ChoiceGroup, { size: "s", items: choiceGroupItems, getLabel: function (item) { return item.name; }, name: "choiceGroup", onChange: onChange, value: (value === null || value === void 0 ? void 0 : value.value) ? value : defaultValue, multiple: false, className: cnChoiceGroupFilter() })));
};
