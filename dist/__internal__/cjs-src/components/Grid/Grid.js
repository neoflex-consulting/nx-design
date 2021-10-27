"use strict";
exports.__esModule = true;
exports.Grid = exports.cnGrid = exports.breakpointSizes = exports.gridPropGap = exports.gridPropYAlign = exports.gridPropXAlign = void 0;
var tslib_1 = require("tslib");
require("./Grid.css");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = require("@bem-react/classnames");
var bem_1 = require("../../utils/bem");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
var useBreakpoints_1 = require("./useBreakpoints");
tslib_1.__exportStar(require("./GridItem/GridItem"), exports);
exports.gridPropXAlign = ['left', 'center', 'right'];
exports.gridPropYAlign = ['top', 'center', 'bottom'];
exports.gridPropGap = [
    0,
    '2xs',
    'xs',
    's',
    'm',
    'l',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
];
exports.breakpointSizes = ['xs', 's', 'm', 'l', 'xl', '2xl'];
exports.cnGrid = bem_1.cn('Grid');
exports.Grid = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, cols = props.cols, xAlign = props.xAlign, yAlign = props.yAlign, gap = props.gap, colGap = props.colGap, rowGap = props.rowGap, className = props.className, children = props.children, breakpoints = props.breakpoints, otherProps = tslib_1.__rest(props, ["as", "cols", "xAlign", "yAlign", "gap", "colGap", "rowGap", "className", "children", "breakpoints"]);
    var Tag = as;
    var breakpointsCn = useBreakpoints_1.useBreakpoints(exports.cnGrid, breakpoints);
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { className: classnames_1.classnames(exports.cnGrid({
            cols: cols,
            gap: gap,
            colGap: colGap,
            rowGap: rowGap,
            xAlign: xAlign,
            yAlign: yAlign
        }), breakpointsCn, className), ref: ref }), children));
});
