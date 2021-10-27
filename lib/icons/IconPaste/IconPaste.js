"use strict";
exports.__esModule = true;
exports.IconPaste = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPaste_size_m_1 = tslib_1.__importDefault(require("./IconPaste_size_m"));
var IconPaste_size_s_1 = tslib_1.__importDefault(require("./IconPaste_size_s"));
var IconPaste_size_xs_1 = tslib_1.__importDefault(require("./IconPaste_size_xs"));
exports.IconPaste = createIcon_1.createIcon({
    m: IconPaste_size_m_1["default"],
    s: IconPaste_size_s_1["default"],
    xs: IconPaste_size_xs_1["default"],
    name: 'IconPaste'
});
