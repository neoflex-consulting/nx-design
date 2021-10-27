import './UserSelectValue.css';
import React from 'react';
import { IconClose } from '../../../icons/IconClose/IconClose';
import { cn } from '../../../utils/bem';
import { User } from '../../User/User';
export var cnUserSelectValue = cn('UserSelectValue');
export var UserSelectValue = function (props) {
    var size = props.size, label = props.label, subLabel = props.subLabel, disabled = props.disabled, handleRemove = props.handleRemove, avatarUrl = props.avatarUrl, multiple = props.multiple;
    return (React.createElement(User, { className: cnUserSelectValue({ multiple: multiple, size: size }), avatarUrl: avatarUrl, name: label, info: subLabel, size: size, view: multiple ? 'ghost' : 'clear', iconRight: !disabled && multiple ? IconClose : undefined, onIconRightClick: !disabled && multiple ? handleRemove : undefined }));
};
