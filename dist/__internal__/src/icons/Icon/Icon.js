import { __assign, __rest } from "tslib";
import './Icon.css';
import React from 'react';
import { cn } from '../../utils/bem';
export var cnIcon = cn('Icon');
export var Icon = React.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, _a = props.size, size = _a === void 0 ? 'm' : _a, view = props.view, otherProps = __rest(props, ["children", "className", "size", "view"]);
    return (React.createElement("span", __assign({}, otherProps, { className: cnIcon({ size: size, view: view }, [className]), ref: ref }), children));
});
