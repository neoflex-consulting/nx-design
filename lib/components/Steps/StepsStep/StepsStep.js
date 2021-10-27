"use strict";
exports.__esModule = true;
exports.StepsStep = exports.cnStepsStep = void 0;
var tslib_1 = require("tslib");
require("./StepsStep.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconCheck_1 = require("../../../icons/IconCheck/IconCheck");
var bem_1 = require("../../../utils/bem");
var getSizeByMap_1 = require("../../../utils/getSizeByMap");
exports.cnStepsStep = bem_1.cn('StepsStep');
var sizeMap = {
    m: 'xs',
    l: 's'
};
exports.StepsStep = react_1["default"].forwardRef(function (props, ref) {
    var size = props.size, label = props.label, _a = props.active, active = _a === void 0 ? false : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, _c = props.completed, completed = _c === void 0 ? false : _c, _d = props.skipped, skipped = _d === void 0 ? false : _d, onChange = props.onChange, className = props.className;
    var clickHandler = function (e) {
        !active && !disabled && (onChange === null || onChange === void 0 ? void 0 : onChange(e));
    };
    var iconSize = getSizeByMap_1.getSizeByMap(sizeMap, size);
    return (react_1["default"].createElement("button", { ref: ref, className: exports.cnStepsStep({ size: size, active: active, disabled: disabled, completed: completed, skipped: skipped }, [className]), type: "button", title: label, onClick: clickHandler },
        completed && react_1["default"].createElement(IconCheck_1.IconCheck, { className: exports.cnStepsStep('Icon'), size: iconSize }),
        label));
});
