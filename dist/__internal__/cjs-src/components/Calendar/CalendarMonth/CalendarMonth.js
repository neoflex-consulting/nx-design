"use strict";
exports.__esModule = true;
exports.CalendarMonth = exports.cnCalendarMonth = void 0;
var tslib_1 = require("tslib");
require("./CalendarMonth.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Text_1 = require("../../Text/Text");
var CalendarDay_1 = require("../CalendarDay/CalendarDay");
var Calendar_ell_1 = require("../Calendar\u0421ell/Calendar\u0421ell");
exports.cnCalendarMonth = bem_1.cn('CalendarMonth');
exports.CalendarMonth = function (props) {
    var className = props.className, daysOfWeek = props.daysOfWeek, daysOfMonth = props.daysOfMonth, otherProps = tslib_1.__rest(props, ["className", "daysOfWeek", "daysOfMonth"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnCalendarMonth(null, [className]) }),
        daysOfWeek.map(function (item, index) { return (react_1["default"].createElement(Calendar_ell_1.CalendarCell, { key: exports.cnCalendarMonth('DayOfWeek', { index: index, item: item }) },
            react_1["default"].createElement(Text_1.Text, { as: "span", view: "ghost", size: "2xs", transform: "uppercase" }, item))); }),
        daysOfMonth.map(function (_a, index) {
            var range = _a.range, dayProps = tslib_1.__rest(_a, ["range"]);
            return (react_1["default"].createElement(Calendar_ell_1.CalendarCell, { key: exports.cnCalendarMonth('DayOfMonth', { index: index, number: dayProps.number }), range: range },
                react_1["default"].createElement(CalendarDay_1.CalendarDay, tslib_1.__assign({}, dayProps))));
        })));
};
