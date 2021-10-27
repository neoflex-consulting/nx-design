"use strict";
exports.__esModule = true;
exports.IconSearch = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconSearch_size_m_1 = tslib_1.__importDefault(require("./IconSearch_size_m"));
var IconSearch_size_s_1 = tslib_1.__importDefault(require("./IconSearch_size_s"));
var IconSearch_size_xs_1 = tslib_1.__importDefault(require("./IconSearch_size_xs"));
exports.IconSearch = createIcon_1.createIcon({
    m: IconSearch_size_m_1["default"],
    s: IconSearch_size_s_1["default"],
    xs: IconSearch_size_xs_1["default"],
    name: 'IconSearch'
});
