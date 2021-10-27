"use strict";
exports.__esModule = true;
exports.useSelectedFilters = exports.filterTableData = exports.getSelectedFiltersList = exports.isSelectedFiltersPresent = exports.fieldFiltersPresent = exports.getSelectedFiltersInitialState = exports.getOptionsForFilters = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var type_guards_1 = require("../../utils/type-guards");
exports.getOptionsForFilters = function (filters, field) {
    return filters
        .filter(function (_a) {
        var filterField = _a.field;
        return filterField === field;
    })
        .map(function (_a) {
        var id = _a.id, name = _a.name;
        return ({ value: id, label: name });
    });
};
exports.getSelectedFiltersInitialState = function (filters) {
    if (!filters) {
        return {};
    }
    return filters.reduce(function (fieldAcc, fieldCur) {
        var _a;
        if (!fieldAcc[fieldCur.field]) {
            return tslib_1.__assign(tslib_1.__assign({}, fieldAcc), (_a = {}, _a[fieldCur.field] = {
                selected: []
            }, _a));
        }
        return fieldAcc;
    }, {});
};
exports.fieldFiltersPresent = function (tableFilters, field) {
    return tableFilters.some(function (_a) {
        var filterField = _a.field;
        return filterField === field;
    });
};
exports.isSelectedFiltersPresent = function (selectedFilters) {
    return Object.values(selectedFilters).some(function (filterGroup) { return (filterGroup === null || filterGroup === void 0 ? void 0 : filterGroup.selected.length) > 0; });
};
exports.getSelectedFiltersList = function (_a) {
    var filters = _a.filters, selectedFilters = _a.selectedFilters, columns = _a.columns;
    return columns.reduce(function (acc, cur) {
        var currentFieldFilters = selectedFilters[cur.accessor] || [];
        var orderedFilters = [];
        if (currentFieldFilters.selected && currentFieldFilters.selected.length > 0) {
            orderedFilters = currentFieldFilters
                .selected.map(function (filter) {
                var option = filters.find(function (_a) {
                    var filterId = _a.id;
                    return filterId === filter;
                });
                return option
                    ? {
                        id: option.id,
                        name: option.name,
                        value: currentFieldFilters.value
                    }
                    : undefined;
            })
                .filter(type_guards_1.isDefined);
        }
        return orderedFilters.length > 0 ? tslib_1.__spread(acc, orderedFilters) : acc;
    }, []);
};
exports.filterTableData = function (_a) {
    var e_1, _b, e_2, _c;
    var _d;
    var data = _a.data, filters = _a.filters, selectedFilters = _a.selectedFilters;
    var mutableFilteredData = [];
    try {
        for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var row = data_1_1.value;
            var copiedRow = tslib_1.__assign({}, row);
            if ((_d = copiedRow.rows) === null || _d === void 0 ? void 0 : _d.length) {
                copiedRow.rows = exports.filterTableData({ data: copiedRow.rows, filters: filters, selectedFilters: selectedFilters });
            }
            var columnNames = Object.keys(copiedRow);
            var rowIsValid = true;
            var _loop_1 = function (columnName) {
                var e_3, _a;
                var columnFilters = selectedFilters[columnName];
                if (columnFilters && columnFilters.selected.length) {
                    var cellIsValid = false;
                    var cellContent = copiedRow[columnName];
                    if (columnFilters.value) {
                        var _b = tslib_1.__read(columnFilters.selected, 1), filterId_1 = _b[0];
                        var filter = filters.find(function (_a) {
                            var id = _a.id;
                            return id === filterId_1;
                        });
                        if (filter.filterer(cellContent, columnFilters.value)) {
                            cellIsValid = true;
                        }
                    }
                    else {
                        var _loop_2 = function (filterId) {
                            var filter = filters.find(function (_a) {
                                var id = _a.id;
                                return id === filterId;
                            });
                            if (columnFilters.value === null) {
                                cellIsValid = true;
                                return "break";
                            }
                            if (filter && filter.filterer(cellContent)) {
                                cellIsValid = true;
                                return "break";
                            }
                        };
                        try {
                            for (var _c = (e_3 = void 0, tslib_1.__values(columnFilters.selected)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var filterId = _d.value;
                                var state_2 = _loop_2(filterId);
                                if (state_2 === "break")
                                    break;
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                    if (!cellIsValid) {
                        rowIsValid = false;
                    }
                }
                if (!rowIsValid) {
                    return "break";
                }
            };
            try {
                for (var columnNames_1 = (e_2 = void 0, tslib_1.__values(columnNames)), columnNames_1_1 = columnNames_1.next(); !columnNames_1_1.done; columnNames_1_1 = columnNames_1.next()) {
                    var columnName = columnNames_1_1.value;
                    var state_1 = _loop_1(columnName);
                    if (state_1 === "break")
                        break;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (columnNames_1_1 && !columnNames_1_1.done && (_c = columnNames_1["return"])) _c.call(columnNames_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (rowIsValid) {
                mutableFilteredData.push(copiedRow);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (data_1_1 && !data_1_1.done && (_b = data_1["return"])) _b.call(data_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return mutableFilteredData;
};
/* istanbul ignore next */
exports.useSelectedFilters = function (filters, onFiltersUpdated) {
    var _a = tslib_1.__read(react_1["default"].useState(exports.getSelectedFiltersInitialState(filters)), 2), selectedFilters = _a[0], setSelectedFilters = _a[1];
    var updateSelectedFilters = function (field, tooltipSelectedFilters, value) {
        var _a;
        var newSelectedFilters = tslib_1.__assign(tslib_1.__assign({}, selectedFilters), (_a = {}, _a[field] = {
            selected: tslib_1.__spread(tooltipSelectedFilters),
            value: value
        }, _a));
        setSelectedFilters(newSelectedFilters);
        onFiltersUpdated && onFiltersUpdated(newSelectedFilters);
    };
    var removeOneSelectedFilter = function (availableFilters, filter) {
        var _a;
        var filterToDelete = availableFilters.find(function (_a) {
            var id = _a.id;
            return id === filter;
        });
        if (filterToDelete) {
            updateSelectedFilters(filterToDelete.field, (_a = (selectedFilters[filterToDelete.field] || {}).selected) === null || _a === void 0 ? void 0 : _a.filter(function (f) { return f !== filter; }));
        }
    };
    var removeAllSelectedFilters = function (availableFilters) {
        var initialSelectedFilters = exports.getSelectedFiltersInitialState(availableFilters);
        setSelectedFilters(initialSelectedFilters);
        onFiltersUpdated && onFiltersUpdated(initialSelectedFilters);
    };
    return {
        selectedFilters: selectedFilters,
        updateSelectedFilters: updateSelectedFilters,
        removeOneSelectedFilter: removeOneSelectedFilter,
        removeAllSelectedFilters: removeAllSelectedFilters
    };
};
