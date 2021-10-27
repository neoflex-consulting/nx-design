import { __assign, __rest } from "tslib";
import './HeaderLogo.css';
import React from 'react';
import { cn } from '../../../utils/bem';
export var cnHeaderLogo = cn('HeaderLogo');
export function HeaderLogo(props) {
    var children = props.children, _a = props.as, as = _a === void 0 ? 'div' : _a, className = props.className, otherProps = __rest(props, ["children", "as", "className"]);
    var Tag = as;
    return (React.createElement(Tag, __assign({ className: cnHeaderLogo(null, [className]) }, otherProps), children));
}
