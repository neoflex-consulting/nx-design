import { __assign, __rest } from "tslib";
import './GridItem.css';
import React from 'react';
import { classnames } from '@bem-react/classnames';
import { cn } from '../../../utils/bem';
import { forwardRefWithAs } from '../../../utils/types/PropsWithAsAttributes';
import { useBreakpoints } from '../useBreakpoints';
export var cnGridItem = cn('GridItem');
export var GridItem = forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, col = props.col, colStart = props.colStart, row = props.row, rowStart = props.rowStart, order = props.order, className = props.className, children = props.children, breakpoints = props.breakpoints, otherProps = __rest(props, ["as", "col", "colStart", "row", "rowStart", "order", "className", "children", "breakpoints"]);
    var Tag = as;
    var breakpointsCn = useBreakpoints(cnGridItem, breakpoints);
    return (React.createElement(Tag, __assign({}, otherProps, { className: classnames(cnGridItem({
            col: col,
            colStart: colStart,
            row: row,
            rowStart: rowStart,
            order: order
        }), breakpointsCn, className), ref: ref }), children));
});
