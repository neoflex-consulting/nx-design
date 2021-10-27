"use strict";
exports.__esModule = true;
exports.IconScreen = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconScreen_size_m_1 = tslib_1.__importDefault(require("./IconScreen_size_m"));
var IconScreen_size_s_1 = tslib_1.__importDefault(require("./IconScreen_size_s"));
var IconScreen_size_xs_1 = tslib_1.__importDefault(require("./IconScreen_size_xs"));
exports.IconScreen = createIcon_1.createIcon({
    m: IconScreen_size_m_1["default"],
    s: IconScreen_size_s_1["default"],
    xs: IconScreen_size_xs_1["default"],
    name: 'IconScreen'
});
