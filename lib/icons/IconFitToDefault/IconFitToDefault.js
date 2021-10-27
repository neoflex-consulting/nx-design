"use strict";
exports.__esModule = true;
exports.IconFitToDefault = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconFitToDefault_size_m_1 = tslib_1.__importDefault(require("./IconFitToDefault_size_m"));
var IconFitToDefault_size_s_1 = tslib_1.__importDefault(require("./IconFitToDefault_size_s"));
var IconFitToDefault_size_xs_1 = tslib_1.__importDefault(require("./IconFitToDefault_size_xs"));
exports.IconFitToDefault = createIcon_1.createIcon({
    m: IconFitToDefault_size_m_1["default"],
    s: IconFitToDefault_size_s_1["default"],
    xs: IconFitToDefault_size_xs_1["default"],
    name: 'IconFitToDefault'
});
