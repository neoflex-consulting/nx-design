import { __assign, __rest } from "tslib";
import './Grid.css';
import React from 'react';
import { classnames } from '@bem-react/classnames';
import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import { useBreakpoints } from './useBreakpoints';
export * from './GridItem/GridItem';
export var gridPropXAlign = ['left', 'center', 'right'];
export var gridPropYAlign = ['top', 'center', 'bottom'];
export var gridPropGap = [
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
export var breakpointSizes = ['xs', 's', 'm', 'l', 'xl', '2xl'];
export var cnGrid = cn('Grid');
export var Grid = forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, cols = props.cols, xAlign = props.xAlign, yAlign = props.yAlign, gap = props.gap, colGap = props.colGap, rowGap = props.rowGap, className = props.className, children = props.children, breakpoints = props.breakpoints, otherProps = __rest(props, ["as", "cols", "xAlign", "yAlign", "gap", "colGap", "rowGap", "className", "children", "breakpoints"]);
    var Tag = as;
    var breakpointsCn = useBreakpoints(cnGrid, breakpoints);
    return (React.createElement(Tag, __assign({}, otherProps, { className: classnames(cnGrid({
            cols: cols,
            gap: gap,
            colGap: colGap,
            rowGap: rowGap,
            xAlign: xAlign,
            yAlign: yAlign
        }), breakpointsCn, className), ref: ref }), children));
});
