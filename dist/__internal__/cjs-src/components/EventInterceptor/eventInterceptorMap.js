"use strict";
exports.__esModule = true;
exports.eventInterceptorMap = void 0;
var useButtonEventHandler_1 = require("./propsHandlers/useButtonEventHandler");
var useCheckboxEventsHandler_1 = require("./propsHandlers/useCheckboxEventsHandler");
var useSelectEventsHandler_1 = require("./propsHandlers/useSelectEventsHandler");
var useSnackBarEventsHandler_1 = require("./propsHandlers/useSnackBarEventsHandler");
var useTextFieldEventsHandler_1 = require("./propsHandlers/useTextFieldEventsHandler");
exports.eventInterceptorMap = {
    Button: useButtonEventHandler_1.useButtonEventHandler,
    TextField: useTextFieldEventsHandler_1.useTextFieldEventsHandler,
    Checkbox: useCheckboxEventsHandler_1.useCheckboxEventsHandler,
    SnackBar: useSnackBarEventsHandler_1.useSnackBarEventsHandler,
    Select: useSelectEventsHandler_1.useSelectEventsHandler
};
