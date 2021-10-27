"use strict";
exports.__esModule = true;
exports.withPrefix = exports.cn = void 0;
var tslib_1 = require("tslib");
var classname_1 = require("@bem-react/classname");
var reactBemNaming = { e: '-', m: '_', v: '_' };
exports.cn = classname_1.withNaming(reactBemNaming);
exports.withPrefix = function (prefix) { return classname_1.withNaming(tslib_1.__assign({ n: prefix + "--" }, reactBemNaming)); };
