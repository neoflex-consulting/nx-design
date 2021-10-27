"use strict";
exports.__esModule = true;
exports.IconAttach = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAttach_size_m_1 = tslib_1.__importDefault(require("./IconAttach_size_m"));
var IconAttach_size_s_1 = tslib_1.__importDefault(require("./IconAttach_size_s"));
var IconAttach_size_xs_1 = tslib_1.__importDefault(require("./IconAttach_size_xs"));
exports.IconAttach = createIcon_1.createIcon({
    m: IconAttach_size_m_1["default"],
    s: IconAttach_size_s_1["default"],
    xs: IconAttach_size_xs_1["default"],
    name: 'IconAttach'
});
