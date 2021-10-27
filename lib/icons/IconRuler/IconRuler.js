"use strict";
exports.__esModule = true;
exports.IconRuler = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconRuler_size_m_1 = tslib_1.__importDefault(require("./IconRuler_size_m"));
var IconRuler_size_s_1 = tslib_1.__importDefault(require("./IconRuler_size_s"));
var IconRuler_size_xs_1 = tslib_1.__importDefault(require("./IconRuler_size_xs"));
exports.IconRuler = createIcon_1.createIcon({
    m: IconRuler_size_m_1["default"],
    s: IconRuler_size_s_1["default"],
    xs: IconRuler_size_xs_1["default"],
    name: 'IconRuler'
});
