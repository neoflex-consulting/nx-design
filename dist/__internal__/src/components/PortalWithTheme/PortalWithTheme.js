import { __assign, __rest } from "tslib";
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useForkRef } from '../../hooks/useForkRef/useForkRef';
import { Theme } from '../Theme/Theme';
import { PortalWithThemeProvider, usePortalContext, } from './PortalWithThemeContext/PortalWithThemeContext';
export { usePortalContext };
export var PortalWithTheme = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.container, container = _b === void 0 ? window.document.body : _b, rest = __rest(_a, ["children", "container"]);
    var addRefs = usePortalContext().addRefs;
    var themeRef = useRef(null);
    useEffect(function () {
        addRefs && addRefs([themeRef]);
    }, [themeRef]);
    return ReactDOM.createPortal(React.createElement(PortalWithThemeProvider, null,
        React.createElement(Theme, __assign({ ref: useForkRef([themeRef, ref]) }, rest), children)), container);
});
