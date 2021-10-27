"use strict";
exports.__esModule = true;
exports.groupBy = exports.chunk = exports.range = exports.updateAt = exports.sortBy = void 0;
var tslib_1 = require("tslib");
exports.sortBy = function (array, param, order, sortFn) {
    if (order === void 0) { order = 'asc'; }
    if (sortFn === void 0) { sortFn = function (a, b) { return (a < b ? -1 : 1); }; }
    var compareFn = function (a, b) {
        return (order === 'desc' ? -1 : 1) * sortFn(a[param], b[param]);
    };
    return tslib_1.__spread(array).sort(compareFn);
};
exports.updateAt = function (array, index, newItem) {
    return index >= array.length
        ? array
        : tslib_1.__spread(array.slice(0, index), [newItem], array.slice(index + 1, array.length));
};
exports.range = function (n) { return tslib_1.__spread(Array(n).keys()); };
exports.chunk = function (array, size) {
    var index = 0;
    var resIndex = 0;
    var result = [];
    while (index < array.length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
};
exports.groupBy = function (array, iteratee) {
    return array.reduce(function (result, value) {
        var _a;
        var key = iteratee(value);
        return tslib_1.__assign(tslib_1.__assign({}, result), (_a = {}, _a[key] = result[key] ? tslib_1.__spread(result[key], [value]) : [value], _a));
    }, {});
};
