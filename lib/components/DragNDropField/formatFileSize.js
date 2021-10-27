"use strict";
exports.__esModule = true;
exports.formatFileSize = void 0;
var tslib_1 = require("tslib");
var UNITS = [
    { value: 1024 * 1024 * 1024, name: 'Гб' },
    { value: 1024 * 1024, name: 'Мб' },
    { value: 1024, name: 'Кб' },
    { value: 1, name: 'байт' },
];
exports.formatFileSize = function (sizeInBytes) {
    var e_1, _a;
    try {
        for (var UNITS_1 = tslib_1.__values(UNITS), UNITS_1_1 = UNITS_1.next(); !UNITS_1_1.done; UNITS_1_1 = UNITS_1.next()) {
            var step = UNITS_1_1.value;
            if (sizeInBytes >= step.value) {
                return floorToDecimals(sizeInBytes / step.value, 1) + " " + step.name;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (UNITS_1_1 && !UNITS_1_1.done && (_a = UNITS_1["return"])) _a.call(UNITS_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return undefined;
};
var floorToDecimals = function (num, decimals) {
    return Math.floor(Math.pow(10, decimals) * num) / Math.pow(10, decimals);
};
