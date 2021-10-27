"use strict";
exports.__esModule = true;
exports.IconHamburger = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconHamburger_size_m_1 = tslib_1.__importDefault(require("./IconHamburger_size_m"));
var IconHamburger_size_s_1 = tslib_1.__importDefault(require("./IconHamburger_size_s"));
var IconHamburger_size_xs_1 = tslib_1.__importDefault(require("./IconHamburger_size_xs"));
exports.IconHamburger = createIcon_1.createIcon({
    m: IconHamburger_size_m_1["default"],
    s: IconHamburger_size_s_1["default"],
    xs: IconHamburger_size_xs_1["default"],
    name: 'IconHamburger'
});
