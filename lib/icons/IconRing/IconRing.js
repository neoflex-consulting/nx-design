"use strict";
exports.__esModule = true;
exports.IconRing = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconRing_size_m_1 = tslib_1.__importDefault(require("./IconRing_size_m"));
var IconRing_size_s_1 = tslib_1.__importDefault(require("./IconRing_size_s"));
var IconRing_size_xs_1 = tslib_1.__importDefault(require("./IconRing_size_xs"));
exports.IconRing = createIcon_1.createIcon({
    m: IconRing_size_m_1["default"],
    s: IconRing_size_s_1["default"],
    xs: IconRing_size_xs_1["default"],
    name: 'IconRing'
});
