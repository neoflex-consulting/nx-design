import './UserSelectValue.css';
import React from 'react';
import { IconClose } from '../../../icons/IconClose/IconClose';
import { cn } from '../../../utils/bem';
import { tagBasePropSizeDefault } from '../../TagBase/TagBase';
import { User } from '../../User/User';
var cnUserValue = cn('UserSelectValueDeprecated');
export var UserSelectValue = function (props) {
    var _a = props.size, size = _a === void 0 ? tagBasePropSizeDefault : _a, label = props.label, subLabel = props.subLabel, disabled = props.disabled, onCancel = props.onCancel, url = props.url;
    var withCancel = typeof onCancel === 'function';
    return (React.createElement(User, { className: cnUserValue({ withCancel: withCancel }), avatarUrl: url, name: label, info: subLabel, size: size, view: "ghost", iconRight: !disabled ? IconClose : undefined, onIconRightClick: !disabled ? onCancel : undefined }));
};
