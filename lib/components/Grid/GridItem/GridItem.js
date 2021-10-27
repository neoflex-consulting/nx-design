"use strict";
exports.__esModule = true;
exports.GridItem = exports.cnGridItem = void 0;
var tslib_1 = require("tslib");
require("./GridItem.css");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = require("@bem-react/classnames");
var bem_1 = require("../../../utils/bem");
var PropsWithAsAttributes_1 = require("../../../utils/types/PropsWithAsAttributes");
var useBreakpoints_1 = require("../useBreakpoints");
exports.cnGridItem = bem_1.cn('GridItem');
exports.GridItem = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, col = props.col, colStart = props.colStart, row = props.row, rowStart = props.rowStart, order = props.order, className = props.className, children = props.children, breakpoints = props.breakpoints, otherProps = tslib_1.__rest(props, ["as", "col", "colStart", "row", "rowStart", "order", "className", "children", "breakpoints"]);
    var Tag = as;
    var breakpointsCn = useBreakpoints_1.useBreakpoints(exports.cnGridItem, breakpoints);
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { className: classnames_1.classnames(exports.cnGridItem({
            col: col,
            colStart: colStart,
            row: row,
            rowStart: rowStart,
            order: order
        }), breakpointsCn, className), ref: ref }), children));
});
