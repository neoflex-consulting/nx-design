"use strict";
exports.__esModule = true;
exports.IconAlert = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAlert_size_m_1 = tslib_1.__importDefault(require("./IconAlert_size_m"));
var IconAlert_size_s_1 = tslib_1.__importDefault(require("./IconAlert_size_s"));
var IconAlert_size_xs_1 = tslib_1.__importDefault(require("./IconAlert_size_xs"));
exports.IconAlert = createIcon_1.createIcon({
    m: IconAlert_size_m_1["default"],
    s: IconAlert_size_s_1["default"],
    xs: IconAlert_size_xs_1["default"],
    name: 'IconAlert'
});
