"use strict";
exports.__esModule = true;
exports.Checkbox = exports.cnCheckbox = exports.checkboxPropAlignDefault = exports.checkboxPropAlign = exports.checkboxPropViewDefault = exports.checkboxPropView = exports.checkboxPropSizeDefault = exports.checkboxPropSize = void 0;
var tslib_1 = require("tslib");
require("./Checkbox.css");
var react_1 = tslib_1.__importDefault(require("react"));
var useForkRef_1 = require("../../hooks/useForkRef/useForkRef");
var MixFocus_1 = require("../../mixs/MixFocus/MixFocus");
var bem_1 = require("../../utils/bem");
var usePropsHandler_1 = require("../EventInterceptor/usePropsHandler");
exports.checkboxPropSize = ['m', 'l'];
exports.checkboxPropSizeDefault = exports.checkboxPropSize[0];
exports.checkboxPropView = ['primary', 'ghost'];
exports.checkboxPropViewDefault = exports.checkboxPropView[0];
exports.checkboxPropAlign = ['center', 'top'];
exports.checkboxPropAlignDefault = exports.checkboxPropAlign[0];
exports.cnCheckbox = bem_1.cn('Checkbox');
exports.Checkbox = react_1["default"].forwardRef(function (props, ref) {
    var checkboxRef = react_1["default"].useRef(null);
    var _a = usePropsHandler_1.usePropsHandler(exports.cnCheckbox(), props, checkboxRef), _b = _a.checked, checked = _b === void 0 ? false : _b, name = _a.name, _c = _a.size, size = _c === void 0 ? exports.checkboxPropSizeDefault : _c, _d = _a.view, view = _d === void 0 ? exports.checkboxPropViewDefault : _d, _e = _a.align, align = _e === void 0 ? exports.checkboxPropAlignDefault : _e, disabled = _a.disabled, _f = _a.intermediate, intermediate = _f === void 0 ? false : _f, className = _a.className, label = _a.label, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, readOnly = _a.readOnly, required = _a.required, step = _a.step, tabIndex = _a.tabIndex, inputRef = _a.inputRef, otherProps = tslib_1.__rest(_a, ["checked", "name", "size", "view", "align", "disabled", "intermediate", "className", "label", "onChange", "onFocus", "onBlur", "readOnly", "required", "step", "tabIndex", "inputRef"]);
    var handleChange = function (e) {
        if (onChange) {
            onChange({ e: e, checked: !checked });
        }
    };
    return (react_1["default"].createElement("label", tslib_1.__assign({}, otherProps, { className: exports.cnCheckbox({ size: size, view: view, disabled: disabled, intermediate: intermediate, align: align }, [className]), ref: useForkRef_1.useForkRef([ref, checkboxRef]) }),
        react_1["default"].createElement("input", { type: "checkbox", name: name, className: exports.cnCheckbox('Input', [MixFocus_1.cnMixFocus()]), checked: checked, disabled: disabled, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, readOnly: readOnly, required: required, step: step, tabIndex: tabIndex, ref: inputRef }),
        label && react_1["default"].createElement("span", { className: exports.cnCheckbox('Label') }, label)));
});
