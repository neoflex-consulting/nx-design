import { __assign, __rest } from "tslib";
import './CollapseIcon.css';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { cnIcon } from '../../../icons/Icon/Icon';
import { cn } from '../../../utils/bem';
import { cnForCssTransition } from '../../../utils/cnForCssTransition';
export var collapseIconPropDirection = [
    'up',
    'right',
    'down',
    'left',
    'upRight',
    'downRight',
    'upLeft',
    'downLeft',
];
var cnCollapseIcon = cn('CollapseIcon');
var cssTransitionClassNames = cnForCssTransition(cnCollapseIcon);
var animateTimeout = 300;
export var CollapseIcon = function (props) {
    var size = props.size, Icon = props.icon, CloseIcon = props.closeIcon, direction = props.direction, closeDirection = props.closeDirection, isOpen = props.isOpen, className = props.className, otherProps = __rest(props, ["size", "icon", "closeIcon", "direction", "closeDirection", "isOpen", "className"]);
    if (CloseIcon) {
        return (React.createElement("span", { className: cnCollapseIcon('Wrapper', [cnIcon({ size: size }), className]) },
            React.createElement(CSSTransition, { "in": !isOpen, unmountOnExit: true, classNames: cssTransitionClassNames, timeout: animateTimeout },
                React.createElement(Icon, __assign({}, otherProps, { className: cnCollapseIcon({ withCloseIcon: true }), size: size }))),
            React.createElement(CSSTransition, { "in": isOpen, unmountOnExit: true, classNames: cssTransitionClassNames, timeout: animateTimeout },
                React.createElement(CloseIcon, __assign({}, otherProps, { className: cnCollapseIcon({ withCloseIcon: true }), size: size })))));
    }
    return (React.createElement(Icon, __assign({}, otherProps, { className: cnCollapseIcon({ isOpen: isOpen, direction: direction, closeDirection: closeDirection }, [className]), size: size })));
};
