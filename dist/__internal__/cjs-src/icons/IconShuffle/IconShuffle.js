"use strict";
exports.__esModule = true;
exports.IconShuffle = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconShuffle_size_m_1 = tslib_1.__importDefault(require("./IconShuffle_size_m"));
var IconShuffle_size_s_1 = tslib_1.__importDefault(require("./IconShuffle_size_s"));
var IconShuffle_size_xs_1 = tslib_1.__importDefault(require("./IconShuffle_size_xs"));
exports.IconShuffle = createIcon_1.createIcon({
    m: IconShuffle_size_m_1["default"],
    s: IconShuffle_size_s_1["default"],
    xs: IconShuffle_size_xs_1["default"],
    name: 'IconShuffle'
});
