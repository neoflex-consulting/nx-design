import './SelectValueTag.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { Tag } from '../../Tag/Tag';
export var cnSelectValueTag = cn('SelectValueTag');
export var SelectValueTag = function (props) {
    var handleRemove = props.handleRemove, size = props.size, label = props.label;
    return handleRemove ? (React.createElement(Tag, { className: cnSelectValueTag({ size: size }), label: label, mode: "cancel", onCancel: handleRemove, size: size })) : (React.createElement(Tag, { className: cnSelectValueTag({ size: size, disabled: true }), label: label, size: size, mode: "info" }));
};
