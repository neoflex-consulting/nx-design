"use strict";
exports.__esModule = true;
exports.ResponsesImageConnectionError = void 0;
var tslib_1 = require("tslib");
var createResponsesImage_1 = require("../createResponsesImage/createResponsesImage");
var ResponsesImageConnectionErrorSvg_1 = tslib_1.__importDefault(require("./ResponsesImageConnectionErrorSvg"));
exports.ResponsesImageConnectionError = createResponsesImage_1.createResponsesImage({
    name: 'ResponsesImageConnectionError',
    component: ResponsesImageConnectionErrorSvg_1["default"]
});
