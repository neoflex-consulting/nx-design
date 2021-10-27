"use strict";
exports.__esModule = true;
exports.IconCamera = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCamera_size_m_1 = tslib_1.__importDefault(require("./IconCamera_size_m"));
var IconCamera_size_s_1 = tslib_1.__importDefault(require("./IconCamera_size_s"));
var IconCamera_size_xs_1 = tslib_1.__importDefault(require("./IconCamera_size_xs"));
exports.IconCamera = createIcon_1.createIcon({
    m: IconCamera_size_m_1["default"],
    s: IconCamera_size_s_1["default"],
    xs: IconCamera_size_xs_1["default"],
    name: 'IconCamera'
});
