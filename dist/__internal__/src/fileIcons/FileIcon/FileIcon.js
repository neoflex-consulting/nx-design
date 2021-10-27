import { __assign, __rest } from "tslib";
import './FileIcon.css';
import React from 'react';
import { cn } from '../../utils/bem';
export var fileIconPropSize = ['m', 's'];
export var fileIconPropSizeDefault = fileIconPropSize[0];
export var cnIconFile = cn('FileIcon');
export var FileIcon = React.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, _a = props.size, size = _a === void 0 ? fileIconPropSizeDefault : _a, otherProps = __rest(props, ["children", "className", "size"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnIconFile({ size: size }, [className]), ref: ref }), children));
});
