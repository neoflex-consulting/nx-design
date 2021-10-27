"use strict";
exports.__esModule = true;
exports.ProgressSpin = exports.cnProgressSpin = exports.progressSpinPropSizeDefault = exports.progressSpinPropSize = void 0;
var tslib_1 = require("tslib");
require("./ProgressSpin.css");
var react_1 = tslib_1.__importStar(require("react"));
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var type_guards_1 = require("../../utils/type-guards");
exports.progressSpinPropSize = ['m', 's'];
exports.progressSpinPropSizeDefault = exports.progressSpinPropSize[0];
exports.cnProgressSpin = bem_1.cn('ProgressSpin');
var sizeMap = {
    s: 12,
    m: 20
};
function getSvgParamsBySize(size) {
    var sizeOfPixels = getSizeByMap_1.getSizeByMap(sizeMap, size);
    var strokeWidth = 2;
    var radius = (sizeOfPixels - strokeWidth) / 2;
    var strokeDasharray = radius * 2 * Math.PI;
    return [sizeOfPixels, strokeWidth, radius, strokeDasharray];
}
exports.ProgressSpin = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? exports.progressSpinPropSizeDefault : _a, progress = props.progress, animation = props.animation, className = props.className, otherProps = tslib_1.__rest(props, ["size", "progress", "animation", "className"]);
    var _b = tslib_1.__read(react_1.useMemo(function () { return getSvgParamsBySize(size); }, [size]), 4), sizeOfPixels = _b[0], strokeWidth = _b[1], radius = _b[2], strokeDasharray = _b[3];
    var animatedProgress = type_guards_1.isNumber(progress) ? progress : 50;
    var strokeDashoffset = strokeDasharray - (strokeDasharray * animatedProgress) / 100;
    return (react_1["default"].createElement("svg", tslib_1.__assign({}, otherProps, { className: exports.cnProgressSpin({ spin: !type_guards_1.isNumber(progress) }, [className]), width: sizeOfPixels, height: sizeOfPixels, viewBox: "0 0 " + sizeOfPixels + " " + sizeOfPixels, ref: ref }),
        react_1["default"].createElement("circle", { className: exports.cnProgressSpin('Circle', { animation: animation }), cx: sizeOfPixels / 2, cy: sizeOfPixels / 2, r: radius, strokeWidth: strokeWidth, strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset })));
});
