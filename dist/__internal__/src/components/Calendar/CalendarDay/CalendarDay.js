import { __assign, __rest } from "tslib";
import './CalendarDay.css';
import React from 'react';
import { classnames } from '@bem-react/classnames';
import { cn } from '../../../utils/bem';
import { useTheme } from '../../Theme/Theme';
export var cnCalendarDay = cn('CalendarDay');
export var CalendarDay = React.forwardRef(function (props, ref) {
    var number = props.number, today = props.today, selected = props.selected, event = props.event, disabled = props.disabled, otherProps = __rest(props, ["number", "today", "selected", "event", "disabled"]);
    var themeClassNames = useTheme().themeClassNames;
    var className = selected && !disabled
        ? classnames(props.className, themeClassNames.color.accent)
        : props.className;
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnCalendarDay({ event: event, today: today, disabled: disabled, selected: selected }, [className]), role: "button" }), number));
});
