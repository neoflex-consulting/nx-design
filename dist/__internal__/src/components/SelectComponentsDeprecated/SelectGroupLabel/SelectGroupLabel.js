import { __assign, __rest } from "tslib";
import './SelectGroupLabel.css';
import React from 'react';
import { cn } from '../../../utils/bem';
var cnSelectGroupLabel = cn('SelectGroupLabelDeprecated');
export var SelectGroupLabel = function (props) {
    var className = props.className, label = props.label, size = props.size, indent = props.indent, otherProps = __rest(props, ["className", "label", "size", "indent"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnSelectGroupLabel({ size: size, indent: indent }, [className]) }), label));
};
