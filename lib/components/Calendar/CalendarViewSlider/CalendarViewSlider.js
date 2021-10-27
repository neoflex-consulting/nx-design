"use strict";
exports.__esModule = true;
exports.CalendarViewSlider = exports.cnCalendarViewSlider = void 0;
var tslib_1 = require("tslib");
require("./CalendarViewSlider.css");
var react_1 = tslib_1.__importDefault(require("react"));
var date_fns_1 = require("date-fns");
var ru_1 = tslib_1.__importDefault(require("date-fns/locale/ru"));
var bem_1 = require("../../../utils/bem");
var CalendarMonth_1 = require("../CalendarMonth/CalendarMonth");
var CalendarMonthLabel_1 = require("../CalendarMonthLabel/CalendarMonthLabel");
var CalendarSlider_1 = require("../CalendarSlider/CalendarSlider");
var helpers_1 = require("../helpers");
exports.cnCalendarViewSlider = bem_1.cn('CalendarViewSlider');
exports.CalendarViewSlider = react_1["default"].forwardRef(function (props, ref) {
    var className = props.className, _a = props.type, type = _a === void 0 ? helpers_1.calendarPropTypeDefault : _a, minDate = props.minDate, maxDate = props.maxDate, value = props.value, onChange = props.onChange, _b = props.currentVisibleDate, currentVisibleDateProp = _b === void 0 ? new Date() : _b, events = props.events, _c = props.locale, locale = _c === void 0 ? ru_1["default"] : _c, otherProps = tslib_1.__rest(props, ["className", "type", "minDate", "maxDate", "value", "onChange", "currentVisibleDate", "events", "locale"]);
    var _d = tslib_1.__read(helpers_1.useCurrentVisibleDate({
        currentVisibleDate: currentVisibleDateProp,
        maxDate: maxDate,
        minDate: minDate,
        value: value
    }), 2), currentVisibleDate = _d[0], setCurrentVisibleDate = _d[1];
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
    var nextDaysOfMonth = helpers_1.getDaysOfMonth({
        date: date_fns_1.addMonths(currentVisibleDate, 1),
        handleDayClick: handleSelectDate,
        value: value,
        events: events,
        minDate: minDate,
        maxDate: maxDate,
        locale: locale
    });
    var monthLabel = helpers_1.getMonthTitle(currentVisibleDate, locale);
    var nextMonthLabel = helpers_1.getMonthTitle(date_fns_1.addMonths(currentVisibleDate, 1), locale);
    var daysOfWeek = helpers_1.getDaysOfWeek(locale);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnCalendarViewSlider({}, [className]) }),
        react_1["default"].createElement(CalendarSlider_1.CalendarSlider, { className: exports.cnCalendarViewSlider('Slider'), currentVisibleDate: currentVisibleDate, onChange: setCurrentVisibleDate, value: value, locale: locale }),
        react_1["default"].createElement("div", { className: exports.cnCalendarViewSlider('CalendarsWrapper') },
            react_1["default"].createElement("div", { className: exports.cnCalendarViewSlider('Calendar') },
                react_1["default"].createElement(CalendarMonthLabel_1.CalendarMonthLabel, { label: monthLabel }),
                react_1["default"].createElement(CalendarMonth_1.CalendarMonth, { daysOfWeek: daysOfWeek, daysOfMonth: daysOfMonth })),
            react_1["default"].createElement("div", { className: exports.cnCalendarViewSlider('Calendar') },
                react_1["default"].createElement(CalendarMonthLabel_1.CalendarMonthLabel, { label: nextMonthLabel }),
                react_1["default"].createElement(CalendarMonth_1.CalendarMonth, { daysOfWeek: daysOfWeek, daysOfMonth: nextDaysOfMonth })))));
});
