import { __assign, __read, __rest, __spread } from "tslib";
import './Sidebar.css';
import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useClickOutside } from '../../hooks/useClickOutside/useClickOutside';
import { cn } from '../../utils/bem';
import { cnForCssTransition } from '../../utils/cnForCssTransition';
import { PortalWithTheme, usePortalContext } from '../PortalWithTheme/PortalWithTheme';
import { useTheme } from '../Theme/Theme';
var sidebarPropPosition = ['right', 'bottom', 'left', 'top'];
var sidebarPropPositionDefault = sidebarPropPosition[0];
var sidebarPropWidth = ['auto'];
var sidebarPropWidthDefault = sidebarPropWidth[0];
var sidebarPropHeight = ['auto'];
var sidebarPropHeightDefault = sidebarPropHeight[0];
var cnSidebar = cn('Sidebar');
var SidebarContent = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: cnSidebar('Content', null, [className]) }, rest), children));
};
var SidebarActions = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React.createElement("div", __assign({ className: cnSidebar('Actions', null, [className]) }, rest), children));
};
var ContextConsumer = function (_a) {
    var onClickOutside = _a.onClickOutside, children = _a.children, ignoreClicksInsideRefs = _a.ignoreClicksInsideRefs;
    var refs = usePortalContext().refs;
    useClickOutside({
        isActive: !!onClickOutside,
        ignoreClicksInsideRefs: __spread((ignoreClicksInsideRefs || []), (refs || [])),
        handler: function (event) { return onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(event); }
    });
    return React.createElement(React.Fragment, null, children);
};
export var Sidebar = function (props) {
    var isOpen = props.isOpen, onClose = props.onClose, onOpen = props.onOpen, _a = props.hasOverlay, hasOverlay = _a === void 0 ? true : _a, onOverlayClick = props.onOverlayClick, onClickOutside = props.onClickOutside, _b = props.position, position = _b === void 0 ? sidebarPropPositionDefault : _b, _c = props.width, width = _c === void 0 ? sidebarPropWidthDefault : _c, _d = props.height, height = _d === void 0 ? sidebarPropHeightDefault : _d, className = props.className, children = props.children, _e = props.container, container = _e === void 0 ? window.document.body : _e, rest = __rest(props, ["isOpen", "onClose", "onOpen", "hasOverlay", "onOverlayClick", "onClickOutside", "position", "width", "height", "className", "children", "container"]);
    var ref = useRef(null);
    var theme = useTheme().theme;
    useEffect(function () {
        if (isOpen) {
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        }
        else {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    }, [isOpen]);
    return (React.createElement(CSSTransition, { "in": isOpen, unmountOnExit: true, className: cnSidebar({ position: position }), classNames: cnForCssTransition(cnSidebar), timeout: 200 },
        React.createElement(PortalWithTheme, { preset: theme, container: container },
            hasOverlay && React.createElement("div", { className: cnSidebar('Overlay'), "aria-label": "Overlay" }),
            React.createElement("div", __assign({ className: cnSidebar('Window', { width: width, height: height, position: position }, [className]), ref: ref }, rest),
                React.createElement(ContextConsumer, { onClickOutside: onClickOutside || onOverlayClick, ignoreClicksInsideRefs: [ref] }, children)))));
};
Sidebar.Content = SidebarContent;
Sidebar.Actions = SidebarActions;
