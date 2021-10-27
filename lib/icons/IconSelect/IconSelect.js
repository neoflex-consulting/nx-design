"use strict";
exports.__esModule = true;
exports.IconSelect = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconSelect_size_m_1 = tslib_1.__importDefault(require("./IconSelect_size_m"));
var IconSelect_size_s_1 = tslib_1.__importDefault(require("./IconSelect_size_s"));
var IconSelect_size_xs_1 = tslib_1.__importDefault(require("./IconSelect_size_xs"));
exports.IconSelect = createIcon_1.createIcon({
    m: IconSelect_size_m_1["default"],
    s: IconSelect_size_s_1["default"],
    xs: IconSelect_size_xs_1["default"],
    name: 'IconSelect'
});
