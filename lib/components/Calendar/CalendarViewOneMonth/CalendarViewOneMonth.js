"use strict";
exports.__esModule = true;
exports.CalendarViewOneMonth = exports.cnCalendarViewOneMonth = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var date_fns_1 = require("date-fns");
var ru_1 = tslib_1.__importDefault(require("date-fns/locale/ru"));
var bem_1 = require("../../../utils/bem");
var CalendarMonth_1 = require("../CalendarMonth/CalendarMonth");
var CalendarMonthToggler_1 = require("../CalendarMonthToggler/CalendarMonthToggler");
var helpers_1 = require("../helpers");
exports.cnCalendarViewOneMonth = bem_1.cn('CalendarViewOneMonth');
exports.CalendarViewOneMonth = react_1["default"].forwardRef(function (props, ref) {
    var className = props.className, _a = props.type, type = _a === void 0 ? helpers_1.calendarPropTypeDefault : _a, minDate = props.minDate, maxDate = props.maxDate, value = props.value, onChange = props.onChange, currentVisibleDateProp = props.currentVisibleDate, events = props.events, _b = props.locale, locale = _b === void 0 ? ru_1["default"] : _b, otherProps = tslib_1.__rest(props, ["className", "type", "minDate", "maxDate", "value", "onChange", "currentVisibleDate", "events", "locale"]);
    var _c = tslib_1.__read(helpers_1.useCurrentVisibleDate({
        currentVisibleDate: currentVisibleDateProp,
        maxDate: maxDate,
        minDate: minDate,
        value: value
    }), 2), currentVisibleDate = _c[0], setCurrentVisibleDate = _c[1];
    var handleSelectDate = helpers_1.getHandleSelectDate({ type: type, minDate: minDate, maxDate: maxDate, value: value, onChange: onChange });
    var daysOfMonth = helpers_1.getDaysOfMonth({
        date: currentVisibleDate,
        handleDayClick: handleSelectDate,
        value: value,
        events: events,
        minDate: minDate,
        maxDate: maxDate,
        locale: locale
    });
    var monthLabel = helpers_1.getMouthLabelWithYear(currentVisibleDate, locale);
    var daysOfWeek = helpers_1.getDaysOfWeek(locale);
    var nextMonthHandle = function () { return setCurrentVisibleDate(date_fns_1.addMonths(currentVisibleDate, 1)); };
    var prevMonthHandle = function () { return setCurrentVisibleDate(date_fns_1.addMonths(currentVisibleDate, -1)); };
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnCalendarViewOneMonth({}, [className]) }),
        react_1["default"].createElement(CalendarMonthToggler_1.CalendarMonthToggler, { prevOnClick: prevMonthHandle, nextOnClick: nextMonthHandle, label: monthLabel }),
        react_1["default"].createElement(CalendarMonth_1.CalendarMonth, { daysOfWeek: daysOfWeek, daysOfMonth: daysOfMonth })));
});
