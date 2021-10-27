"use strict";
exports.__esModule = true;
exports.IconTie = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconTie_size_m_1 = tslib_1.__importDefault(require("./IconTie_size_m"));
var IconTie_size_s_1 = tslib_1.__importDefault(require("./IconTie_size_s"));
var IconTie_size_xs_1 = tslib_1.__importDefault(require("./IconTie_size_xs"));
exports.IconTie = createIcon_1.createIcon({
    m: IconTie_size_m_1["default"],
    s: IconTie_size_s_1["default"],
    xs: IconTie_size_xs_1["default"],
    name: 'IconTie'
});
