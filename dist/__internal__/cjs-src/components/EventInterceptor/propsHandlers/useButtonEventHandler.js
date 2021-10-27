"use strict";
exports.__esModule = true;
exports.useButtonEventHandler = void 0;
var tslib_1 = require("tslib");
var Button_1 = require("../../Button/Button");
exports.useButtonEventHandler = function (props, handler) {
    var newProps = tslib_1.__assign({}, props);
    newProps.onClick = function () {
        var _a;
        var onClickArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            onClickArgs[_i] = arguments[_i];
        }
        var _b = tslib_1.__read(onClickArgs, 1), e = _b[0];
        var value = {
            component: Button_1.cnButton(),
            event: e.type,
            options: {
                text: e.currentTarget.innerText,
                pageURL: e.currentTarget.baseURI,
                DOMRef: e.currentTarget
            }
        };
        handler(value);
        return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call.apply(_a, tslib_1.__spread([props], onClickArgs));
    };
    return newProps;
};
