"use strict";
exports.__esModule = true;
exports.CollapseIcon = exports.collapseIconPropDirection = void 0;
var tslib_1 = require("tslib");
require("./CollapseIcon.css");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var Icon_1 = require("../../../icons/Icon/Icon");
var bem_1 = require("../../../utils/bem");
var cnForCssTransition_1 = require("../../../utils/cnForCssTransition");
exports.collapseIconPropDirection = [
    'up',
    'right',
    'down',
    'left',
    'upRight',
    'downRight',
    'upLeft',
    'downLeft',
];
var cnCollapseIcon = bem_1.cn('CollapseIcon');
var cssTransitionClassNames = cnForCssTransition_1.cnForCssTransition(cnCollapseIcon);
var animateTimeout = 300;
exports.CollapseIcon = function (props) {
    var size = props.size, Icon = props.icon, CloseIcon = props.closeIcon, direction = props.direction, closeDirection = props.closeDirection, isOpen = props.isOpen, className = props.className, otherProps = tslib_1.__rest(props, ["size", "icon", "closeIcon", "direction", "closeDirection", "isOpen", "className"]);
    if (CloseIcon) {
        return (react_1["default"].createElement("span", { className: cnCollapseIcon('Wrapper', [Icon_1.cnIcon({ size: size }), className]) },
            react_1["default"].createElement(react_transition_group_1.CSSTransition, { "in": !isOpen, unmountOnExit: true, classNames: cssTransitionClassNames, timeout: animateTimeout },
                react_1["default"].createElement(Icon, tslib_1.__assign({}, otherProps, { className: cnCollapseIcon({ withCloseIcon: true }), size: size }))),
            react_1["default"].createElement(react_transition_group_1.CSSTransition, { "in": isOpen, unmountOnExit: true, classNames: cssTransitionClassNames, timeout: animateTimeout },
                react_1["default"].createElement(CloseIcon, tslib_1.__assign({}, otherProps, { className: cnCollapseIcon({ withCloseIcon: true }), size: size })))));
    }
    return (react_1["default"].createElement(Icon, tslib_1.__assign({}, otherProps, { className: cnCollapseIcon({ isOpen: isOpen, direction: direction, closeDirection: closeDirection }, [className]), size: size })));
};
