"use strict";
exports.__esModule = true;
exports.IconMail = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconMail_size_m_1 = tslib_1.__importDefault(require("./IconMail_size_m"));
var IconMail_size_s_1 = tslib_1.__importDefault(require("./IconMail_size_s"));
var IconMail_size_xs_1 = tslib_1.__importDefault(require("./IconMail_size_xs"));
exports.IconMail = createIcon_1.createIcon({
    m: IconMail_size_m_1["default"],
    s: IconMail_size_s_1["default"],
    xs: IconMail_size_xs_1["default"],
    name: 'IconMail'
});
