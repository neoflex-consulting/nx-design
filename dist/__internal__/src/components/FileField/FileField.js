import { __assign, __rest } from "tslib";
import './FileField.css';
import React from 'react';
import { cnMixVisuallyHidden } from '../../mixs/MixVisuallyHidden/MixVisuallyHidden';
import { cn } from '../../utils/bem';
function isRenderFn(fn) {
    return fn.call !== undefined;
}
export var cnFileField = cn('FileField');
export var FileField = function (props) {
    var className = props.className, children = props.children, id = props.id, inputRef = props.inputRef, _a = props["aria-label"], ariaLabel = _a === void 0 ? 'File input' : _a, inputProps = __rest(props, ["className", "children", "id", "inputRef", 'aria-label']);
    var content = isRenderFn(children) ? children({ role: 'button', as: 'span' }) : children;
    return (React.createElement("label", { htmlFor: id, className: cnFileField(null, [className]) },
        React.createElement("input", __assign({}, inputProps, { className: cnFileField('Input', [cnMixVisuallyHidden()]), id: id, type: "file", "aria-label": ariaLabel, ref: inputRef })),
        content));
};
