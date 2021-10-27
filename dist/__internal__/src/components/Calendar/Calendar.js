import { __assign, __rest } from "tslib";
import './Calendar.css';
import React from 'react';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { CalendarViewOneMonth } from './CalendarViewOneMonth/CalendarViewOneMonth';
import { CalendarViewSlider } from './CalendarViewSlider/CalendarViewSlider';
import { CalendarViewTwoMonths } from './CalendarViewTwoMonths/CalendarViewTwoMonths';
import { calendarPropViewDefault, } from './helpers';
export var cnCalendar = cn('Calendar');
var viewMap = {
    oneMonth: CalendarViewOneMonth,
    twoMonths: CalendarViewTwoMonths,
    slider: CalendarViewSlider
};
export var Calendar = React.forwardRef(function (props, ref) {
    var _a = props.view, view = _a === void 0 ? calendarPropViewDefault : _a, className = props.className, otherProps = __rest(props, ["view", "className"]);
    var ViewComponent = getSizeByMap(viewMap, view);
    return React.createElement(ViewComponent, __assign({}, otherProps, { ref: ref, className: cnCalendar(null, [className]) }));
});
export * from './CalendarСell/CalendarСell';
export * from './CalendarDay/CalendarDay';
export * from './CalendarMonth/CalendarMonth';
export * from './CalendarMonthLabel/CalendarMonthLabel';
export * from './CalendarMonthToggler/CalendarMonthToggler';
export * from './CalendarSlider/CalendarSlider';
export * from './CalendarViewOneMonth/CalendarViewOneMonth';
export * from './CalendarViewSlider/CalendarViewSlider';
export * from './CalendarViewTwoMonths/CalendarViewTwoMonths';
