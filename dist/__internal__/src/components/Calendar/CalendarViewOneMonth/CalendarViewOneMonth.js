import { __assign, __read, __rest } from "tslib";
import React from 'react';
import { addMonths } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { cn } from '../../../utils/bem';
import { CalendarMonth } from '../CalendarMonth/CalendarMonth';
import { CalendarMonthToggler } from '../CalendarMonthToggler/CalendarMonthToggler';
import { calendarPropTypeDefault, getDaysOfMonth, getDaysOfWeek, getHandleSelectDate, getMouthLabelWithYear, useCurrentVisibleDate, } from '../helpers';
export var cnCalendarViewOneMonth = cn('CalendarViewOneMonth');
export var CalendarViewOneMonth = React.forwardRef(function (props, ref) {
    var className = props.className, _a = props.type, type = _a === void 0 ? calendarPropTypeDefault : _a, minDate = props.minDate, maxDate = props.maxDate, value = props.value, onChange = props.onChange, currentVisibleDateProp = props.currentVisibleDate, events = props.events, _b = props.locale, locale = _b === void 0 ? ruLocale : _b, otherProps = __rest(props, ["className", "type", "minDate", "maxDate", "value", "onChange", "currentVisibleDate", "events", "locale"]);
    var _c = __read(useCurrentVisibleDate({
        currentVisibleDate: currentVisibleDateProp,
        maxDate: maxDate,
        minDate: minDate,
        value: value
    }), 2), currentVisibleDate = _c[0], setCurrentVisibleDate = _c[1];
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
    var monthLabel = getMouthLabelWithYear(currentVisibleDate, locale);
    var daysOfWeek = getDaysOfWeek(locale);
    var nextMonthHandle = function () { return setCurrentVisibleDate(addMonths(currentVisibleDate, 1)); };
    var prevMonthHandle = function () { return setCurrentVisibleDate(addMonths(currentVisibleDate, -1)); };
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnCalendarViewOneMonth({}, [className]) }),
        React.createElement(CalendarMonthToggler, { prevOnClick: prevMonthHandle, nextOnClick: nextMonthHandle, label: monthLabel }),
        React.createElement(CalendarMonth, { daysOfWeek: daysOfWeek, daysOfMonth: daysOfMonth })));
});
