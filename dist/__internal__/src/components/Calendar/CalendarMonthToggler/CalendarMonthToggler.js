import { __assign, __rest } from "tslib";
import './CalendarMonthToggler.css';
import React from 'react';
import { IconForward } from '../../../icons/IconForward/IconForward';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { CalendarMonthLabel } from '../CalendarMonthLabel/CalendarMonthLabel';
export var cnCalendarMonthToggler = cn('CalendarMonthToggler');
export var CalendarMonthToggler = function (props) {
    var label = props.label, className = props.className, prevOnClick = props.prevOnClick, nextOnClick = props.nextOnClick, otherProps = __rest(props, ["label", "className", "prevOnClick", "nextOnClick"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnCalendarMonthToggler({ withPrevButton: Boolean(prevOnClick), withNextButton: Boolean(nextOnClick) }, [className]) }),
        prevOnClick && (React.createElement(Button, { className: cnCalendarMonthToggler('Button', { direction: 'prev' }), onClick: prevOnClick, iconLeft: IconForward, size: "s", view: "clear", iconSize: "s" })),
        React.createElement(CalendarMonthLabel, { className: cnCalendarMonthToggler('Label'), label: label }),
        nextOnClick && (React.createElement(Button, { className: cnCalendarMonthToggler('Button', { direction: 'next' }), onClick: nextOnClick, iconLeft: IconForward, size: "s", view: "clear", iconSize: "s" }))));
};
