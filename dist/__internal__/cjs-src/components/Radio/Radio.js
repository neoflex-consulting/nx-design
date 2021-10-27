"use strict";
exports.__esModule = true;
exports.Radio = exports.cnRadio = exports.radioPropAlignDefault = exports.radioPropAlign = exports.radioPropViewDefault = exports.radioPropView = exports.radioPropSizeDefault = exports.radioPropSize = void 0;
var tslib_1 = require("tslib");
require("./Radio.css");
var react_1 = tslib_1.__importDefault(require("react"));
var MixFocus_1 = require("../../mixs/MixFocus/MixFocus");
var bem_1 = require("../../utils/bem");
exports.radioPropSize = ['m', 'l'];
exports.radioPropSizeDefault = exports.radioPropSize[0];
exports.radioPropView = ['primary', 'ghost'];
exports.radioPropViewDefault = exports.radioPropView[0];
exports.radioPropAlign = ['center', 'top'];
exports.radioPropAlignDefault = exports.radioPropAlign[0];
exports.cnRadio = bem_1.cn('Radio');
exports.Radio = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, name = props.name, _b = props.size, size = _b === void 0 ? exports.radioPropSizeDefault : _b, _c = props.view, view = _c === void 0 ? exports.radioPropViewDefault : _c, _d = props.align, align = _d === void 0 ? exports.radioPropAlignDefault : _d, disabled = props.disabled, className = props.className, label = props.label, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, readOnly = props.readOnly, required = props.required, step = props.step, tabIndex = props.tabIndex, inputRef = props.inputRef, otherProps = tslib_1.__rest(props, ["checked", "name", "size", "view", "align", "disabled", "className", "label", "onChange", "onFocus", "onBlur", "readOnly", "required", "step", "tabIndex", "inputRef"]);
    var handleChange = function (e) {
        if (onChange) {
            onChange({ e: e, checked: !checked });
        }
    };
    return (react_1["default"].createElement("label", tslib_1.__assign({}, otherProps, { className: exports.cnRadio({ size: size, view: view, disabled: disabled, align: align }, [className]), ref: ref }),
        react_1["default"].createElement("input", { type: "radio", name: name, className: exports.cnRadio('Input', [MixFocus_1.cnMixFocus()]), checked: checked, disabled: disabled, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, readOnly: readOnly, required: required, step: step, tabIndex: tabIndex, ref: inputRef }),
        label && react_1["default"].createElement("span", { className: exports.cnRadio('Label') }, label)));
});
