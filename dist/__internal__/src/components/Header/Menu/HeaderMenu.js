import { __assign, __rest } from "tslib";
import './HeaderMenu.css';
import React from 'react';
import { cn } from '../../../utils/bem';
export var cnHeaderMenu = cn('HeaderMenu');
export var HeaderMenu = function (_a) {
    var items = _a.items, className = _a.className, otherProps = __rest(_a, ["items", "className"]);
    return (React.createElement("nav", __assign({}, otherProps, { className: cnHeaderMenu(null, [className]) }),
        React.createElement("ul", { className: cnHeaderMenu('List') }, items.map(function (_a, index) {
            var label = _a.label, href = _a.href, target = _a.target, active = _a.active, onClick = _a.onClick;
            var Tag = href ? 'a' : 'div';
            return (React.createElement("li", { className: cnHeaderMenu('Item'), key: cnHeaderMenu('Item', { index: index }) },
                React.createElement(Tag, { className: cnHeaderMenu('Link', { active: active }), href: href, target: target, onClick: onClick }, label)));
        }))));
};
