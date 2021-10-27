"use strict";
exports.__esModule = true;
exports.IconSettings = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconSettings_size_m_1 = tslib_1.__importDefault(require("./IconSettings_size_m"));
var IconSettings_size_s_1 = tslib_1.__importDefault(require("./IconSettings_size_s"));
var IconSettings_size_xs_1 = tslib_1.__importDefault(require("./IconSettings_size_xs"));
exports.IconSettings = createIcon_1.createIcon({
    m: IconSettings_size_m_1["default"],
    s: IconSettings_size_s_1["default"],
    xs: IconSettings_size_xs_1["default"],
    name: 'IconSettings'
});
