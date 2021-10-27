import { __assign, __rest } from "tslib";
import './SelectValueTag.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { Tag } from '../../Tag/Tag';
var cnSelectValueTag = cn('SelectValueTagDeprecated');
export var SelectValueTag = function (props) {
    var handleRemove = props.handleRemove, disabled = props.disabled, size = props.size, otherProps = __rest(props, ["handleRemove", "disabled", "size"]);
    return disabled ? (React.createElement(Tag, __assign({}, otherProps, { className: cnSelectValueTag({ size: size, disabled: disabled }), size: size, mode: "info" }))) : (React.createElement(Tag, __assign({}, otherProps, { className: cnSelectValueTag({ size: size }), mode: "cancel", onCancel: handleRemove, size: size })));
};
