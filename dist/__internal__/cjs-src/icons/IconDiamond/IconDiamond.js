"use strict";
exports.__esModule = true;
exports.IconDiamond = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDiamond_size_m_1 = tslib_1.__importDefault(require("./IconDiamond_size_m"));
var IconDiamond_size_s_1 = tslib_1.__importDefault(require("./IconDiamond_size_s"));
var IconDiamond_size_xs_1 = tslib_1.__importDefault(require("./IconDiamond_size_xs"));
exports.IconDiamond = createIcon_1.createIcon({
    m: IconDiamond_size_m_1["default"],
    s: IconDiamond_size_s_1["default"],
    xs: IconDiamond_size_xs_1["default"],
    name: 'IconDiamond'
});
