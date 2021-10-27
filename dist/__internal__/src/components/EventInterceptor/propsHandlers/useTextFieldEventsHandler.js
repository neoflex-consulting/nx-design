import { __assign, __read, __spread } from "tslib";
import React from 'react';
import { cnTextField } from '../../TextField/TextField';
export var useTextFieldEventsHandler = function (props, handler, textFieldRef) {
    var _a = __read(React.useState(false), 2), inputChanged = _a[0], setInputChanged = _a[1];
    var newProps = __assign({}, props);
    React.useEffect(function () {
        setInputChanged(true);
    }, [newProps.value]);
    newProps.onFocus = function () {
        var _a;
        var onfocusArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            onfocusArgs[_i] = arguments[_i];
        }
        setInputChanged(false);
        return (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spread([props], onfocusArgs));
    };
    newProps.onBlur = function () {
        var _a;
        var onBlurArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            onBlurArgs[_i] = arguments[_i];
        }
        var value = {
            component: cnTextField(),
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
        return (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spread([props], onBlurArgs));
    };
    return newProps;
};
