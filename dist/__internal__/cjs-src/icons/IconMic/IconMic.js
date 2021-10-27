"use strict";
exports.__esModule = true;
exports.IconMic = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconMic_size_m_1 = tslib_1.__importDefault(require("./IconMic_size_m"));
var IconMic_size_s_1 = tslib_1.__importDefault(require("./IconMic_size_s"));
var IconMic_size_xs_1 = tslib_1.__importDefault(require("./IconMic_size_xs"));
exports.IconMic = createIcon_1.createIcon({
    m: IconMic_size_m_1["default"],
    s: IconMic_size_s_1["default"],
    xs: IconMic_size_xs_1["default"],
    name: 'IconMic'
});
