"use strict";
exports.__esModule = true;
exports.Timer = exports.cnTimer = exports.timerPropsSizeDefault = exports.timerPropsSize = void 0;
var tslib_1 = require("tslib");
require("./Timer.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
var ProgressSpin_1 = require("../ProgressSpin/ProgressSpin");
exports.timerPropsSize = ['m', 's'];
exports.timerPropsSizeDefault = exports.timerPropsSize[0];
exports.cnTimer = bem_1.cn('Timer');
exports.Timer = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.seconds, seconds = _a === void 0 ? 0 : _a, _b = props.progress, progress = _b === void 0 ? 0 : _b, _c = props.size, size = _c === void 0 ? exports.timerPropsSizeDefault : _c, className = props.className, animation = props.animation, otherProps = tslib_1.__rest(props, ["seconds", "progress", "size", "className", "animation"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnTimer({ size: size }, [className]), ref: ref }),
        react_1["default"].createElement(ProgressSpin_1.ProgressSpin, { className: exports.cnTimer('Progress'), size: size, progress: progress, animation: animation }),
        size === 'm' && react_1["default"].createElement("div", { className: exports.cnTimer('Counter') }, seconds)));
});
