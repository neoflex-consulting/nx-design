"use strict";
exports.__esModule = true;
exports.IconPhone = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPhone_size_m_1 = tslib_1.__importDefault(require("./IconPhone_size_m"));
var IconPhone_size_s_1 = tslib_1.__importDefault(require("./IconPhone_size_s"));
var IconPhone_size_xs_1 = tslib_1.__importDefault(require("./IconPhone_size_xs"));
exports.IconPhone = createIcon_1.createIcon({
    m: IconPhone_size_m_1["default"],
    s: IconPhone_size_s_1["default"],
    xs: IconPhone_size_xs_1["default"],
    name: 'IconPhone'
});
