"use strict";
exports.__esModule = true;
exports.IconTop = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconTop_size_m_1 = tslib_1.__importDefault(require("./IconTop_size_m"));
var IconTop_size_s_1 = tslib_1.__importDefault(require("./IconTop_size_s"));
var IconTop_size_xs_1 = tslib_1.__importDefault(require("./IconTop_size_xs"));
exports.IconTop = createIcon_1.createIcon({
    m: IconTop_size_m_1["default"],
    s: IconTop_size_s_1["default"],
    xs: IconTop_size_xs_1["default"],
    name: 'IconTop'
});
