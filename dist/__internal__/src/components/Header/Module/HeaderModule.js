import { __assign, __rest } from "tslib";
import './HeaderModule.css';
import React from 'react';
import { cn } from '../../../utils/bem';
export var cnHeaderModule = cn('HeaderModule');
var headerModulePropIndent = ['s', 'm', 'l'];
export var HeaderModule = function (_a) {
    var className = _a.className, children = _a.children, indent = _a.indent, otherProps = __rest(_a, ["className", "children", "indent"]);
    return (React.createElement("div", __assign({}, otherProps, { className: cnHeaderModule({ indent: indent }, [className]) }), children));
};
