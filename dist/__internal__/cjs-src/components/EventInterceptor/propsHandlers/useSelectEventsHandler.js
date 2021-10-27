"use strict";
exports.__esModule = true;
exports.useSelectEventsHandler = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var helpers_1 = require("../../Select/helpers");
var cnSelect_1 = require("../../SelectComponents/cnSelect");
exports.useSelectEventsHandler = function (props, handler, controlRef) {
    var newProps = tslib_1.__assign({}, props);
    react_1["default"].useEffect(function () {
        if (newProps.value) {
            var value = {
                component: cnSelect_1.cnSelect(),
                event: 'change',
                options: {
                    placeholder: newProps.placeholder,
                    label: newProps.getItemLabel
                        ? newProps.getItemLabel(newProps.value)
                        : helpers_1.defaultGetItemLabel(newProps.value),
                    value: newProps.value,
                    pageURL: window.location.href,
                    DOMRef: controlRef.current
                }
            };
            handler(value);
        }
    }, [newProps.value]);
    return props;
};
