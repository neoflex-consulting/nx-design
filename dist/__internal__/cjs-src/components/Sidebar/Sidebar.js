"use strict";
exports.__esModule = true;
exports.Sidebar = void 0;
var tslib_1 = require("tslib");
require("./Sidebar.css");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var useClickOutside_1 = require("../../hooks/useClickOutside/useClickOutside");
var bem_1 = require("../../utils/bem");
var cnForCssTransition_1 = require("../../utils/cnForCssTransition");
var PortalWithTheme_1 = require("../PortalWithTheme/PortalWithTheme");
var Theme_1 = require("../Theme/Theme");
var sidebarPropPosition = ['right', 'bottom', 'left', 'top'];
var sidebarPropPositionDefault = sidebarPropPosition[0];
var sidebarPropWidth = ['auto'];
var sidebarPropWidthDefault = sidebarPropWidth[0];
var sidebarPropHeight = ['auto'];
var sidebarPropHeightDefault = sidebarPropHeight[0];
var cnSidebar = bem_1.cn('Sidebar');
var SidebarContent = function (_a) {
    var className = _a.className, children = _a.children, rest = tslib_1.__rest(_a, ["className", "children"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ className: cnSidebar('Content', null, [className]) }, rest), children));
};
var SidebarActions = function (_a) {
    var className = _a.className, children = _a.children, rest = tslib_1.__rest(_a, ["className", "children"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ className: cnSidebar('Actions', null, [className]) }, rest), children));
};
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
exports.Sidebar = function (props) {
    var isOpen = props.isOpen, onClose = props.onClose, onOpen = props.onOpen, _a = props.hasOverlay, hasOverlay = _a === void 0 ? true : _a, onOverlayClick = props.onOverlayClick, onClickOutside = props.onClickOutside, _b = props.position, position = _b === void 0 ? sidebarPropPositionDefault : _b, _c = props.width, width = _c === void 0 ? sidebarPropWidthDefault : _c, _d = props.height, height = _d === void 0 ? sidebarPropHeightDefault : _d, className = props.className, children = props.children, _e = props.container, container = _e === void 0 ? window.document.body : _e, rest = tslib_1.__rest(props, ["isOpen", "onClose", "onOpen", "hasOverlay", "onOverlayClick", "onClickOutside", "position", "width", "height", "className", "children", "container"]);
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
    return (react_1["default"].createElement(react_transition_group_1.CSSTransition, { "in": isOpen, unmountOnExit: true, className: cnSidebar({ position: position }), classNames: cnForCssTransition_1.cnForCssTransition(cnSidebar), timeout: 200 },
        react_1["default"].createElement(PortalWithTheme_1.PortalWithTheme, { preset: theme, container: container },
            hasOverlay && react_1["default"].createElement("div", { className: cnSidebar('Overlay'), "aria-label": "Overlay" }),
            react_1["default"].createElement("div", tslib_1.__assign({ className: cnSidebar('Window', { width: width, height: height, position: position }, [className]), ref: ref }, rest),
                react_1["default"].createElement(ContextConsumer, { onClickOutside: onClickOutside || onOverlayClick, ignoreClicksInsideRefs: [ref] }, children)))));
};
exports.Sidebar.Content = SidebarContent;
exports.Sidebar.Actions = SidebarActions;
