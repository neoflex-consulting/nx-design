"use strict";
exports.__esModule = true;
exports.IconSun = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconSun_size_m_1 = tslib_1.__importDefault(require("./IconSun_size_m"));
var IconSun_size_s_1 = tslib_1.__importDefault(require("./IconSun_size_s"));
var IconSun_size_xs_1 = tslib_1.__importDefault(require("./IconSun_size_xs"));
exports.IconSun = createIcon_1.createIcon({
    m: IconSun_size_m_1["default"],
    s: IconSun_size_s_1["default"],
    xs: IconSun_size_xs_1["default"],
    name: 'IconSun'
});
