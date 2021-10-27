"use strict";
exports.__esModule = true;
exports.FileField = exports.cnFileField = void 0;
var tslib_1 = require("tslib");
require("./FileField.css");
var react_1 = tslib_1.__importDefault(require("react"));
var MixVisuallyHidden_1 = require("../../mixs/MixVisuallyHidden/MixVisuallyHidden");
var bem_1 = require("../../utils/bem");
function isRenderFn(fn) {
    return fn.call !== undefined;
}
exports.cnFileField = bem_1.cn('FileField');
exports.FileField = function (props) {
    var className = props.className, children = props.children, id = props.id, inputRef = props.inputRef, _a = props["aria-label"], ariaLabel = _a === void 0 ? 'File input' : _a, inputProps = tslib_1.__rest(props, ["className", "children", "id", "inputRef", 'aria-label']);
    var content = isRenderFn(children) ? children({ role: 'button', as: 'span' }) : children;
    return (react_1["default"].createElement("label", { htmlFor: id, className: exports.cnFileField(null, [className]) },
        react_1["default"].createElement("input", tslib_1.__assign({}, inputProps, { className: exports.cnFileField('Input', [MixVisuallyHidden_1.cnMixVisuallyHidden()]), id: id, type: "file", "aria-label": ariaLabel, ref: inputRef })),
        content));
};
