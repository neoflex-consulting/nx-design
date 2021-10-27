"use strict";
exports.__esModule = true;
exports.useCheckboxEventsHandler = void 0;
var tslib_1 = require("tslib");
var Checkbox_1 = require("../../Checkbox/Checkbox");
exports.useCheckboxEventsHandler = function (props, handler, checkboxRef) {
    var newProps = tslib_1.__assign({}, props);
    newProps.onChange = function () {
        var _a;
        var onChangeArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            onChangeArgs[_i] = arguments[_i];
        }
        var _b = tslib_1.__read(onChangeArgs, 1), checked = _b[0].checked;
        var value = {
            component: Checkbox_1.cnCheckbox(),
            event: 'change',
            options: {
                label: newProps.label,
                checked: checked,
                pageURL: window.location.href,
                DOMRef: checkboxRef.current
            }
        };
        handler(value);
        return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call.apply(_a, tslib_1.__spread([props], onChangeArgs));
    };
    return newProps;
};
