"use strict";
exports.__esModule = true;
exports.IconCopy = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCopy_size_m_1 = tslib_1.__importDefault(require("./IconCopy_size_m"));
var IconCopy_size_s_1 = tslib_1.__importDefault(require("./IconCopy_size_s"));
var IconCopy_size_xs_1 = tslib_1.__importDefault(require("./IconCopy_size_xs"));
exports.IconCopy = createIcon_1.createIcon({
    m: IconCopy_size_m_1["default"],
    s: IconCopy_size_s_1["default"],
    xs: IconCopy_size_xs_1["default"],
    name: 'IconCopy'
});
