"use strict";
exports.__esModule = true;
exports.IconLock = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconLock_size_m_1 = tslib_1.__importDefault(require("./IconLock_size_m"));
var IconLock_size_s_1 = tslib_1.__importDefault(require("./IconLock_size_s"));
var IconLock_size_xs_1 = tslib_1.__importDefault(require("./IconLock_size_xs"));
exports.IconLock = createIcon_1.createIcon({
    m: IconLock_size_m_1["default"],
    s: IconLock_size_s_1["default"],
    xs: IconLock_size_xs_1["default"],
    name: 'IconLock'
});
