"use strict";
exports.__esModule = true;
exports.IconArrowDown = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconArrowDown_size_m_1 = tslib_1.__importDefault(require("./IconArrowDown_size_m"));
var IconArrowDown_size_s_1 = tslib_1.__importDefault(require("./IconArrowDown_size_s"));
var IconArrowDown_size_xs_1 = tslib_1.__importDefault(require("./IconArrowDown_size_xs"));
exports.IconArrowDown = createIcon_1.createIcon({
    m: IconArrowDown_size_m_1["default"],
    s: IconArrowDown_size_s_1["default"],
    xs: IconArrowDown_size_xs_1["default"],
    name: 'IconArrowDown'
});
