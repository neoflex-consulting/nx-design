"use strict";
exports.__esModule = true;
exports.ResponsesImageDeleted = void 0;
var tslib_1 = require("tslib");
var createResponsesImage_1 = require("../createResponsesImage/createResponsesImage");
var ResponsesImageDeletedSvg_1 = tslib_1.__importDefault(require("./ResponsesImageDeletedSvg"));
exports.ResponsesImageDeleted = createResponsesImage_1.createResponsesImage({
    name: 'ResponsesImageDeleted',
    component: ResponsesImageDeletedSvg_1["default"]
});
