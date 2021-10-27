"use strict";
exports.__esModule = true;
exports.IconMap = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconMap_size_m_1 = tslib_1.__importDefault(require("./IconMap_size_m"));
var IconMap_size_s_1 = tslib_1.__importDefault(require("./IconMap_size_s"));
var IconMap_size_xs_1 = tslib_1.__importDefault(require("./IconMap_size_xs"));
exports.IconMap = createIcon_1.createIcon({
    m: IconMap_size_m_1["default"],
    s: IconMap_size_s_1["default"],
    xs: IconMap_size_xs_1["default"],
    name: 'IconMap'
});
