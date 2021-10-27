import { __assign, __rest } from "tslib";
import './SelectCreateButton.css';
import React from 'react';
import { cn } from '../../../utils/bem';
var cnSelectCreateButton = cn('SelectCreateButtonDeprecated');
export var SelectCreateButton = function (props) {
    var className = props.className, labelForCreate = props.labelForCreate, inputValue = props.inputValue, active = props.active, hovered = props.hovered, size = props.size, indent = props.indent, otherProps = __rest(props, ["className", "labelForCreate", "inputValue", "active", "hovered", "size", "indent"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnSelectCreateButton({ active: active, hovered: hovered, size: size, indent: indent }, [className]), "aria-selected": active, role: "option" }),
        "+ ",
        labelForCreate,
        " \u00AB",
        React.createElement("b", null, inputValue),
        "\u00BB"));
};
