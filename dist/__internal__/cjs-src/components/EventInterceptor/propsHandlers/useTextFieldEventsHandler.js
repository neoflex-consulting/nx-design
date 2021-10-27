"use strict";
exports.__esModule = true;
exports.useTextFieldEventsHandler = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TextField_1 = require("../../TextField/TextField");
exports.useTextFieldEventsHandler = function (props, handler, textFieldRef) {
    var _a = tslib_1.__read(react_1["default"].useState(false), 2), inputChanged = _a[0], setInputChanged = _a[1];
    var newProps = tslib_1.__assign({}, props);
    react_1["default"].useEffect(function () {
        setInputChanged(true);
    }, [newProps.value]);
    newProps.onFocus = function () {
        var _a;
        var onfocusArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            onfocusArgs[_i] = arguments[_i];
        }
        setInputChanged(false);
        return (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call.apply(_a, tslib_1.__spread([props], onfocusArgs));
    };
    newProps.onBlur = function () {
        var _a;
        var onBlurArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            onBlurArgs[_i] = arguments[_i];
        }
        var value = {
            component: TextField_1.cnTextField(),
            event: 'change',
            options: {
                placeholder: newProps.placeholder,
                pageURL: window.location.href,
                DOMRef: textFieldRef.current,
                value: newProps.value
            }
        };
        if (inputChanged) {
            handler(value);
        }
        return (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call.apply(_a, tslib_1.__spread([props], onBlurArgs));
    };
    return newProps;
};
