import { __assign, __read, __rest } from "tslib";
import './CalendarViewTwoMonths.css';
import React from 'react';
import { addMonths } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { cn } from '../../../utils/bem';
import { CalendarMonth } from '../CalendarMonth/CalendarMonth';
import { CalendarMonthToggler } from '../CalendarMonthToggler/CalendarMonthToggler';
import { calendarPropTypeDefault, getDaysOfMonth, getDaysOfWeek, getHandleSelectDate, getMouthLabelWithYear, useCurrentVisibleDate, } from '../helpers';
export var cnCalendarViewTwoMonths = cn('CalendarViewTwoMonths');
export var CalendarViewTwoMonths = React.forwardRef(function (props, ref) {
    var className = props.className, _a = props.type, type = _a === void 0 ? calendarPropTypeDefault : _a, minDate = props.minDate, maxDate = props.maxDate, value = props.value, onChange = props.onChange, _b = props.currentVisibleDate, currentVisibleDateProp = _b === void 0 ? new Date() : _b, events = props.events, _c = props.locale, locale = _c === void 0 ? ruLocale : _c, otherProps = __rest(props, ["className", "type", "minDate", "maxDate", "value", "onChange", "currentVisibleDate", "events", "locale"]);
    var _d = __read(useCurrentVisibleDate({
        currentVisibleDate: currentVisibleDateProp,
        maxDate: maxDate,
        minDate: minDate,
        value: value
    }), 2), currentVisibleDate = _d[0], setCurrentVisibleDate = _d[1];
    var handleSelectDate = getHandleSelectDate({ type: type, minDate: minDate, maxDate: maxDate, value: value, onChange: onChange });
    var daysOfMonth = getDaysOfMonth({
        date: currentVisibleDate,
        handleDayClick: handleSelectDate,
        value: value,
        events: events,
        minDate: minDate,
        maxDate: maxDate,
        locale: locale
    });
    var nextDaysOfMonth = getDaysOfMonth({
        date: addMonths(currentVisibleDate, 1),
        handleDayClick: handleSelectDate,
        value: value,
        events: events,
        minDate: minDate,
        maxDate: maxDate,
        locale: locale
    });
    var monthLabel = getMouthLabelWithYear(currentVisibleDate, locale);
    var nextMonthLabel = getMouthLabelWithYear(addMonths(currentVisibleDate, 1), locale);
    var daysOfWeek = getDaysOfWeek(locale);
    var nextMonthHandle = function () { return setCurrentVisibleDate(addMonths(currentVisibleDate, 1)); };
    var prevMonthHandle = function () { return setCurrentVisibleDate(addMonths(currentVisibleDate, -1)); };
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnCalendarViewTwoMonths({}, [className]) }),
        React.createElement("div", { className: cnCalendarViewTwoMonths('Calendar') },
            React.createElement(CalendarMonthToggler, { prevOnClick: prevMonthHandle, label: monthLabel }),
            React.createElement(CalendarMonth, { daysOfWeek: daysOfWeek, daysOfMonth: daysOfMonth })),
        React.createElement("div", { className: cnCalendarViewTwoMonths('Calendar') },
            React.createElement(CalendarMonthToggler, { nextOnClick: nextMonthHandle, label: nextMonthLabel }),
            React.createElement(CalendarMonth, { daysOfWeek: daysOfWeek, daysOfMonth: nextDaysOfMonth }))));
});
