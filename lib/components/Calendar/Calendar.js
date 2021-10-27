"use strict";
exports.__esModule = true;
exports.Calendar = exports.cnCalendar = void 0;
var tslib_1 = require("tslib");
require("./Calendar.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var CalendarViewOneMonth_1 = require("./CalendarViewOneMonth/CalendarViewOneMonth");
var CalendarViewSlider_1 = require("./CalendarViewSlider/CalendarViewSlider");
var CalendarViewTwoMonths_1 = require("./CalendarViewTwoMonths/CalendarViewTwoMonths");
var helpers_1 = require("./helpers");
exports.cnCalendar = bem_1.cn('Calendar');
var viewMap = {
    oneMonth: CalendarViewOneMonth_1.CalendarViewOneMonth,
    twoMonths: CalendarViewTwoMonths_1.CalendarViewTwoMonths,
    slider: CalendarViewSlider_1.CalendarViewSlider
};
exports.Calendar = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.view, view = _a === void 0 ? helpers_1.calendarPropViewDefault : _a, className = props.className, otherProps = tslib_1.__rest(props, ["view", "className"]);
    var ViewComponent = getSizeByMap_1.getSizeByMap(viewMap, view);
    return react_1["default"].createElement(ViewComponent, tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnCalendar(null, [className]) }));
});
tslib_1.__exportStar(require("./Calendar\u0421ell/Calendar\u0421ell"), exports);
tslib_1.__exportStar(require("./CalendarDay/CalendarDay"), exports);
tslib_1.__exportStar(require("./CalendarMonth/CalendarMonth"), exports);
tslib_1.__exportStar(require("./CalendarMonthLabel/CalendarMonthLabel"), exports);
tslib_1.__exportStar(require("./CalendarMonthToggler/CalendarMonthToggler"), exports);
tslib_1.__exportStar(require("./CalendarSlider/CalendarSlider"), exports);
tslib_1.__exportStar(require("./CalendarViewOneMonth/CalendarViewOneMonth"), exports);
tslib_1.__exportStar(require("./CalendarViewSlider/CalendarViewSlider"), exports);
tslib_1.__exportStar(require("./CalendarViewTwoMonths/CalendarViewTwoMonths"), exports);
