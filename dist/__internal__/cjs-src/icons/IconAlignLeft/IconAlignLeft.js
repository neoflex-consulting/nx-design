"use strict";
exports.__esModule = true;
exports.IconAlignLeft = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAlignLeft_size_m_1 = tslib_1.__importDefault(require("./IconAlignLeft_size_m"));
var IconAlignLeft_size_s_1 = tslib_1.__importDefault(require("./IconAlignLeft_size_s"));
exports.IconAlignLeft = createIcon_1.createIcon({
    m: IconAlignLeft_size_m_1["default"],
    s: IconAlignLeft_size_s_1["default"],
    xs: IconAlignLeft_size_s_1["default"],
    name: 'IconAlignLeft'
});
