"use strict";
exports.__esModule = true;
exports.IconBento = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconBento_size_m_1 = tslib_1.__importDefault(require("./IconBento_size_m"));
var IconBento_size_s_1 = tslib_1.__importDefault(require("./IconBento_size_s"));
var IconBento_size_xs_1 = tslib_1.__importDefault(require("./IconBento_size_xs"));
exports.IconBento = createIcon_1.createIcon({
    m: IconBento_size_m_1["default"],
    s: IconBento_size_s_1["default"],
    xs: IconBento_size_xs_1["default"],
    name: 'IconBento'
});
