import './ContextMenuDivider.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { contextMenuDefaultSize } from '../helpers';
var cnContextMenuDivider = cn('ContextMenuDivider');
export var ContextMenuDivider = function (props) {
    var _a = props.size, size = _a === void 0 ? contextMenuDefaultSize : _a;
    return React.createElement("div", { className: cnContextMenuDivider({ size: size }) });
};
