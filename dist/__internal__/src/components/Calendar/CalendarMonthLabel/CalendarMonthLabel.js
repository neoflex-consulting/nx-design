import { __assign, __rest } from "tslib";
import './CalendarMonthLabel.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { Text } from '../../Text/Text';
export var cnCalendarMonthLabel = cn('CalendarMonthLabel');
export var CalendarMonthLabel = function (props) {
    var label = props.label, className = props.className, otherProps = __rest(props, ["label", "className"]);
    return (React.createElement(Text, __assign({}, otherProps, { className: cnCalendarMonthLabel(null, [className]), as: "span", size: "s", align: "center", weight: "bold" }), label));
};
