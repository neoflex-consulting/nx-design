"use strict";
exports.__esModule = true;
exports.IconClose = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconClose_size_m_1 = tslib_1.__importDefault(require("./IconClose_size_m"));
var IconClose_size_s_1 = tslib_1.__importDefault(require("./IconClose_size_s"));
var IconClose_size_xs_1 = tslib_1.__importDefault(require("./IconClose_size_xs"));
exports.IconClose = createIcon_1.createIcon({
    m: IconClose_size_m_1["default"],
    s: IconClose_size_s_1["default"],
    xs: IconClose_size_xs_1["default"],
    name: 'IconClose'
});
