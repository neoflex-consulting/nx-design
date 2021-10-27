"use strict";
exports.__esModule = true;
exports.IconCollapse = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCollapse_size_m_1 = tslib_1.__importDefault(require("./IconCollapse_size_m"));
var IconCollapse_size_s_1 = tslib_1.__importDefault(require("./IconCollapse_size_s"));
var IconCollapse_size_xs_1 = tslib_1.__importDefault(require("./IconCollapse_size_xs"));
exports.IconCollapse = createIcon_1.createIcon({
    m: IconCollapse_size_m_1["default"],
    s: IconCollapse_size_s_1["default"],
    xs: IconCollapse_size_xs_1["default"],
    name: 'IconCollapse'
});
