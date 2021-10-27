"use strict";
exports.__esModule = true;
exports.IconDownload = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDownload_size_m_1 = tslib_1.__importDefault(require("./IconDownload_size_m"));
var IconDownload_size_s_1 = tslib_1.__importDefault(require("./IconDownload_size_s"));
var IconDownload_size_xs_1 = tslib_1.__importDefault(require("./IconDownload_size_xs"));
exports.IconDownload = createIcon_1.createIcon({
    m: IconDownload_size_m_1["default"],
    s: IconDownload_size_s_1["default"],
    xs: IconDownload_size_xs_1["default"],
    name: 'IconDownload'
});
