"use strict";
exports.__esModule = true;
exports.ResponsesImageNothingFound = void 0;
var tslib_1 = require("tslib");
var createResponsesImage_1 = require("../createResponsesImage/createResponsesImage");
var ResponsesImageNothingFoundSvg_1 = tslib_1.__importDefault(require("./ResponsesImageNothingFoundSvg"));
exports.ResponsesImageNothingFound = createResponsesImage_1.createResponsesImage({
    name: 'ResponsesImageNothingFound',
    component: ResponsesImageNothingFoundSvg_1["default"]
});
