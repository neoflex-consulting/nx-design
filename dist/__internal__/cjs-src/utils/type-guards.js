"use strict";
exports.__esModule = true;
exports.isNumber = exports.isNotNil = exports.isDefined = void 0;
exports.isDefined = function (p) { return p !== undefined; };
exports.isNotNil = function (p) {
    return p !== undefined && p !== null;
};
exports.isNumber = function (value) { return typeof value === 'number'; };
