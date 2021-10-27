import './ContextMenuGroupHeader.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { getSizeByMap } from '../../../utils/getSizeByMap';
import { Text } from '../../Text/Text';
import { contextMenuDefaultSize } from '../helpers';
export var cnContextMenuGroupHeader = cn('ContextMenuGroupHeader');
var sizeMap = {
    s: '2xs',
    m: 'xs',
    l: 's'
};
export var ContextMenuGroupHeader = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? contextMenuDefaultSize : _b, first = _a.first;
    return (React.createElement(Text, { view: "secondary", transform: "uppercase", className: cnContextMenuGroupHeader({ size: size, first: first }), size: getSizeByMap(sizeMap, size) }, label));
};
