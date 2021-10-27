"use strict";
exports.__esModule = true;
exports.IconSortUp = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconSortUp_size_m_1 = tslib_1.__importDefault(require("./IconSortUp_size_m"));
var IconSortUp_size_s_1 = tslib_1.__importDefault(require("./IconSortUp_size_s"));
var IconSortUp_size_xs_1 = tslib_1.__importDefault(require("./IconSortUp_size_xs"));
exports.IconSortUp = createIcon_1.createIcon({
    m: IconSortUp_size_m_1["default"],
    s: IconSortUp_size_s_1["default"],
    xs: IconSortUp_size_xs_1["default"],
    name: 'IconSortUp'
});
