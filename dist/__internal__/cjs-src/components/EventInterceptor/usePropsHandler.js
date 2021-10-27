"use strict";
exports.__esModule = true;
exports.usePropsHandler = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var EventInterceptor_1 = require("./EventInterceptor");
exports.usePropsHandler = function (componentName, props, ref) {
    var context = react_1["default"].useContext(EventInterceptor_1.EventInterceptorContext);
    if (!context) {
        return props;
    }
    var eventHandler = context.eventHandler, map = context.map;
    var propsHandler = map[componentName];
    if (!propsHandler) {
        return props;
    }
    return propsHandler(props, eventHandler, ref);
};
