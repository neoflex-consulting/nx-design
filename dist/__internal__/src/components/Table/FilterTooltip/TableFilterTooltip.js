import { __read, __spread } from "tslib";
import './TableFilterTooltip.css';
import React from 'react';
import { IconFunnel } from '../../../icons/IconFunnel/IconFunnel';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Popover } from '../../Popover/Popover';
import { Text } from '../../Text/Text';
var cnTableFilterTooltip = cn('TableFilterTooltip');
export var TableFilterTooltip = function (_a) {
    var field = _a.field, isOpened = _a.isOpened, options = _a.options, values = _a.values, className = _a.className, children = _a.children, onChange = _a.onChange, onToggle = _a.onToggle;
    var buttonRef = React.useRef(null);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { ref: buttonRef, size: "xs", iconSize: "s", view: "clear", onlyIcon: true, onClick: onToggle, className: cnTableFilterTooltip('Button', { isOpened: isOpened }, [className]), iconLeft: IconFunnel }),
        isOpened && buttonRef.current && (React.createElement(Popover, { anchorRef: buttonRef, possibleDirections: ['downRight', 'downLeft'], direction: "downRight", offset: 4, arrowOffset: 12, onClickOutside: onToggle }, children || (React.createElement("div", { className: cnTableFilterTooltip('Content') },
            React.createElement(Text, { as: "div", size: "xs", view: "primary", className: cnTableFilterTooltip('Title') }, "\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044E"),
            React.createElement("select", { className: cnTableFilterTooltip('Select'), value: __spread(values), multiple: true, onChange: function (e) {
                    onChange(field, Array.from(e.target.selectedOptions).map(function (option) { return option.value; }));
                } }, options.map(function (option) { return (React.createElement("option", { key: option.value, className: cnTableFilterTooltip('Option'), value: option.value, title: option.label }, option.label)); }))))))));
};
