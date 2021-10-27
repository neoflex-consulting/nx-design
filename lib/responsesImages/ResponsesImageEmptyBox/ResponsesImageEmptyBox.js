"use strict";
exports.__esModule = true;
exports.ResponsesImageEmptyBox = void 0;
var tslib_1 = require("tslib");
var createResponsesImage_1 = require("../createResponsesImage/createResponsesImage");
var ResponsesImageEmptyBoxSvg_1 = tslib_1.__importDefault(require("./ResponsesImageEmptyBoxSvg"));
exports.ResponsesImageEmptyBox = createResponsesImage_1.createResponsesImage({
    name: 'ResponsesImageEmptyBox',
    component: ResponsesImageEmptyBoxSvg_1["default"]
});
