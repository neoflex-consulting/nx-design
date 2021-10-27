"use strict";
exports.__esModule = true;
exports.IconAlignRight = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAlignRight_size_m_1 = tslib_1.__importDefault(require("./IconAlignRight_size_m"));
var IconAlignRight_size_s_1 = tslib_1.__importDefault(require("./IconAlignRight_size_s"));
exports.IconAlignRight = createIcon_1.createIcon({
    m: IconAlignRight_size_m_1["default"],
    s: IconAlignRight_size_s_1["default"],
    xs: IconAlignRight_size_s_1["default"],
    name: 'IconAlignRight'
});
