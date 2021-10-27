"use strict";
exports.__esModule = true;
exports.IconArrowUp = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconArrowUp_size_m_1 = tslib_1.__importDefault(require("./IconArrowUp_size_m"));
var IconArrowUp_size_s_1 = tslib_1.__importDefault(require("./IconArrowUp_size_s"));
var IconArrowUp_size_xs_1 = tslib_1.__importDefault(require("./IconArrowUp_size_xs"));
exports.IconArrowUp = createIcon_1.createIcon({
    m: IconArrowUp_size_m_1["default"],
    s: IconArrowUp_size_s_1["default"],
    xs: IconArrowUp_size_xs_1["default"],
    name: 'IconArrowUp'
});
