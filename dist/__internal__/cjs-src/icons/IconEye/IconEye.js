"use strict";
exports.__esModule = true;
exports.IconEye = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconEye_size_m_1 = tslib_1.__importDefault(require("./IconEye_size_m"));
var IconEye_size_s_1 = tslib_1.__importDefault(require("./IconEye_size_s"));
var IconEye_size_xs_1 = tslib_1.__importDefault(require("./IconEye_size_xs"));
exports.IconEye = createIcon_1.createIcon({
    m: IconEye_size_m_1["default"],
    s: IconEye_size_s_1["default"],
    xs: IconEye_size_xs_1["default"],
    name: 'IconEye'
});
