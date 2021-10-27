"use strict";
exports.__esModule = true;
exports.IconSortDown = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconSortDown_size_m_1 = tslib_1.__importDefault(require("./IconSortDown_size_m"));
var IconSortDown_size_s_1 = tslib_1.__importDefault(require("./IconSortDown_size_s"));
var IconSortDown_size_xs_1 = tslib_1.__importDefault(require("./IconSortDown_size_xs"));
exports.IconSortDown = createIcon_1.createIcon({
    m: IconSortDown_size_m_1["default"],
    s: IconSortDown_size_s_1["default"],
    xs: IconSortDown_size_xs_1["default"],
    name: 'IconSortDown'
});
