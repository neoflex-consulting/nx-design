"use strict";
exports.__esModule = true;
exports.IconLaptop = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconLaptop_size_m_1 = tslib_1.__importDefault(require("./IconLaptop_size_m"));
var IconLaptop_size_s_1 = tslib_1.__importDefault(require("./IconLaptop_size_s"));
var IconLaptop_size_xs_1 = tslib_1.__importDefault(require("./IconLaptop_size_xs"));
exports.IconLaptop = createIcon_1.createIcon({
    m: IconLaptop_size_m_1["default"],
    s: IconLaptop_size_s_1["default"],
    xs: IconLaptop_size_xs_1["default"],
    name: 'IconLaptop'
});
