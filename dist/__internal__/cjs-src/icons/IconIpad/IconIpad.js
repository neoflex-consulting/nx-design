"use strict";
exports.__esModule = true;
exports.IconIpad = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconIpad_size_m_1 = tslib_1.__importDefault(require("./IconIpad_size_m"));
var IconIpad_size_s_1 = tslib_1.__importDefault(require("./IconIpad_size_s"));
var IconIpad_size_xs_1 = tslib_1.__importDefault(require("./IconIpad_size_xs"));
exports.IconIpad = createIcon_1.createIcon({
    m: IconIpad_size_m_1["default"],
    s: IconIpad_size_s_1["default"],
    xs: IconIpad_size_xs_1["default"],
    name: 'IconIpad'
});
