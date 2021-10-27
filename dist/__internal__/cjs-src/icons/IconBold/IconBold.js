"use strict";
exports.__esModule = true;
exports.IconBold = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconBold_size_m_1 = tslib_1.__importDefault(require("./IconBold_size_m"));
var IconBold_size_s_1 = tslib_1.__importDefault(require("./IconBold_size_s"));
exports.IconBold = createIcon_1.createIcon({
    m: IconBold_size_m_1["default"],
    s: IconBold_size_s_1["default"],
    xs: IconBold_size_s_1["default"],
    name: 'IconBold'
});
