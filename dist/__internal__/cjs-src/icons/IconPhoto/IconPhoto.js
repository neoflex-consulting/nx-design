"use strict";
exports.__esModule = true;
exports.IconPhoto = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPhoto_size_m_1 = tslib_1.__importDefault(require("./IconPhoto_size_m"));
var IconPhoto_size_s_1 = tslib_1.__importDefault(require("./IconPhoto_size_s"));
var IconPhoto_size_xs_1 = tslib_1.__importDefault(require("./IconPhoto_size_xs"));
exports.IconPhoto = createIcon_1.createIcon({
    m: IconPhoto_size_m_1["default"],
    s: IconPhoto_size_s_1["default"],
    xs: IconPhoto_size_xs_1["default"],
    name: 'IconPhoto'
});
