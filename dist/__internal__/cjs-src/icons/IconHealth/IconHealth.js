"use strict";
exports.__esModule = true;
exports.IconHealth = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconHealth_size_m_1 = tslib_1.__importDefault(require("./IconHealth_size_m"));
var IconHealth_size_s_1 = tslib_1.__importDefault(require("./IconHealth_size_s"));
var IconHealth_size_xs_1 = tslib_1.__importDefault(require("./IconHealth_size_xs"));
exports.IconHealth = createIcon_1.createIcon({
    m: IconHealth_size_m_1["default"],
    s: IconHealth_size_s_1["default"],
    xs: IconHealth_size_xs_1["default"],
    name: 'IconHealth'
});
