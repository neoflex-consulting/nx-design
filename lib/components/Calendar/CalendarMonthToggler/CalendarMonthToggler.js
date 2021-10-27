"use strict";
exports.__esModule = true;
exports.CalendarMonthToggler = exports.cnCalendarMonthToggler = void 0;
var tslib_1 = require("tslib");
require("./CalendarMonthToggler.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconForward_1 = require("../../../icons/IconForward/IconForward");
var bem_1 = require("../../../utils/bem");
var Button_1 = require("../../Button/Button");
var CalendarMonthLabel_1 = require("../CalendarMonthLabel/CalendarMonthLabel");
exports.cnCalendarMonthToggler = bem_1.cn('CalendarMonthToggler');
exports.CalendarMonthToggler = function (props) {
    var label = props.label, className = props.className, prevOnClick = props.prevOnClick, nextOnClick = props.nextOnClick, otherProps = tslib_1.__rest(props, ["label", "className", "prevOnClick", "nextOnClick"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnCalendarMonthToggler({ withPrevButton: Boolean(prevOnClick), withNextButton: Boolean(nextOnClick) }, [className]) }),
        prevOnClick && (react_1["default"].createElement(Button_1.Button, { className: exports.cnCalendarMonthToggler('Button', { direction: 'prev' }), onClick: prevOnClick, iconLeft: IconForward_1.IconForward, size: "s", view: "clear", iconSize: "s" })),
        react_1["default"].createElement(CalendarMonthLabel_1.CalendarMonthLabel, { className: exports.cnCalendarMonthToggler('Label'), label: label }),
        nextOnClick && (react_1["default"].createElement(Button_1.Button, { className: exports.cnCalendarMonthToggler('Button', { direction: 'next' }), onClick: nextOnClick, iconLeft: IconForward_1.IconForward, size: "s", view: "clear", iconSize: "s" }))));
};
