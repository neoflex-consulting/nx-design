"use strict";
exports.__esModule = true;
exports.IconUpload = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconUpload_size_m_1 = tslib_1.__importDefault(require("./IconUpload_size_m"));
var IconUpload_size_s_1 = tslib_1.__importDefault(require("./IconUpload_size_s"));
var IconUpload_size_xs_1 = tslib_1.__importDefault(require("./IconUpload_size_xs"));
exports.IconUpload = createIcon_1.createIcon({
    m: IconUpload_size_m_1["default"],
    s: IconUpload_size_s_1["default"],
    xs: IconUpload_size_xs_1["default"],
    name: 'IconUpload'
});
