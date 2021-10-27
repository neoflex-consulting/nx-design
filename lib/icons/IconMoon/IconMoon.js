"use strict";
exports.__esModule = true;
exports.IconMoon = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconMoon_size_m_1 = tslib_1.__importDefault(require("./IconMoon_size_m"));
var IconMoon_size_s_1 = tslib_1.__importDefault(require("./IconMoon_size_s"));
var IconMoon_size_xs_1 = tslib_1.__importDefault(require("./IconMoon_size_xs"));
exports.IconMoon = createIcon_1.createIcon({
    m: IconMoon_size_m_1["default"],
    s: IconMoon_size_s_1["default"],
    xs: IconMoon_size_xs_1["default"],
    name: 'IconMoon'
});
