import { __assign } from "tslib";
import { classnames } from '@bem-react/classnames';
import { isEmpty } from '../../utils/object';
var generateBreakpointCn = function (cn, size, breakpoint) {
    var cnProps = Object.keys(breakpoint).reduce(function (previous, current) {
        var _a;
        return __assign(__assign({}, previous), (_a = {}, _a[size + ":" + current] = breakpoint[current] === undefined ? undefined : "" + breakpoint[current], _a));
    }, {});
    return cn(cnProps);
};
export var generateBreakpointsCn = function (cn, breakpoints) {
    if (!breakpoints || isEmpty(breakpoints)) {
        return '';
    }
    return Object.keys(breakpoints).reduce(function (previous, current) {
        var breakpoint = breakpoints[current];
        if (breakpoint && !isEmpty(breakpoint)) {
            return classnames(previous, generateBreakpointCn(cn, current, breakpoint));
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
export var useBreakpoints = function (cn, breakpoints) {
    return generateBreakpointsCn(cn, breakpoints);
};
