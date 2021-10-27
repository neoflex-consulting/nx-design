"use strict";
exports.__esModule = true;
exports.HeaderModule = exports.cnHeaderModule = void 0;
var tslib_1 = require("tslib");
require("./HeaderModule.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
exports.cnHeaderModule = bem_1.cn('HeaderModule');
var headerModulePropIndent = ['s', 'm', 'l'];
exports.HeaderModule = function (_a) {
    var className = _a.className, children = _a.children, indent = _a.indent, otherProps = tslib_1.__rest(_a, ["className", "children", "indent"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnHeaderModule({ indent: indent }, [className]) }), children));
};
