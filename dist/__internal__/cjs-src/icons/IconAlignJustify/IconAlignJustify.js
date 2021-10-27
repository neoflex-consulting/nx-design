"use strict";
exports.__esModule = true;
exports.IconAlignJustify = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAlignJustify_size_m_1 = tslib_1.__importDefault(require("./IconAlignJustify_size_m"));
var IconAlignJustify_size_s_1 = tslib_1.__importDefault(require("./IconAlignJustify_size_s"));
exports.IconAlignJustify = createIcon_1.createIcon({
    m: IconAlignJustify_size_m_1["default"],
    s: IconAlignJustify_size_s_1["default"],
    xs: IconAlignJustify_size_s_1["default"],
    name: 'IconAlignJustify'
});
