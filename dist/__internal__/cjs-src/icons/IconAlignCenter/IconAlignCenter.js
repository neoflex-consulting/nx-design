"use strict";
exports.__esModule = true;
exports.IconAlignCenter = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAlignCenter_size_m_1 = tslib_1.__importDefault(require("./IconAlignCenter_size_m"));
var IconAlignCenter_size_s_1 = tslib_1.__importDefault(require("./IconAlignCenter_size_s"));
exports.IconAlignCenter = createIcon_1.createIcon({
    m: IconAlignCenter_size_m_1["default"],
    s: IconAlignCenter_size_s_1["default"],
    xs: IconAlignCenter_size_s_1["default"],
    name: 'IconAlignCenter'
});
