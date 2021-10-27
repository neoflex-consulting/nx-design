"use strict";
exports.__esModule = true;
exports.IconIntroduction = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconIntroduction_size_m_1 = tslib_1.__importDefault(require("./IconIntroduction_size_m"));
var IconIntroduction_size_s_1 = tslib_1.__importDefault(require("./IconIntroduction_size_s"));
var IconIntroduction_size_xs_1 = tslib_1.__importDefault(require("./IconIntroduction_size_xs"));
exports.IconIntroduction = createIcon_1.createIcon({
    m: IconIntroduction_size_m_1["default"],
    s: IconIntroduction_size_s_1["default"],
    xs: IconIntroduction_size_xs_1["default"],
    name: 'IconIntroduction'
});
