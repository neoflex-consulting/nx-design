"use strict";
exports.__esModule = true;
exports.ResponsesImageSuccess = void 0;
var tslib_1 = require("tslib");
var createResponsesImage_1 = require("../createResponsesImage/createResponsesImage");
var ResponsesImageSuccessSvg_1 = tslib_1.__importDefault(require("./ResponsesImageSuccessSvg"));
exports.ResponsesImageSuccess = createResponsesImage_1.createResponsesImage({
    name: 'ResponsesImageSuccess',
    component: ResponsesImageSuccessSvg_1["default"]
});
