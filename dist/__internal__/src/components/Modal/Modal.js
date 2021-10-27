import { __assign, __read, __rest, __spread } from "tslib";
import './Modal.css';
import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useClickOutside } from '../../hooks/useClickOutside/useClickOutside';
import { cn } from '../../utils/bem';
import { cnForCssTransition } from '../../utils/cnForCssTransition';
import { PortalWithTheme, usePortalContext } from '../PortalWithTheme/PortalWithTheme';
import { useTheme } from '../Theme/Theme';
var modalPropWidth = ['auto'];
var modalPropWidthDefault = modalPropWidth[0];
var modalPropPosition = ['center', 'top'];
var modalPropPositionDefault = modalPropPosition[0];
var cnModal = cn('Modal');
/**
 * Подписчик на PortalWithThemeProvider
 * получает рефы всех вложенных порталов в модалку
 * для дальнейшего исключения их из useClickOutside
 */
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
export var Modal = function (props) {
    var isOpen = props.isOpen, onClose = props.onClose, onOpen = props.onOpen, _a = props.hasOverlay, hasOverlay = _a === void 0 ? true : _a, onOverlayClick = props.onOverlayClick, onClickOutside = props.onClickOutside, className = props.className, _b = props.width, width = _b === void 0 ? modalPropWidthDefault : _b, _c = props.position, position = _c === void 0 ? modalPropPositionDefault : _c, children = props.children, _d = props.container, container = _d === void 0 ? window.document.body : _d, refsForExcludeClickOutside = props.refsForExcludeClickOutside, rootClassName = props.rootClassName, rest = __rest(props, ["isOpen", "onClose", "onOpen", "hasOverlay", "onOverlayClick", "onClickOutside", "className", "width", "position", "children", "container", "refsForExcludeClickOutside", "rootClassName"]);
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
    return (React.createElement(CSSTransition, { "in": isOpen, unmountOnExit: true, appear: true, classNames: cnForCssTransition(cnModal), timeout: 200 },
        React.createElement(PortalWithTheme, { preset: theme, container: container, className: cnModal(null, [rootClassName]) },
            hasOverlay && React.createElement("div", { className: cnModal('Overlay'), "aria-label": "Overlay" }),
            React.createElement("div", __assign({ className: cnModal('Window', { width: width, position: position }, [className]), ref: ref }, rest),
                React.createElement(ContextConsumer, { onClickOutside: onClickOutside || onOverlayClick, ignoreClicksInsideRefs: __spread((refsForExcludeClickOutside || []), [ref]) }, children)))));
};
