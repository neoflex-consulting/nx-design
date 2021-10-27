"use strict";
exports.__esModule = true;
exports.IconCancel = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCancel_size_m_1 = tslib_1.__importDefault(require("./IconCancel_size_m"));
var IconCancel_size_s_1 = tslib_1.__importDefault(require("./IconCancel_size_s"));
var IconCancel_size_xs_1 = tslib_1.__importDefault(require("./IconCancel_size_xs"));
exports.IconCancel = createIcon_1.createIcon({
    m: IconCancel_size_m_1["default"],
    s: IconCancel_size_s_1["default"],
    xs: IconCancel_size_xs_1["default"],
    name: 'IconCancel'
});
