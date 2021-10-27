"use strict";
exports.__esModule = true;
exports.ResponsesImageEmptyPockets = void 0;
var tslib_1 = require("tslib");
var createResponsesImage_1 = require("../createResponsesImage/createResponsesImage");
var ResponsesImageEmptyPocketsSvg_1 = tslib_1.__importDefault(require("./ResponsesImageEmptyPocketsSvg"));
exports.ResponsesImageEmptyPockets = createResponsesImage_1.createResponsesImage({
    name: 'ResponsesImageEmptyPockets',
    component: ResponsesImageEmptyPocketsSvg_1["default"]
});
