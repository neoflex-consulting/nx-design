"use strict";
exports.__esModule = true;
exports.IconPlay = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPlay_size_m_1 = tslib_1.__importDefault(require("./IconPlay_size_m"));
var IconPlay_size_s_1 = tslib_1.__importDefault(require("./IconPlay_size_s"));
var IconPlay_size_xs_1 = tslib_1.__importDefault(require("./IconPlay_size_xs"));
exports.IconPlay = createIcon_1.createIcon({
    m: IconPlay_size_m_1["default"],
    s: IconPlay_size_s_1["default"],
    xs: IconPlay_size_xs_1["default"],
    name: 'IconPlay'
});
