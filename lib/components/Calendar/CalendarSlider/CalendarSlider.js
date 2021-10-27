"use strict";
exports.__esModule = true;
exports.CalendarSlider = exports.cnCalendarSlider = void 0;
var tslib_1 = require("tslib");
require("./CalendarSlider.css");
var react_1 = tslib_1.__importStar(require("react"));
var date_fns_1 = require("date-fns");
var ru_1 = tslib_1.__importDefault(require("date-fns/locale/ru"));
var IconForward_1 = require("../../../icons/IconForward/IconForward");
var array_1 = require("../../../utils/array");
var bem_1 = require("../../../utils/bem");
var Button_1 = require("../../Button/Button");
var Text_1 = require("../../Text/Text");
exports.cnCalendarSlider = bem_1.cn('CalendarSlider');
var isCurrentVisibleYear = function (currentDate, month) {
    return date_fns_1.getYear(currentDate) === date_fns_1.getYear(month);
};
var isCurrentVisibleMonth = function (currentDate, month) {
    return isCurrentVisibleYear(currentDate, month) && date_fns_1.getMonth(currentDate) === date_fns_1.getMonth(month);
};
var getValueRange = function (yearDate, value) {
    if (!Array.isArray(value)) {
        return undefined;
    }
    if (!value[0] || !value[1]) {
        return undefined;
    }
    var yearStartDateTime = date_fns_1.startOfYear(yearDate).getTime();
    var yearEndDateTime = date_fns_1.endOfYear(yearDate).getTime();
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
    return array_1.range(12).map(function (month) {
        var monthDate = date_fns_1.addMonths(date, month);
        return {
            date: monthDate,
            label: date_fns_1.format(monthDate, 'MMM', { locale: locale })
        };
    });
};
var getYearDate = function (date) { return new Date(date_fns_1.getYear(date), 0, 1, 0, 0, 0, 0); };
var getSliderData = function (date, value, locale) {
    var currentYear = getYearDate(date);
    return [
        date_fns_1.addYears(currentYear, -1),
        currentYear,
        date_fns_1.addYears(currentYear, 1),
        date_fns_1.addYears(currentYear, 2),
    ].map(function (date, index) { return ({
        label: date_fns_1.format(date, 'yyyy', { locale: locale }),
        date: date,
        months: getMonthsData(date, locale),
        positon: "" + index,
        valueRange: getValueRange(date, value)
    }); });
};
exports.CalendarSlider = function (props) {
    var currentVisibleDate = props.currentVisibleDate, className = props.className, onChange = props.onChange, value = props.value, _a = props.locale, locale = _a === void 0 ? ru_1["default"] : _a, otherProps = tslib_1.__rest(props, ["currentVisibleDate", "className", "onChange", "value", "locale"]);
    var currentMonthRef = react_1.useRef(null);
    var sliderRef = react_1.useRef(null);
    var handlePrev = function () { return onChange(date_fns_1.addYears(currentVisibleDate, -1)); };
    var handleNext = function () { return onChange(date_fns_1.addYears(currentVisibleDate, 1)); };
    react_1.useEffect(function () {
        if (currentMonthRef.current && sliderRef.current) {
            sliderRef.current.style.setProperty('--selector-offset', currentMonthRef.current.offsetLeft + "px");
        }
    }, [currentVisibleDate]);
    var data = getSliderData(currentVisibleDate, value, locale);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnCalendarSlider(null, [className]) }),
        react_1["default"].createElement(Button_1.Button, { className: exports.cnCalendarSlider('Button', { direction: 'prev' }), view: "ghost", iconLeft: IconForward_1.IconForward, onClick: handlePrev }),
        react_1["default"].createElement("div", { className: exports.cnCalendarSlider('Slider'), ref: sliderRef },
            react_1["default"].createElement("div", { className: exports.cnCalendarSlider('SliderBody') },
                react_1["default"].createElement("div", { className: exports.cnCalendarSlider('Selector') }),
                data.map(function (year) { return (react_1["default"].createElement(Text_1.Text, { className: exports.cnCalendarSlider('YearLabel', { position: year.positon }), weight: "bold", size: "s", key: year.label, view: isCurrentVisibleYear(currentVisibleDate, year.date) ? undefined : 'ghost' }, year.label)); }),
                data.map(function (year) {
                    var _a;
                    return (react_1["default"].createElement("div", { key: year.label, className: exports.cnCalendarSlider('Year', {
                            position: year.positon,
                            selected: !!year.valueRange
                        }), style: year.valueRange && (_a = {},
                            _a['--value-offset'] = year.valueRange[0] + "%",
                            _a['--value-width'] = year.valueRange[1] + "%",
                            _a) }, year.months.map(function (month, index) { return (react_1["default"].createElement("button", { className: exports.cnCalendarSlider('Month'), key: index, onClick: function () { return onChange(month.date); }, onKeyDown: function () { return onChange(date_fns_1.addMonths(month.date, 1)); }, ref: isCurrentVisibleMonth(currentVisibleDate, month.date) ? currentMonthRef : null, type: "button" },
                        react_1["default"].createElement(Text_1.Text, { className: exports.cnCalendarSlider('MonthLabel'), size: "2xs", view: "ghost", align: "center" }, month.label))); })));
                }))),
        react_1["default"].createElement(Button_1.Button, { className: exports.cnCalendarSlider('Button', { direction: 'next' }), view: "ghost", iconLeft: IconForward_1.IconForward, onClick: handleNext })));
};
