import { __assign, __read, __rest } from "tslib";
import './ProgressSpin.css';
import React, { useMemo } from 'react';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { isNumber } from '../../utils/type-guards';
export var progressSpinPropSize = ['m', 's'];
export var progressSpinPropSizeDefault = progressSpinPropSize[0];
export var cnProgressSpin = cn('ProgressSpin');
var sizeMap = {
    s: 12,
    m: 20
};
function getSvgParamsBySize(size) {
    var sizeOfPixels = getSizeByMap(sizeMap, size);
    var strokeWidth = 2;
    var radius = (sizeOfPixels - strokeWidth) / 2;
    var strokeDasharray = radius * 2 * Math.PI;
    return [sizeOfPixels, strokeWidth, radius, strokeDasharray];
}
export var ProgressSpin = React.forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? progressSpinPropSizeDefault : _a, progress = props.progress, animation = props.animation, className = props.className, otherProps = __rest(props, ["size", "progress", "animation", "className"]);
    var _b = __read(useMemo(function () { return getSvgParamsBySize(size); }, [size]), 4), sizeOfPixels = _b[0], strokeWidth = _b[1], radius = _b[2], strokeDasharray = _b[3];
    var animatedProgress = isNumber(progress) ? progress : 50;
    var strokeDashoffset = strokeDasharray - (strokeDasharray * animatedProgress) / 100;
    return (React.createElement("svg", __assign({}, otherProps, { className: cnProgressSpin({ spin: !isNumber(progress) }, [className]), width: sizeOfPixels, height: sizeOfPixels, viewBox: "0 0 " + sizeOfPixels + " " + sizeOfPixels, ref: ref }),
        React.createElement("circle", { className: cnProgressSpin('Circle', { animation: animation }), cx: sizeOfPixels / 2, cy: sizeOfPixels / 2, r: radius, strokeWidth: strokeWidth, strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset })));
});
