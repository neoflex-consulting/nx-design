"use strict";
exports.__esModule = true;
exports.IconUnlock = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconUnlock_size_m_1 = tslib_1.__importDefault(require("./IconUnlock_size_m"));
var IconUnlock_size_s_1 = tslib_1.__importDefault(require("./IconUnlock_size_s"));
var IconUnlock_size_xs_1 = tslib_1.__importDefault(require("./IconUnlock_size_xs"));
exports.IconUnlock = createIcon_1.createIcon({
    m: IconUnlock_size_m_1["default"],
    s: IconUnlock_size_s_1["default"],
    xs: IconUnlock_size_xs_1["default"],
    name: 'IconUnlock'
});
