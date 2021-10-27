"use strict";
exports.__esModule = true;
exports.SnackBarActionButton = void 0;
var tslib_1 = require("tslib");
require("./SnackBar-ActionButton.css");
var react_1 = tslib_1.__importDefault(require("react"));
var Button_1 = require("../../Button/Button");
var SnackBar_1 = require("../SnackBar");
exports.SnackBarActionButton = function (props) {
    var actions = props.actions;
    if (actions.length < 1) {
        return null;
    }
    return (react_1["default"].createElement("div", { className: SnackBar_1.cnSnackBar('ActionButtonsWrapper') }, actions.map(function (item, i) { return (react_1["default"].createElement(Button_1.Button, { className: SnackBar_1.cnSnackBar('ActionButton'), key: i, size: "s", view: "ghost", label: item.label, onClick: item.onClick })); })));
};
