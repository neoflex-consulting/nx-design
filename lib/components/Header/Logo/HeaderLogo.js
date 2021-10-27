"use strict";
exports.__esModule = true;
exports.HeaderLogo = exports.cnHeaderLogo = void 0;
var tslib_1 = require("tslib");
require("./HeaderLogo.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
exports.cnHeaderLogo = bem_1.cn('HeaderLogo');
function HeaderLogo(props) {
    var children = props.children, _a = props.as, as = _a === void 0 ? 'div' : _a, className = props.className, otherProps = tslib_1.__rest(props, ["children", "as", "className"]);
    var Tag = as;
    return (react_1["default"].createElement(Tag, tslib_1.__assign({ className: exports.cnHeaderLogo(null, [className]) }, otherProps), children));
}
exports.HeaderLogo = HeaderLogo;
