import { __assign, __rest } from "tslib";
import './Loader.css';
import React from 'react';
import { cn } from '../../utils/bem';
export var loaderPropSize = ['m', 's'];
export var loaderPropSizeDefault = loaderPropSize[0];
export var cnLoader = cn('Loader');
export var Loader = React.forwardRef(function (props, ref) {
    var className = props.className, _a = props.size, size = _a === void 0 ? loaderPropSizeDefault : _a, otherProps = __rest(props, ["className", "size"]);
    return (React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnLoader({ size: size }, [className]) }),
        React.createElement("div", { className: cnLoader('Dot') })));
});
