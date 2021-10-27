"use strict";
exports.__esModule = true;
exports.EventInterceptorProvider = exports.EventInterceptorContext = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var eventInterceptorPropComponent = [
    'Button',
    'TextField',
    'Checkbox',
    'SnackBar',
    'Select',
];
// eslint-disable-next-line @typescript-eslint/no-empty-function
var EventInterceptorContext = react_1["default"].createContext(undefined);
exports.EventInterceptorContext = EventInterceptorContext;
var EventInterceptorProvider = function (_a) {
    var children = _a.children, eventHandler = _a.eventHandler, map = _a.map;
    return (react_1["default"].createElement(EventInterceptorContext.Provider, { value: { eventHandler: eventHandler, map: map } }, children));
};
exports.EventInterceptorProvider = EventInterceptorProvider;
tslib_1.__exportStar(require("./eventInterceptorMap"), exports);
