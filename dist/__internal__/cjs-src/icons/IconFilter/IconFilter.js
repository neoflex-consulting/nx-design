"use strict";
exports.__esModule = true;
exports.IconFilter = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconFilter_size_m_1 = tslib_1.__importDefault(require("./IconFilter_size_m"));
var IconFilter_size_s_1 = tslib_1.__importDefault(require("./IconFilter_size_s"));
var IconFilter_size_xs_1 = tslib_1.__importDefault(require("./IconFilter_size_xs"));
exports.IconFilter = createIcon_1.createIcon({
    m: IconFilter_size_m_1["default"],
    s: IconFilter_size_s_1["default"],
    xs: IconFilter_size_xs_1["default"],
    name: 'IconFilter'
});
