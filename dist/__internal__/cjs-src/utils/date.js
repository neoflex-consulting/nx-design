"use strict";
exports.__esModule = true;
exports.isOnlyOneDateInRange = exports.isDateRange = exports.getMonthTitle = void 0;
var tslib_1 = require("tslib");
var date_fns_1 = require("date-fns");
var ru_1 = tslib_1.__importDefault(require("date-fns/locale/ru"));
var type_guards_1 = require("./type-guards");
exports.getMonthTitle = function (date) {
    return date_fns_1.format(date, 'LLLL', { locale: ru_1["default"] });
};
exports.isDateRange = function (value) {
    return Array.isArray(value) &&
        value.length === 2 &&
        value.every(function (date) { return date instanceof Date || !type_guards_1.isDefined(date); });
};
exports.isOnlyOneDateInRange = function (range) {
    return Boolean((range[0] && !range[1]) || (!range[0] && range[1]));
};
