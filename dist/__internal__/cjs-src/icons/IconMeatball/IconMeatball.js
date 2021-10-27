"use strict";
exports.__esModule = true;
exports.IconMeatball = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconMeatball_size_m_1 = tslib_1.__importDefault(require("./IconMeatball_size_m"));
var IconMeatball_size_s_1 = tslib_1.__importDefault(require("./IconMeatball_size_s"));
var IconMeatball_size_xs_1 = tslib_1.__importDefault(require("./IconMeatball_size_xs"));
exports.IconMeatball = createIcon_1.createIcon({
    m: IconMeatball_size_m_1["default"],
    s: IconMeatball_size_s_1["default"],
    xs: IconMeatball_size_xs_1["default"],
    name: 'IconMeatball'
});
