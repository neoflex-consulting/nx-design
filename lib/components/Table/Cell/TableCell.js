"use strict";
exports.__esModule = true;
exports.TableCell = exports.horizontalAligns = exports.verticalAligns = void 0;
var tslib_1 = require("tslib");
require("./TableCell.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var cnTableCell = bem_1.cn('TableCell');
exports.verticalAligns = ['top', 'center', 'bottom'];
exports.horizontalAligns = ['left', 'center', 'right'];
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
exports.TableCell = react_1["default"].forwardRef(function (props, ref) {
    var style = props.style, onClick = props.onClick, children = props.children;
    var propsWithRole = onClick
        ? {
            role: 'button',
            onClick: onClick
        }
        : {
            role: 'cell'
        };
    return (react_1["default"].createElement("div", tslib_1.__assign({}, propsWithRole, { ref: ref, className: getCellClasses(props), style: style }),
        react_1["default"].createElement("div", { className: getWrapperClasses(props) }, children)));
});
