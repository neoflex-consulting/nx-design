import { __assign, __read, __spread } from "tslib";
export var sortBy = function (array, param, order, sortFn) {
    if (order === void 0) { order = 'asc'; }
    if (sortFn === void 0) { sortFn = function (a, b) { return (a < b ? -1 : 1); }; }
    var compareFn = function (a, b) {
        return (order === 'desc' ? -1 : 1) * sortFn(a[param], b[param]);
    };
    return __spread(array).sort(compareFn);
};
export var updateAt = function (array, index, newItem) {
    return index >= array.length
        ? array
        : __spread(array.slice(0, index), [newItem], array.slice(index + 1, array.length));
};
export var range = function (n) { return __spread(Array(n).keys()); };
export var chunk = function (array, size) {
    var index = 0;
    var resIndex = 0;
    var result = [];
    while (index < array.length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
};
export var groupBy = function (array, iteratee) {
    return array.reduce(function (result, value) {
        var _a;
        var key = iteratee(value);
        return __assign(__assign({}, result), (_a = {}, _a[key] = result[key] ? __spread(result[key], [value]) : [value], _a));
    }, {});
};
