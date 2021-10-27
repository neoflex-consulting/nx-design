"use strict";
exports.__esModule = true;
exports.IconHand = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconHand_size_m_1 = tslib_1.__importDefault(require("./IconHand_size_m"));
var IconHand_size_s_1 = tslib_1.__importDefault(require("./IconHand_size_s"));
var IconHand_size_xs_1 = tslib_1.__importDefault(require("./IconHand_size_xs"));
exports.IconHand = createIcon_1.createIcon({
    m: IconHand_size_m_1["default"],
    s: IconHand_size_s_1["default"],
    xs: IconHand_size_xs_1["default"],
    name: 'IconHand'
});
