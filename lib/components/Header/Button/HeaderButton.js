"use strict";
exports.__esModule = true;
exports.HeaderButton = exports.cnHeaderButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Button_1 = require("../../Button/Button");
exports.cnHeaderButton = bem_1.cn('HeaderButton');
exports.HeaderButton = function (props) {
    var className = props.className, otherProps = tslib_1.__rest(props, ["className"]);
    return (react_1["default"].createElement(Button_1.Button, tslib_1.__assign({}, otherProps, { className: exports.cnHeaderButton(null, [className]), size: "m", view: "clear", form: "round", onlyIcon: true })));
};
