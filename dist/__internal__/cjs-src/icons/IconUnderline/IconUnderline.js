"use strict";
exports.__esModule = true;
exports.IconUnderline = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconUnderline_size_m_1 = tslib_1.__importDefault(require("./IconUnderline_size_m"));
var IconUnderline_size_s_1 = tslib_1.__importDefault(require("./IconUnderline_size_s"));
exports.IconUnderline = createIcon_1.createIcon({
    m: IconUnderline_size_m_1["default"],
    s: IconUnderline_size_s_1["default"],
    xs: IconUnderline_size_s_1["default"],
    name: 'IconUnderline'
});
