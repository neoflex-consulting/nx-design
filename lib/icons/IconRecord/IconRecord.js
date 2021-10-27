"use strict";
exports.__esModule = true;
exports.IconRecord = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconRecord_size_m_1 = tslib_1.__importDefault(require("./IconRecord_size_m"));
var IconRecord_size_s_1 = tslib_1.__importDefault(require("./IconRecord_size_s"));
var IconRecord_size_xs_1 = tslib_1.__importDefault(require("./IconRecord_size_xs"));
exports.IconRecord = createIcon_1.createIcon({
    m: IconRecord_size_m_1["default"],
    s: IconRecord_size_s_1["default"],
    xs: IconRecord_size_xs_1["default"],
    name: 'IconRecord'
});
