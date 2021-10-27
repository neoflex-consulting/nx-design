"use strict";
exports.__esModule = true;
exports.IconArrowRight = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconArrowRight_size_m_1 = tslib_1.__importDefault(require("./IconArrowRight_size_m"));
var IconArrowRight_size_s_1 = tslib_1.__importDefault(require("./IconArrowRight_size_s"));
var IconArrowRight_size_xs_1 = tslib_1.__importDefault(require("./IconArrowRight_size_xs"));
exports.IconArrowRight = createIcon_1.createIcon({
    m: IconArrowRight_size_m_1["default"],
    s: IconArrowRight_size_s_1["default"],
    xs: IconArrowRight_size_xs_1["default"],
    name: 'IconArrowRight'
});
