"use strict";
exports.__esModule = true;
exports.IconEyeClose = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconEyeClose_size_m_1 = tslib_1.__importDefault(require("./IconEyeClose_size_m"));
var IconEyeClose_size_s_1 = tslib_1.__importDefault(require("./IconEyeClose_size_s"));
var IconEyeClose_size_xs_1 = tslib_1.__importDefault(require("./IconEyeClose_size_xs"));
exports.IconEyeClose = createIcon_1.createIcon({
    m: IconEyeClose_size_m_1["default"],
    s: IconEyeClose_size_s_1["default"],
    xs: IconEyeClose_size_xs_1["default"],
    name: 'IconEyeClose'
});
