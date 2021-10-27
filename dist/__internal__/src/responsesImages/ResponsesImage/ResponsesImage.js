import { __assign, __rest } from "tslib";
import './ResponsesImage.css';
import React from 'react';
import { cn } from '../../utils/bem';
export var cnResponsesImage = cn('ResponsesImage');
export var ResponsesImage = React.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, otherProps = __rest(props, ["children", "className"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnResponsesImage(null, [className]), ref: ref }), children));
});
