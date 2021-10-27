"use strict";
exports.__esModule = true;
exports.useBreakpoints = exports.generateBreakpointsCn = void 0;
var tslib_1 = require("tslib");
var classnames_1 = require("@bem-react/classnames");
var object_1 = require("../../utils/object");
var generateBreakpointCn = function (cn, size, breakpoint) {
    var cnProps = Object.keys(breakpoint).reduce(function (previous, current) {
        var _a;
        return tslib_1.__assign(tslib_1.__assign({}, previous), (_a = {}, _a[size + ":" + current] = breakpoint[current] === undefined ? undefined : "" + breakpoint[current], _a));
    }, {});
    return cn(cnProps);
};
exports.generateBreakpointsCn = function (cn, breakpoints) {
    if (!breakpoints || object_1.isEmpty(breakpoints)) {
        return '';
    }
    return Object.keys(breakpoints).reduce(function (previous, current) {
        var breakpoint = breakpoints[current];
        if (breakpoint && !object_1.isEmpty(breakpoint)) {
            return classnames_1.classnames(previous, generateBreakpointCn(cn, current, breakpoint));
        }
        return '';
    }, '');
};
/**
 *
 * @param cn ClassNameFormatter
 * @param breakpoints Breakpoints
 *
 * хук вернет сгенерированный класс на основе `breakpoints`
 *
 * Пример:
 *
 * cn = cn('Grid')
 *
 * breakpoints = {
 * xs: {
 *   gap: 0,
 *   cols: 12,
 *   xAlign: 'center',
 *   yAlign: 'center',
 * },
 * s: {
 *   gap: 33,
 *   cols: 12,
 *   xAlign: 'center',
 *   yAlign: 'center',
 * }
 * }
 *
 * =>
 *
 * Grid Grid_xs:gap_0 Grid_xs:cols_12 Grid_xs:xAlign_center Grid_xs:yAlign_center Grid_s:gap_33 Grid_s:cols_12 Grid_s:xAlign_center Grid_s:yAlign_center
 *
 */
exports.useBreakpoints = function (cn, breakpoints) {
    return exports.generateBreakpointsCn(cn, breakpoints);
};
