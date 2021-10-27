"use strict";
exports.__esModule = true;
exports.useSnackBarEventsHandler = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var SnackBar_1 = require("../../SnackBar/SnackBar");
exports.useSnackBarEventsHandler = function (props, handler) {
    var newProps = tslib_1.__assign({}, props);
    react_1["default"].useEffect(function () {
        if (newProps.items.length) {
            var value = {
                component: SnackBar_1.cnSnackBar(),
                event: 'change',
                options: {
                    pageURL: window.location.href,
                    DOMRef: document.getElementsByClassName(SnackBar_1.cnSnackBar())[0],
                    items: newProps.items
                }
            };
            handler(value);
        }
    }, [newProps.items.length]);
    return newProps;
};
