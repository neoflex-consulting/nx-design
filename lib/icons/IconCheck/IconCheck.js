"use strict";
exports.__esModule = true;
exports.IconCheck = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCheck_size_m_1 = tslib_1.__importDefault(require("./IconCheck_size_m"));
var IconCheck_size_s_1 = tslib_1.__importDefault(require("./IconCheck_size_s"));
var IconCheck_size_xs_1 = tslib_1.__importDefault(require("./IconCheck_size_xs"));
exports.IconCheck = createIcon_1.createIcon({
    m: IconCheck_size_m_1["default"],
    s: IconCheck_size_s_1["default"],
    xs: IconCheck_size_xs_1["default"],
    name: 'IconCheck'
});
