"use strict";
exports.__esModule = true;
exports.CalendarDay = exports.cnCalendarDay = void 0;
var tslib_1 = require("tslib");
require("./CalendarDay.css");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = require("@bem-react/classnames");
var bem_1 = require("../../../utils/bem");
var Theme_1 = require("../../Theme/Theme");
exports.cnCalendarDay = bem_1.cn('CalendarDay');
exports.CalendarDay = react_1["default"].forwardRef(function (props, ref) {
    var number = props.number, today = props.today, selected = props.selected, event = props.event, disabled = props.disabled, otherProps = tslib_1.__rest(props, ["number", "today", "selected", "event", "disabled"]);
    var themeClassNames = Theme_1.useTheme().themeClassNames;
    var className = selected && !disabled
        ? classnames_1.classnames(props.className, themeClassNames.color.accent)
        : props.className;
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnCalendarDay({ event: event, today: today, disabled: disabled, selected: selected }, [className]), role: "button" }), number));
});
