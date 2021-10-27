import './TableRowsCollapse.css';
import React from 'react';
import { IconArrowDown } from '../../../icons/IconArrowDown/IconArrowDown';
import { IconArrowUp } from '../../../icons/IconArrowUp/IconArrowUp';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
export var cnTableRowsCollapse = cn('TableRowsCollapse');
export var TableRowsCollapse = function (props) {
    var level = props.level, children = props.children, isExpanded = props.isExpanded, toggleCollapse = props.toggleCollapse, withCollapseButton = props.withCollapseButton, isExpandedByDefault = props.isExpandedByDefault;
    var style = { '--nesting-level': level };
    return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React.createElement("div", { style: style, className: cnTableRowsCollapse(), onClick: toggleCollapse, onKeyDown: toggleCollapse },
        !isExpandedByDefault && withCollapseButton && (React.createElement("div", { className: cnTableRowsCollapse('buttonContainer') },
            React.createElement(Button, { iconLeft: isExpanded ? IconArrowUp : IconArrowDown, iconSize: "s", size: "xs", onlyIcon: true, view: "clear" }))),
        React.createElement("div", { className: cnTableRowsCollapse('cellContainer', {
                withExpanderPadding: !isExpandedByDefault
            }) }, children)));
};
