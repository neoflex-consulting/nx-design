"use strict";
exports.__esModule = true;
exports.TableRowsCollapse = exports.cnTableRowsCollapse = void 0;
var tslib_1 = require("tslib");
require("./TableRowsCollapse.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconArrowDown_1 = require("../../../icons/IconArrowDown/IconArrowDown");
var IconArrowUp_1 = require("../../../icons/IconArrowUp/IconArrowUp");
var bem_1 = require("../../../utils/bem");
var index_1 = require("../../index");
exports.cnTableRowsCollapse = bem_1.cn('TableRowsCollapse');
exports.TableRowsCollapse = function (props) {
    var level = props.level, children = props.children, isExpanded = props.isExpanded, toggleCollapse = props.toggleCollapse, withCollapseButton = props.withCollapseButton, isExpandedByDefault = props.isExpandedByDefault;
    var style = { '--nesting-level': level };
    return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    react_1["default"].createElement("div", { style: style, className: exports.cnTableRowsCollapse(), onClick: toggleCollapse, onKeyDown: toggleCollapse },
        !isExpandedByDefault && withCollapseButton && (react_1["default"].createElement("div", { className: exports.cnTableRowsCollapse('buttonContainer') },
            react_1["default"].createElement(index_1.Button, { iconLeft: isExpanded ? IconArrowUp_1.IconArrowUp : IconArrowDown_1.IconArrowDown, iconSize: "s", size: "xs", onlyIcon: true, view: "clear" }))),
        react_1["default"].createElement("div", { className: exports.cnTableRowsCollapse('cellContainer', {
                withExpanderPadding: !isExpandedByDefault
            }) }, children)));
};
