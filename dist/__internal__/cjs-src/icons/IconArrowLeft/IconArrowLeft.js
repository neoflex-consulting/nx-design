"use strict";
exports.__esModule = true;
exports.IconArrowLeft = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconArrowLeft_size_m_1 = tslib_1.__importDefault(require("./IconArrowLeft_size_m"));
var IconArrowLeft_size_s_1 = tslib_1.__importDefault(require("./IconArrowLeft_size_s"));
var IconArrowLeft_size_xs_1 = tslib_1.__importDefault(require("./IconArrowLeft_size_xs"));
exports.IconArrowLeft = createIcon_1.createIcon({
    m: IconArrowLeft_size_m_1["default"],
    s: IconArrowLeft_size_s_1["default"],
    xs: IconArrowLeft_size_xs_1["default"],
    name: 'IconArrowLeft'
});
