"use strict";
exports.__esModule = true;
exports.IconSmile = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconSmile_size_m_1 = tslib_1.__importDefault(require("./IconSmile_size_m"));
var IconSmile_size_s_1 = tslib_1.__importDefault(require("./IconSmile_size_s"));
var IconSmile_size_xs_1 = tslib_1.__importDefault(require("./IconSmile_size_xs"));
exports.IconSmile = createIcon_1.createIcon({
    m: IconSmile_size_m_1["default"],
    s: IconSmile_size_s_1["default"],
    xs: IconSmile_size_xs_1["default"],
    name: 'IconSmile'
});
