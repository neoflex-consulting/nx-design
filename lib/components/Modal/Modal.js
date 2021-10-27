"use strict";
exports.__esModule = true;
exports.Modal = void 0;
var tslib_1 = require("tslib");
require("./Modal.css");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var useClickOutside_1 = require("../../hooks/useClickOutside/useClickOutside");
var bem_1 = require("../../utils/bem");
var cnForCssTransition_1 = require("../../utils/cnForCssTransition");
var PortalWithTheme_1 = require("../PortalWithTheme/PortalWithTheme");
var Theme_1 = require("../Theme/Theme");
var modalPropWidth = ['auto'];
var modalPropWidthDefault = modalPropWidth[0];
var modalPropPosition = ['center', 'top'];
var modalPropPositionDefault = modalPropPosition[0];
var cnModal = bem_1.cn('Modal');
/**
 * Подписчик на PortalWithThemeProvider
 * получает рефы всех вложенных порталов в модалку
 * для дальнейшего исключения их из useClickOutside
 */
var ContextConsumer = function (_a) {
    var onClickOutside = _a.onClickOutside, children = _a.children, ignoreClicksInsideRefs = _a.ignoreClicksInsideRefs;
    var refs = PortalWithTheme_1.usePortalContext().refs;
    useClickOutside_1.useClickOutside({
        isActive: !!onClickOutside,
        ignoreClicksInsideRefs: tslib_1.__spread((ignoreClicksInsideRefs || []), (refs || [])),
        handler: function (event) { return onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(event); }
    });
    return react_1["default"].createElement(react_1["default"].Fragment, null, children);
};
exports.Modal = function (props) {
    var isOpen = props.isOpen, onClose = props.onClose, onOpen = props.onOpen, _a = props.hasOverlay, hasOverlay = _a === void 0 ? true : _a, onOverlayClick = props.onOverlayClick, onClickOutside = props.onClickOutside, className = props.className, _b = props.width, width = _b === void 0 ? modalPropWidthDefault : _b, _c = props.position, position = _c === void 0 ? modalPropPositionDefault : _c, children = props.children, _d = props.container, container = _d === void 0 ? window.document.body : _d, refsForExcludeClickOutside = props.refsForExcludeClickOutside, rootClassName = props.rootClassName, rest = tslib_1.__rest(props, ["isOpen", "onClose", "onOpen", "hasOverlay", "onOverlayClick", "onClickOutside", "className", "width", "position", "children", "container", "refsForExcludeClickOutside", "rootClassName"]);
    var ref = react_1.useRef(null);
    var theme = Theme_1.useTheme().theme;
    react_1.useEffect(function () {
        if (isOpen) {
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        }
        else {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    }, [isOpen]);
    return (react_1["default"].createElement(react_transition_group_1.CSSTransition, { "in": isOpen, unmountOnExit: true, appear: true, classNames: cnForCssTransition_1.cnForCssTransition(cnModal), timeout: 200 },
        react_1["default"].createElement(PortalWithTheme_1.PortalWithTheme, { preset: theme, container: container, className: cnModal(null, [rootClassName]) },
            hasOverlay && react_1["default"].createElement("div", { className: cnModal('Overlay'), "aria-label": "Overlay" }),
            react_1["default"].createElement("div", tslib_1.__assign({ className: cnModal('Window', { width: width, position: position }, [className]), ref: ref }, rest),
                react_1["default"].createElement(ContextConsumer, { onClickOutside: onClickOutside || onOverlayClick, ignoreClicksInsideRefs: tslib_1.__spread((refsForExcludeClickOutside || []), [ref]) }, children)))));
};
