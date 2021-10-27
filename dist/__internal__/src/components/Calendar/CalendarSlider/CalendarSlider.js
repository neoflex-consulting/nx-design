import { __assign, __rest } from "tslib";
import './CalendarSlider.css';
import React, { useEffect, useRef } from 'react';
import { addMonths, addYears, endOfYear, format, getMonth, getYear, startOfYear, } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { IconForward } from '../../../icons/IconForward/IconForward';
import { range } from '../../../utils/array';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Text } from '../../Text/Text';
export var cnCalendarSlider = cn('CalendarSlider');
var isCurrentVisibleYear = function (currentDate, month) {
    return getYear(currentDate) === getYear(month);
};
var isCurrentVisibleMonth = function (currentDate, month) {
    return isCurrentVisibleYear(currentDate, month) && getMonth(currentDate) === getMonth(month);
};
var getValueRange = function (yearDate, value) {
    if (!Array.isArray(value)) {
        return undefined;
    }
    if (!value[0] || !value[1]) {
        return undefined;
    }
    var yearStartDateTime = startOfYear(yearDate).getTime();
    var yearEndDateTime = endOfYear(yearDate).getTime();
    var valueStartDateTime = value[0].getTime();
    var valueEndDateTime = value[1].getTime();
    if (valueStartDateTime > yearEndDateTime || valueEndDateTime < yearStartDateTime) {
        return undefined;
    }
    if (valueStartDateTime <= yearStartDateTime && valueEndDateTime >= yearEndDateTime) {
        return [0, 100];
    }
    var msInYear = yearEndDateTime - yearStartDateTime;
    var inProcent = function (number) { return (number / msInYear) * 100; };
    var offset = Math.floor(inProcent(valueStartDateTime <= yearStartDateTime ? 0 : valueStartDateTime - yearStartDateTime));
    var minusYears = function (n) {
        if (n > msInYear) {
            var newNumber = n - msInYear;
            return minusYears(newNumber);
        }
        return n;
    };
    var width = Math.ceil(valueEndDateTime >= yearEndDateTime
        ? 100 - offset
        : inProcent(minusYears(valueEndDateTime - valueStartDateTime)));
    return [offset, width];
};
var getMonthsData = function (date, locale) {
    return range(12).map(function (month) {
        var monthDate = addMonths(date, month);
        return {
            date: monthDate,
            label: format(monthDate, 'MMM', { locale: locale })
        };
    });
};
var getYearDate = function (date) { return new Date(getYear(date), 0, 1, 0, 0, 0, 0); };
var getSliderData = function (date, value, locale) {
    var currentYear = getYearDate(date);
    return [
        addYears(currentYear, -1),
        currentYear,
        addYears(currentYear, 1),
        addYears(currentYear, 2),
    ].map(function (date, index) { return ({
        label: format(date, 'yyyy', { locale: locale }),
        date: date,
        months: getMonthsData(date, locale),
        positon: "" + index,
        valueRange: getValueRange(date, value)
    }); });
};
export var CalendarSlider = function (props) {
    var currentVisibleDate = props.currentVisibleDate, className = props.className, onChange = props.onChange, value = props.value, _a = props.locale, locale = _a === void 0 ? ruLocale : _a, otherProps = __rest(props, ["currentVisibleDate", "className", "onChange", "value", "locale"]);
    var currentMonthRef = useRef(null);
    var sliderRef = useRef(null);
    var handlePrev = function () { return onChange(addYears(currentVisibleDate, -1)); };
    var handleNext = function () { return onChange(addYears(currentVisibleDate, 1)); };
    useEffect(function () {
        if (currentMonthRef.current && sliderRef.current) {
            sliderRef.current.style.setProperty('--selector-offset', currentMonthRef.current.offsetLeft + "px");
        }
    }, [currentVisibleDate]);
    var data = getSliderData(currentVisibleDate, value, locale);
    return (React.createElement("div", __assign({}, otherProps, { className: cnCalendarSlider(null, [className]) }),
        React.createElement(Button, { className: cnCalendarSlider('Button', { direction: 'prev' }), view: "ghost", iconLeft: IconForward, onClick: handlePrev }),
        React.createElement("div", { className: cnCalendarSlider('Slider'), ref: sliderRef },
            React.createElement("div", { className: cnCalendarSlider('SliderBody') },
                React.createElement("div", { className: cnCalendarSlider('Selector') }),
                data.map(function (year) { return (React.createElement(Text, { className: cnCalendarSlider('YearLabel', { position: year.positon }), weight: "bold", size: "s", key: year.label, view: isCurrentVisibleYear(currentVisibleDate, year.date) ? undefined : 'ghost' }, year.label)); }),
                data.map(function (year) {
                    var _a;
                    return (React.createElement("div", { key: year.label, className: cnCalendarSlider('Year', {
                            position: year.positon,
                            selected: !!year.valueRange
                        }), style: year.valueRange && (_a = {},
                            _a['--value-offset'] = year.valueRange[0] + "%",
                            _a['--value-width'] = year.valueRange[1] + "%",
                            _a) }, year.months.map(function (month, index) { return (React.createElement("button", { className: cnCalendarSlider('Month'), key: index, onClick: function () { return onChange(month.date); }, onKeyDown: function () { return onChange(addMonths(month.date, 1)); }, ref: isCurrentVisibleMonth(currentVisibleDate, month.date) ? currentMonthRef : null, type: "button" },
                        React.createElement(Text, { className: cnCalendarSlider('MonthLabel'), size: "2xs", view: "ghost", align: "center" }, month.label))); })));
                }))),
        React.createElement(Button, { className: cnCalendarSlider('Button', { direction: 'next' }), view: "ghost", iconLeft: IconForward, onClick: handleNext })));
};
