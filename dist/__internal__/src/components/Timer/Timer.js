import { __assign, __rest } from "tslib";
import './Timer.css';
import React from 'react';
import { cn } from '../../utils/bem';
import { ProgressSpin } from '../ProgressSpin/ProgressSpin';
export var timerPropsSize = ['m', 's'];
export var timerPropsSizeDefault = timerPropsSize[0];
export var cnTimer = cn('Timer');
export var Timer = React.forwardRef(function (props, ref) {
    var _a = props.seconds, seconds = _a === void 0 ? 0 : _a, _b = props.progress, progress = _b === void 0 ? 0 : _b, _c = props.size, size = _c === void 0 ? timerPropsSizeDefault : _c, className = props.className, animation = props.animation, otherProps = __rest(props, ["seconds", "progress", "size", "className", "animation"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnTimer({ size: size }, [className]), ref: ref }),
        React.createElement(ProgressSpin, { className: cnTimer('Progress'), size: size, progress: progress, animation: animation }),
        size === 'm' && React.createElement("div", { className: cnTimer('Counter') }, seconds)));
});
