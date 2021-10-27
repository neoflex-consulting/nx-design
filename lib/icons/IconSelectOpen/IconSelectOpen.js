"use strict";
exports.__esModule = true;
exports.IconSelectOpen = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconSelectOpen_size_m_1 = tslib_1.__importDefault(require("./IconSelectOpen_size_m"));
var IconSelectOpen_size_s_1 = tslib_1.__importDefault(require("./IconSelectOpen_size_s"));
var IconSelectOpen_size_xs_1 = tslib_1.__importDefault(require("./IconSelectOpen_size_xs"));
exports.IconSelectOpen = createIcon_1.createIcon({
    m: IconSelectOpen_size_m_1["default"],
    s: IconSelectOpen_size_s_1["default"],
    xs: IconSelectOpen_size_xs_1["default"],
    name: 'IconSelectOpen'
});
