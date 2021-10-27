"use strict";
exports.__esModule = true;
exports.IconWatch = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconWatch_size_m_1 = tslib_1.__importDefault(require("./IconWatch_size_m"));
var IconWatch_size_s_1 = tslib_1.__importDefault(require("./IconWatch_size_s"));
var IconWatch_size_xs_1 = tslib_1.__importDefault(require("./IconWatch_size_xs"));
exports.IconWatch = createIcon_1.createIcon({
    m: IconWatch_size_m_1["default"],
    s: IconWatch_size_s_1["default"],
    xs: IconWatch_size_xs_1["default"],
    name: 'IconWatch'
});
