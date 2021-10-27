"use strict";
exports.__esModule = true;
exports.useCurrentVisibleDate = exports.getDaysOfWeek = exports.getMouthLabelWithYear = exports.getMonthTitle = exports.getHandleSelectDate = exports.getDaysOfMonth = exports.isValueSelectedBackwards = exports.isValueSelected = exports.isDateSelected = exports.getStartAndEndDate = exports.dateComparer = exports.calendarPropTypeDefault = exports.calendarPropType = exports.calendarPropViewDefault = exports.calendarPropView = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var date_fns_1 = require("date-fns");
var eachDayOfInterval_1 = tslib_1.__importDefault(require("date-fns/eachDayOfInterval"));
var array_1 = require("../../utils/array");
var date_1 = require("../../utils/date");
var type_guards_1 = require("../../utils/type-guards");
exports.calendarPropView = ['oneMonth', 'twoMonths', 'slider'];
exports.calendarPropViewDefault = exports.calendarPropView[0];
exports.calendarPropType = ['date', 'date-range'];
exports.calendarPropTypeDefault = exports.calendarPropType[0];
var isEqualDate = function (date1, date2) { return date1.getTime() === date2.getTime(); };
var isEqualDay = function (date1, date2) {
    return isEqualDate(date_fns_1.startOfDay(date1), date_fns_1.startOfDay(date2));
};
exports.dateComparer = function (a, b) { var _a, _b; return ((_a = a === null || a === void 0 ? void 0 : a.getTime()) !== null && _a !== void 0 ? _a : 0) - ((_b = b === null || b === void 0 ? void 0 : b.getTime()) !== null && _b !== void 0 ? _b : 0); };
exports.getStartAndEndDate = function (date1, date2) {
    return [date1, date2].sort(exports.dateComparer);
};
exports.isDateSelected = function (_a) {
    var date = _a.date, value = _a.value;
    return value ? date_fns_1.isSameDay(value, date) : false;
};
exports.isValueSelected = function (_a) {
    var date = _a.date, value = _a.value;
    if (date_1.isDateRange(value)) {
        if (value[0] && value[1]) {
            var _b = tslib_1.__read(exports.getStartAndEndDate(value[0], value[1]), 2), start = _b[0], end = _b[1];
            return date_fns_1.isWithinInterval(date, { start: start, end: end });
        }
        return exports.isDateSelected({ date: date, value: value[0] || value[1] });
    }
    return exports.isDateSelected({ date: date, value: value });
};
exports.isValueSelectedBackwards = function (_a) {
    var value = _a.value, hoveredDate = _a.hoveredDate;
    return (hoveredDate &&
        date_1.isDateRange(value) &&
        date_1.isOnlyOneDateInRange(value) &&
        ((type_guards_1.isDefined(value[0]) && date_fns_1.isBefore(hoveredDate, value[0])) ||
            (type_guards_1.isDefined(value[1]) && date_fns_1.isBefore(hoveredDate, value[1]))));
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
            ? date_fns_1.isWithinInterval(date, { start: minDate, end: maxDate })
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
exports.getDaysOfMonth = function (props) {
    var date = props.date, locale = props.locale, handleDayClick = props.handleDayClick, value = props.value, events = props.events, minDate = props.minDate, maxDate = props.maxDate;
    var currentMonth = date.getMonth();
    var startDate = date_fns_1.startOfWeek(date_fns_1.startOfMonth(date), { locale: locale });
    var endDate = date_fns_1.endOfWeek(date_fns_1.endOfMonth(date), { locale: locale });
    var diffDays = date_fns_1.differenceInDays(endDate, startDate) + 1;
    return array_1.range(diffDays).map(function (index) {
        var date = date_fns_1.addDays(startDate, index);
        var number = date_fns_1.format(date, 'd');
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
    return params.type === exports.calendarPropType[1];
};
var isNotDateRangeParams = function (params) {
    return params.type === exports.calendarPropType[0];
};
function getHandleSelectDate(params) {
    if (isDateRangeParams(params)) {
        var currentValue_1 = params.value || [undefined, undefined];
        return function (_a) {
            var date = _a.value, e = _a.e;
            if (params.minDate &&
                params.maxDate &&
                !date_fns_1.isWithinInterval(date, { start: params.minDate, end: params.maxDate })) {
                return;
            }
            if (!date_1.isOnlyOneDateInRange(currentValue_1) && typeof params.onChange === 'function') {
                return params.onChange({ e: e, value: [date, undefined] });
            }
            var _b = tslib_1.__read(currentValue_1, 2), startDate = _b[0], endDate = _b[1];
            if ((type_guards_1.isDefined(startDate) && isEqualDay(startDate, date)) ||
                (type_guards_1.isDefined(endDate) && isEqualDay(endDate, date))) {
                return;
            }
            if (type_guards_1.isDefined(startDate) && typeof params.onChange === 'function') {
                return params.onChange({
                    e: e,
                    value: startDate > date ? [date, startDate] : [startDate, date]
                });
            }
            if (type_guards_1.isDefined(endDate) && typeof params.onChange === 'function') {
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
exports.getHandleSelectDate = getHandleSelectDate;
exports.getMonthTitle = function (date, locale) {
    return date_fns_1.format(date, 'LLLL', { locale: locale });
};
exports.getMouthLabelWithYear = function (date, locale) {
    return exports.getMonthTitle(date, locale) + " " + date.getFullYear();
};
exports.getDaysOfWeek = function (locale) {
    var now = new Date();
    return eachDayOfInterval_1["default"]({
        start: date_fns_1.startOfWeek(now, { locale: locale }),
        end: date_fns_1.endOfWeek(now, { locale: locale })
    }).map(function (date) { return date_fns_1.format(date, 'EEEEEE', { locale: locale }); });
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
exports.useCurrentVisibleDate = function (props) {
    var _a, _b, _c;
    var currentVisibleDate = react_1.useMemo(function () {
        return date_fns_1.startOfMonth(getCurrentVisibleDate(props));
    }, [
        ((_a = props.currentVisibleDate) === null || _a === void 0 ? void 0 : _a.getTime()) || 0,
        ((_b = props.minDate) === null || _b === void 0 ? void 0 : _b.getTime()) || 0,
        ((_c = props.maxDate) === null || _c === void 0 ? void 0 : _c.getTime()) || 0,
    ]);
    var state = react_1.useState(currentVisibleDate);
    react_1.useEffect(function () { return state[1](currentVisibleDate); }, [currentVisibleDate.getTime()]);
    return state;
};
