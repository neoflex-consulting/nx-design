"use strict";
exports.__esModule = true;
exports.IconInfo = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconInfo_size_m_1 = tslib_1.__importDefault(require("./IconInfo_size_m"));
var IconInfo_size_s_1 = tslib_1.__importDefault(require("./IconInfo_size_s"));
var IconInfo_size_xs_1 = tslib_1.__importDefault(require("./IconInfo_size_xs"));
exports.IconInfo = createIcon_1.createIcon({
    m: IconInfo_size_m_1["default"],
    s: IconInfo_size_s_1["default"],
    xs: IconInfo_size_xs_1["default"],
    name: 'IconInfo'
});
