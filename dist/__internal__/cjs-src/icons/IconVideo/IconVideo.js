"use strict";
exports.__esModule = true;
exports.IconVideo = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconVideo_size_m_1 = tslib_1.__importDefault(require("./IconVideo_size_m"));
var IconVideo_size_s_1 = tslib_1.__importDefault(require("./IconVideo_size_s"));
var IconVideo_size_xs_1 = tslib_1.__importDefault(require("./IconVideo_size_xs"));
exports.IconVideo = createIcon_1.createIcon({
    m: IconVideo_size_m_1["default"],
    s: IconVideo_size_s_1["default"],
    xs: IconVideo_size_xs_1["default"],
    name: 'IconVideo'
});
