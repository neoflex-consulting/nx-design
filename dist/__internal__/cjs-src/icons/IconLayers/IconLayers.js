"use strict";
exports.__esModule = true;
exports.IconLayers = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconLayers_size_m_1 = tslib_1.__importDefault(require("./IconLayers_size_m"));
var IconLayers_size_s_1 = tslib_1.__importDefault(require("./IconLayers_size_s"));
var IconLayers_size_xs_1 = tslib_1.__importDefault(require("./IconLayers_size_xs"));
exports.IconLayers = createIcon_1.createIcon({
    m: IconLayers_size_m_1["default"],
    s: IconLayers_size_s_1["default"],
    xs: IconLayers_size_xs_1["default"],
    name: 'IconLayers'
});
