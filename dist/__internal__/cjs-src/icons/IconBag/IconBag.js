"use strict";
exports.__esModule = true;
exports.IconBag = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconBag_size_m_1 = tslib_1.__importDefault(require("./IconBag_size_m"));
var IconBag_size_s_1 = tslib_1.__importDefault(require("./IconBag_size_s"));
var IconBag_size_xs_1 = tslib_1.__importDefault(require("./IconBag_size_xs"));
exports.IconBag = createIcon_1.createIcon({
    m: IconBag_size_m_1["default"],
    s: IconBag_size_s_1["default"],
    xs: IconBag_size_xs_1["default"],
    name: 'IconBag'
});
