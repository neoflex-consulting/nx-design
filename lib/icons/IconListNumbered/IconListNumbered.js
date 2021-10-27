"use strict";
exports.__esModule = true;
exports.IconListNumbered = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconListNumbered_size_m_1 = tslib_1.__importDefault(require("./IconListNumbered_size_m"));
var IconListNumbered_size_s_1 = tslib_1.__importDefault(require("./IconListNumbered_size_s"));
exports.IconListNumbered = createIcon_1.createIcon({
    m: IconListNumbered_size_m_1["default"],
    s: IconListNumbered_size_s_1["default"],
    xs: IconListNumbered_size_s_1["default"],
    name: 'IconListNumbered'
});
