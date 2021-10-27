"use strict";
exports.__esModule = true;
exports.PortalWithTheme = exports.usePortalContext = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var useForkRef_1 = require("../../hooks/useForkRef/useForkRef");
var Theme_1 = require("../Theme/Theme");
var PortalWithThemeContext_1 = require("./PortalWithThemeContext/PortalWithThemeContext");
exports.usePortalContext = PortalWithThemeContext_1.usePortalContext;
exports.PortalWithTheme = react_1["default"].forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.container, container = _b === void 0 ? window.document.body : _b, rest = tslib_1.__rest(_a, ["children", "container"]);
    var addRefs = PortalWithThemeContext_1.usePortalContext().addRefs;
    var themeRef = react_1.useRef(null);
    react_1.useEffect(function () {
        addRefs && addRefs([themeRef]);
    }, [themeRef]);
    return react_dom_1["default"].createPortal(react_1["default"].createElement(PortalWithThemeContext_1.PortalWithThemeProvider, null,
        react_1["default"].createElement(Theme_1.Theme, tslib_1.__assign({ ref: useForkRef_1.useForkRef([themeRef, ref]) }, rest), children)), container);
});
