"use strict";
exports.__esModule = true;
exports.forwardRefWithAs = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function forwardRefWithAs(render) {
    return react_1["default"].forwardRef(render);
}
exports.forwardRefWithAs = forwardRefWithAs;
