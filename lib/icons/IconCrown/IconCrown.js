"use strict";
exports.__esModule = true;
exports.IconCrown = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCrown_size_m_1 = tslib_1.__importDefault(require("./IconCrown_size_m"));
var IconCrown_size_s_1 = tslib_1.__importDefault(require("./IconCrown_size_s"));
var IconCrown_size_xs_1 = tslib_1.__importDefault(require("./IconCrown_size_xs"));
exports.IconCrown = createIcon_1.createIcon({
    m: IconCrown_size_m_1["default"],
    s: IconCrown_size_s_1["default"],
    xs: IconCrown_size_xs_1["default"],
    name: 'IconCrown'
});
