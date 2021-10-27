import { __assign } from "tslib";
import './TableCell.css';
import React from 'react';
import { cn } from '../../../utils/bem';
var cnTableCell = cn('TableCell');
export var verticalAligns = ['top', 'center', 'bottom'];
export var horizontalAligns = ['left', 'center', 'right'];
var getCellClasses = function (props) {
    var column = props.column, showVerticalShadow = props.showVerticalShadow, className = props.className;
    return cnTableCell({
        showVerticalShadow: showVerticalShadow,
        isSticky: column.isSticky,
        isResized: props.type === 'header' ? props.isResized : column.isResized,
        isSortable: column.sortable,
        isHeader: props.type === 'header',
        isResizer: props.type === 'resizer',
        stickyOnTop: (props.type === 'header' && props.isSticky) || props.type === 'resizer',
        stickyOnLeft: column.isSticky,
        isFilterable: column.filterable,
        withoutBorder: props.type === 'resizer',
        isClickable: 'isClickable' in props && props.isClickable,
        isBorderTop: 'isBorderTop' in props && props.isBorderTop,
        isBorderLeft: 'isBorderLeft' in props && props.isBorderLeft
    }, [className]);
};
var getWrapperClasses = function (props) {
    var column = props.column, wrapperClassName = props.wrapperClassName;
    return cnTableCell('Wrapper', {
        withoutPadding: column.withoutPadding || props.type === 'resizer',
        verticalAlign: props.verticalAlign,
        horizontalAlign: column.align
    }, [wrapperClassName]);
};
export var TableCell = React.forwardRef(function (props, ref) {
    var style = props.style, onClick = props.onClick, children = props.children;
    var propsWithRole = onClick
        ? {
            role: 'button',
            onClick: onClick
        }
        : {
            role: 'cell'
        };
    return (React.createElement("div", __assign({}, propsWithRole, { ref: ref, className: getCellClasses(props), style: style }),
        React.createElement("div", { className: getWrapperClasses(props) }, children)));
});
