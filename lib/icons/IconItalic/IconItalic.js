"use strict";
exports.__esModule = true;
exports.IconItalic = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconItalic_size_m_1 = tslib_1.__importDefault(require("./IconItalic_size_m"));
var IconItalic_size_s_1 = tslib_1.__importDefault(require("./IconItalic_size_s"));
exports.IconItalic = createIcon_1.createIcon({
    m: IconItalic_size_m_1["default"],
    s: IconItalic_size_s_1["default"],
    xs: IconItalic_size_s_1["default"],
    name: 'IconItalic'
});
