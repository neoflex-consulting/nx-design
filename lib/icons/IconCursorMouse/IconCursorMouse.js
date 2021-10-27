"use strict";
exports.__esModule = true;
exports.IconCursorMouse = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCursorMouse_size_m_1 = tslib_1.__importDefault(require("./IconCursorMouse_size_m"));
var IconCursorMouse_size_s_1 = tslib_1.__importDefault(require("./IconCursorMouse_size_s"));
var IconCursorMouse_size_xs_1 = tslib_1.__importDefault(require("./IconCursorMouse_size_xs"));
exports.IconCursorMouse = createIcon_1.createIcon({
    m: IconCursorMouse_size_m_1["default"],
    s: IconCursorMouse_size_s_1["default"],
    xs: IconCursorMouse_size_xs_1["default"],
    name: 'IconCursorMouse'
});
