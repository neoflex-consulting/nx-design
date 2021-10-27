"use strict";
exports.__esModule = true;
exports.IconCalendar = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCalendar_size_m_1 = tslib_1.__importDefault(require("./IconCalendar_size_m"));
var IconCalendar_size_s_1 = tslib_1.__importDefault(require("./IconCalendar_size_s"));
var IconCalendar_size_xs_1 = tslib_1.__importDefault(require("./IconCalendar_size_xs"));
exports.IconCalendar = createIcon_1.createIcon({
    m: IconCalendar_size_m_1["default"],
    s: IconCalendar_size_s_1["default"],
    xs: IconCalendar_size_xs_1["default"],
    name: 'IconCalendar'
});
