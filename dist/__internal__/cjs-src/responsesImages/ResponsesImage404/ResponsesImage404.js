"use strict";
exports.__esModule = true;
exports.ResponsesImage404 = void 0;
var tslib_1 = require("tslib");
var createResponsesImage_1 = require("../createResponsesImage/createResponsesImage");
var ResponsesImage404Svg_1 = tslib_1.__importDefault(require("./ResponsesImage404Svg"));
exports.ResponsesImage404 = createResponsesImage_1.createResponsesImage({
    name: 'ResponsesImage404',
    component: ResponsesImage404Svg_1["default"]
});
