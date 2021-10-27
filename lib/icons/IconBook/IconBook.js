"use strict";
exports.__esModule = true;
exports.IconBook = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconBook_size_m_1 = tslib_1.__importDefault(require("./IconBook_size_m"));
var IconBook_size_s_1 = tslib_1.__importDefault(require("./IconBook_size_s"));
var IconBook_size_xs_1 = tslib_1.__importDefault(require("./IconBook_size_xs"));
exports.IconBook = createIcon_1.createIcon({
    m: IconBook_size_m_1["default"],
    s: IconBook_size_s_1["default"],
    xs: IconBook_size_xs_1["default"],
    name: 'IconBook'
});
