import { __assign, __rest } from "tslib";
import './CalendarMonth.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { Text } from '../../Text/Text';
import { CalendarDay } from '../CalendarDay/CalendarDay';
import { CalendarCell } from '../CalendarСell/CalendarСell';
export var cnCalendarMonth = cn('CalendarMonth');
export var CalendarMonth = function (props) {
    var className = props.className, daysOfWeek = props.daysOfWeek, daysOfMonth = props.daysOfMonth, otherProps = __rest(props, ["className", "daysOfWeek", "daysOfMonth"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnCalendarMonth(null, [className]) }),
        daysOfWeek.map(function (item, index) { return (React.createElement(CalendarCell, { key: cnCalendarMonth('DayOfWeek', { index: index, item: item }) },
            React.createElement(Text, { as: "span", view: "ghost", size: "2xs", transform: "uppercase" }, item))); }),
        daysOfMonth.map(function (_a, index) {
            var range = _a.range, dayProps = __rest(_a, ["range"]);
            return (React.createElement(CalendarCell, { key: cnCalendarMonth('DayOfMonth', { index: index, number: dayProps.number }), range: range },
                React.createElement(CalendarDay, __assign({}, dayProps))));
        })));
};
