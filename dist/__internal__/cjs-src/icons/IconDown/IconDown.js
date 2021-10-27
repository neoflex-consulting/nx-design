"use strict";
exports.__esModule = true;
exports.IconDown = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDown_size_m_1 = tslib_1.__importDefault(require("./IconDown_size_m"));
var IconDown_size_s_1 = tslib_1.__importDefault(require("./IconDown_size_s"));
var IconDown_size_xs_1 = tslib_1.__importDefault(require("./IconDown_size_xs"));
exports.IconDown = createIcon_1.createIcon({
    m: IconDown_size_m_1["default"],
    s: IconDown_size_s_1["default"],
    xs: IconDown_size_xs_1["default"],
    name: 'IconDown'
});
