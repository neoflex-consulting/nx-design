"use strict";
exports.__esModule = true;
exports.CalendarMonthLabel = exports.cnCalendarMonthLabel = void 0;
var tslib_1 = require("tslib");
require("./CalendarMonthLabel.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Text_1 = require("../../Text/Text");
exports.cnCalendarMonthLabel = bem_1.cn('CalendarMonthLabel');
exports.CalendarMonthLabel = function (props) {
    var label = props.label, className = props.className, otherProps = tslib_1.__rest(props, ["label", "className"]);
    return (react_1["default"].createElement(Text_1.Text, tslib_1.__assign({}, otherProps, { className: exports.cnCalendarMonthLabel(null, [className]), as: "span", size: "s", align: "center", weight: "bold" }), label));
};
