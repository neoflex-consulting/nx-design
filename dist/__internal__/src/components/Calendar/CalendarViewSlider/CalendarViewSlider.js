import { __assign, __read, __rest } from "tslib";
import './CalendarViewSlider.css';
import React from 'react';
import { addMonths } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { cn } from '../../../utils/bem';
import { CalendarMonth } from '../CalendarMonth/CalendarMonth';
import { CalendarMonthLabel } from '../CalendarMonthLabel/CalendarMonthLabel';
import { CalendarSlider } from '../CalendarSlider/CalendarSlider';
import { calendarPropTypeDefault, getDaysOfMonth, getDaysOfWeek, getHandleSelectDate, getMonthTitle, useCurrentVisibleDate, } from '../helpers';
export var cnCalendarViewSlider = cn('CalendarViewSlider');
export var CalendarViewSlider = React.forwardRef(function (props, ref) {
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
    var monthLabel = getMonthTitle(currentVisibleDate, locale);
    var nextMonthLabel = getMonthTitle(addMonths(currentVisibleDate, 1), locale);
    var daysOfWeek = getDaysOfWeek(locale);
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnCalendarViewSlider({}, [className]) }),
        React.createElement(CalendarSlider, { className: cnCalendarViewSlider('Slider'), currentVisibleDate: currentVisibleDate, onChange: setCurrentVisibleDate, value: value, locale: locale }),
        React.createElement("div", { className: cnCalendarViewSlider('CalendarsWrapper') },
            React.createElement("div", { className: cnCalendarViewSlider('Calendar') },
                React.createElement(CalendarMonthLabel, { label: monthLabel }),
                React.createElement(CalendarMonth, { daysOfWeek: daysOfWeek, daysOfMonth: daysOfMonth })),
            React.createElement("div", { className: cnCalendarViewSlider('Calendar') },
                React.createElement(CalendarMonthLabel, { label: nextMonthLabel }),
                React.createElement(CalendarMonth, { daysOfWeek: daysOfWeek, daysOfMonth: nextDaysOfMonth })))));
});
