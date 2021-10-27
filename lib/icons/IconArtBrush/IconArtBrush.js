"use strict";
exports.__esModule = true;
exports.IconArtBrush = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconArtBrush_size_m_1 = tslib_1.__importDefault(require("./IconArtBrush_size_m"));
var IconArtBrush_size_s_1 = tslib_1.__importDefault(require("./IconArtBrush_size_s"));
var IconArtBrush_size_xs_1 = tslib_1.__importDefault(require("./IconArtBrush_size_xs"));
exports.IconArtBrush = createIcon_1.createIcon({
    m: IconArtBrush_size_m_1["default"],
    s: IconArtBrush_size_s_1["default"],
    xs: IconArtBrush_size_xs_1["default"],
    name: 'IconArtBrush'
});
