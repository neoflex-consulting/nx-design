"use strict";
exports.__esModule = true;
exports.IconFunnel = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconFunnel_size_m_1 = tslib_1.__importDefault(require("./IconFunnel_size_m"));
var IconFunnel_size_s_1 = tslib_1.__importDefault(require("./IconFunnel_size_s"));
var IconFunnel_size_xs_1 = tslib_1.__importDefault(require("./IconFunnel_size_xs"));
exports.IconFunnel = createIcon_1.createIcon({
    m: IconFunnel_size_m_1["default"],
    s: IconFunnel_size_s_1["default"],
    xs: IconFunnel_size_xs_1["default"],
    name: 'IconFunnel'
});
