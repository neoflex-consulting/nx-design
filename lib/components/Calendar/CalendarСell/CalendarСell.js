"use strict";
exports.__esModule = true;
exports.CalendarCell = exports.cnCalendarCell = exports.calendarCellPropRange = void 0;
var tslib_1 = require("tslib");
require("./Calendar\u0421ell.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
exports.calendarCellPropRange = ['first', 'last', true, false];
exports.cnCalendarCell = bem_1.cn('CalendarСell');
exports.CalendarCell = function (props) {
    var range = props.range, children = props.children, className = props.className, otherProps = tslib_1.__rest(props, ["range", "children", "className"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnCalendarCell({ range: range }, [className]) }), children));
};
