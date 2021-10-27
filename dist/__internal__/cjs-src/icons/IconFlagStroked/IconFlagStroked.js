"use strict";
exports.__esModule = true;
exports.IconFlagStroked = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconFlagStroked_size_m_1 = tslib_1.__importDefault(require("./IconFlagStroked_size_m"));
var IconFlagStroked_size_s_1 = tslib_1.__importDefault(require("./IconFlagStroked_size_s"));
var IconFlagStroked_size_xs_1 = tslib_1.__importDefault(require("./IconFlagStroked_size_xs"));
exports.IconFlagStroked = createIcon_1.createIcon({
    m: IconFlagStroked_size_m_1["default"],
    s: IconFlagStroked_size_s_1["default"],
    xs: IconFlagStroked_size_xs_1["default"],
    name: 'IconFlagStroked'
});
