"use strict";
exports.__esModule = true;
exports.IconTarget = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconTarget_size_m_1 = tslib_1.__importDefault(require("./IconTarget_size_m"));
var IconTarget_size_s_1 = tslib_1.__importDefault(require("./IconTarget_size_s"));
var IconTarget_size_xs_1 = tslib_1.__importDefault(require("./IconTarget_size_xs"));
exports.IconTarget = createIcon_1.createIcon({
    m: IconTarget_size_m_1["default"],
    s: IconTarget_size_s_1["default"],
    xs: IconTarget_size_xs_1["default"],
    name: 'IconTarget'
});
