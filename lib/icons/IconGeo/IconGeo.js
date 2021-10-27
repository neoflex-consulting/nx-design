"use strict";
exports.__esModule = true;
exports.IconGeo = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconGeo_size_m_1 = tslib_1.__importDefault(require("./IconGeo_size_m"));
var IconGeo_size_s_1 = tslib_1.__importDefault(require("./IconGeo_size_s"));
var IconGeo_size_xs_1 = tslib_1.__importDefault(require("./IconGeo_size_xs"));
exports.IconGeo = createIcon_1.createIcon({
    m: IconGeo_size_m_1["default"],
    s: IconGeo_size_s_1["default"],
    xs: IconGeo_size_xs_1["default"],
    name: 'IconGeo'
});
