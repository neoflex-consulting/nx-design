"use strict";
exports.__esModule = true;
exports.IconRevert = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconRevert_size_m_1 = tslib_1.__importDefault(require("./IconRevert_size_m"));
var IconRevert_size_s_1 = tslib_1.__importDefault(require("./IconRevert_size_s"));
var IconRevert_size_xs_1 = tslib_1.__importDefault(require("./IconRevert_size_xs"));
exports.IconRevert = createIcon_1.createIcon({
    m: IconRevert_size_m_1["default"],
    s: IconRevert_size_s_1["default"],
    xs: IconRevert_size_xs_1["default"],
    name: 'IconRevert'
});
