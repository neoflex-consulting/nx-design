import { __read } from "tslib";
import { useEffect, useMemo, useState } from 'react';
import { addDays, differenceInDays, endOfMonth, endOfWeek, format, isBefore, isSameDay, isWithinInterval, startOfDay, startOfMonth, startOfWeek, } from 'date-fns';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { range } from '../../utils/array';
import { isDateRange, isOnlyOneDateInRange } from '../../utils/date';
import { isDefined } from '../../utils/type-guards';
export var calendarPropView = ['oneMonth', 'twoMonths', 'slider'];
export var calendarPropViewDefault = calendarPropView[0];
export var calendarPropType = ['date', 'date-range'];
export var calendarPropTypeDefault = calendarPropType[0];
var isEqualDate = function (date1, date2) { return date1.getTime() === date2.getTime(); };
var isEqualDay = function (date1, date2) {
    return isEqualDate(startOfDay(date1), startOfDay(date2));
};
export var dateComparer = function (a, b) { var _a, _b; return ((_a = a === null || a === void 0 ? void 0 : a.getTime()) !== null && _a !== void 0 ? _a : 0) - ((_b = b === null || b === void 0 ? void 0 : b.getTime()) !== null && _b !== void 0 ? _b : 0); };
export var getStartAndEndDate = function (date1, date2) {
    return [date1, date2].sort(dateComparer);
};
export var isDateSelected = function (_a) {
    var date = _a.date, value = _a.value;
    return value ? isSameDay(value, date) : false;
};
export var isValueSelected = function (_a) {
    var date = _a.date, value = _a.value;
    if (isDateRange(value)) {
        if (value[0] && value[1]) {
            var _b = __read(getStartAndEndDate(value[0], value[1]), 2), start = _b[0], end = _b[1];
            return isWithinInterval(date, { start: start, end: end });
        }
        return isDateSelected({ date: date, value: value[0] || value[1] });
    }
    return isDateSelected({ date: date, value: value });
};
export var isValueSelectedBackwards = function (_a) {
    var value = _a.value, hoveredDate = _a.hoveredDate;
    return (hoveredDate &&
        isDateRange(value) &&
        isOnlyOneDateInRange(value) &&
        ((isDefined(value[0]) && isBefore(hoveredDate, value[0])) ||
            (isDefined(value[1]) && isBefore(hoveredDate, value[1]))));
};
var isSelected = function (_a) {
    var date = _a.date, value = _a.value;
    if (!value) {
        return false;
    }
    if (Array.isArray(value)) {
        return !!value.find(function (item) { return (item ? isEqualDay(date, item) : false); });
    }
    return isEqualDay(date, value);
};
var isDateInRange = function (date, range) {
    if (!range[0] || !range[1]) {
        return false;
    }
    var dateTime = date.getTime();
    var rangeTime = [range[0].getTime(), range[1].getTime()];
    if (dateTime === rangeTime[0]) {
        return 'first';
    }
    if (dateTime === rangeTime[1]) {
        return 'last';
    }
    if (dateTime > rangeTime[0] && dateTime < rangeTime[1]) {
        return true;
    }
    return false;
};
var hasEvent = function (date, events) {
    return !!events.find(function (eventDate) { return isEqualDay(eventDate, date); });
};
var isToday = function (date) { return isEqualDay(new Date(), date); };
var isWithInIntervalMinMaxDade = function (date, minDate, maxDate) {
    var minDateTime = minDate === null || minDate === void 0 ? void 0 : minDate.getTime();
    var maxDateTime = maxDate === null || maxDate === void 0 ? void 0 : maxDate.getTime();
    if (minDate && maxDate && minDateTime && maxDateTime) {
        return minDateTime < maxDateTime
            ? isWithinInterval(date, { start: minDate, end: maxDate })
            : false;
    }
    var dateTime = date.getTime();
    if (minDateTime && !maxDateTime) {
        return minDateTime < dateTime;
    }
    if (!minDateTime && maxDateTime) {
        return maxDateTime > dateTime;
    }
    return true;
};
export var getDaysOfMonth = function (props) {
    var date = props.date, locale = props.locale, handleDayClick = props.handleDayClick, value = props.value, events = props.events, minDate = props.minDate, maxDate = props.maxDate;
    var currentMonth = date.getMonth();
    var startDate = startOfWeek(startOfMonth(date), { locale: locale });
    var endDate = endOfWeek(endOfMonth(date), { locale: locale });
    var diffDays = differenceInDays(endDate, startDate) + 1;
    return range(diffDays).map(function (index) {
        var date = addDays(startDate, index);
        var number = format(date, 'd');
        if (date.getMonth() === currentMonth) {
            return {
                number: number,
                onClick: handleDayClick
                    ? function (e) { return handleDayClick({ e: e, value: date }); }
                    : undefined,
                selected: isSelected({ date: date, value: value }),
                range: Array.isArray(value) && isDateInRange(date, value),
                event: events && hasEvent(date, events),
                today: isToday(date),
                disabled: !isWithInIntervalMinMaxDade(date, minDate, maxDate)
            };
        }
        return {
            number: number,
            disabled: true
        };
    });
};
var isDateRangeParams = function (params) {
    return params.type === calendarPropType[1];
};
var isNotDateRangeParams = function (params) {
    return params.type === calendarPropType[0];
};
export function getHandleSelectDate(params) {
    if (isDateRangeParams(params)) {
        var currentValue_1 = params.value || [undefined, undefined];
        return function (_a) {
            var date = _a.value, e = _a.e;
            if (params.minDate &&
                params.maxDate &&
                !isWithinInterval(date, { start: params.minDate, end: params.maxDate })) {
                return;
            }
            if (!isOnlyOneDateInRange(currentValue_1) && typeof params.onChange === 'function') {
                return params.onChange({ e: e, value: [date, undefined] });
            }
            var _b = __read(currentValue_1, 2), startDate = _b[0], endDate = _b[1];
            if ((isDefined(startDate) && isEqualDay(startDate, date)) ||
                (isDefined(endDate) && isEqualDay(endDate, date))) {
                return;
            }
            if (isDefined(startDate) && typeof params.onChange === 'function') {
                return params.onChange({
                    e: e,
                    value: startDate > date ? [date, startDate] : [startDate, date]
                });
            }
            if (isDefined(endDate) && typeof params.onChange === 'function') {
                return params.onChange({ e: e, value: endDate > date ? [date, endDate] : [endDate, date] });
            }
        };
    }
    if (isNotDateRangeParams(params)) {
        return function (props) {
            if (!isWithInIntervalMinMaxDade(props.value, params.minDate, params.maxDate)) {
                return;
            }
            if (typeof params.onChange === 'function') {
                return params.onChange(props);
            }
        };
    }
    return function () { return undefined; };
}
export var getMonthTitle = function (date, locale) {
    return format(date, 'LLLL', { locale: locale });
};
export var getMouthLabelWithYear = function (date, locale) {
    return getMonthTitle(date, locale) + " " + date.getFullYear();
};
export var getDaysOfWeek = function (locale) {
    var now = new Date();
    return eachDayOfInterval({
        start: startOfWeek(now, { locale: locale }),
        end: endOfWeek(now, { locale: locale })
    }).map(function (date) { return format(date, 'EEEEEE', { locale: locale }); });
};
var getCurrentVisibleDate = function (_a) {
    var currentVisibleDate = _a.currentVisibleDate, minDate = _a.minDate, maxDate = _a.maxDate, value = _a.value;
    var currentDate = new Date();
    if (currentVisibleDate) {
        return currentVisibleDate;
    }
    if (Array.isArray(value) && value[0]) {
        return value[0];
    }
    if (Array.isArray(value) && value[1]) {
        return value[1];
    }
    if (value && !Array.isArray(value)) {
        return value;
    }
    if (minDate && maxDate && !isDateInRange(currentDate, [minDate, maxDate])) {
        return minDate;
    }
    if (minDate && !maxDate) {
        var minDateTime = minDate.getTime();
        var currentDateTime = currentDate.getTime();
        if (currentDateTime < minDateTime) {
            return minDate;
        }
    }
    if (!minDate && maxDate) {
        var maxDateTime = maxDate.getTime();
        var currentDateTime = currentDate.getTime();
        if (currentDateTime > maxDateTime) {
            return maxDate;
        }
    }
    return currentDate;
};
export var useCurrentVisibleDate = function (props) {
    var _a, _b, _c;
    var currentVisibleDate = useMemo(function () {
        return startOfMonth(getCurrentVisibleDate(props));
    }, [
        ((_a = props.currentVisibleDate) === null || _a === void 0 ? void 0 : _a.getTime()) || 0,
        ((_b = props.minDate) === null || _b === void 0 ? void 0 : _b.getTime()) || 0,
        ((_c = props.maxDate) === null || _c === void 0 ? void 0 : _c.getTime()) || 0,
    ]);
    var state = useState(currentVisibleDate);
    useEffect(function () { return state[1](currentVisibleDate); }, [currentVisibleDate.getTime()]);
    return state;
};
