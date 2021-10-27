"use strict";
exports.__esModule = true;
exports.IconResize = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconResize_size_m_1 = tslib_1.__importDefault(require("./IconResize_size_m"));
var IconResize_size_s_1 = tslib_1.__importDefault(require("./IconResize_size_s"));
var IconResize_size_xs_1 = tslib_1.__importDefault(require("./IconResize_size_xs"));
exports.IconResize = createIcon_1.createIcon({
    m: IconResize_size_m_1["default"],
    s: IconResize_size_s_1["default"],
    xs: IconResize_size_xs_1["default"],
    name: 'IconResize'
});
