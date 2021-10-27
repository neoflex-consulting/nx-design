import { __assign, __rest } from "tslib";
import './CalendarСell.css';
import React from 'react';
import { cn } from '../../../utils/bem';
export var calendarCellPropRange = ['first', 'last', true, false];
export var cnCalendarCell = cn('CalendarСell');
export var CalendarCell = function (props) {
    var range = props.range, children = props.children, className = props.className, otherProps = __rest(props, ["range", "children", "className"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnCalendarCell({ range: range }, [className]) }), children));
};
