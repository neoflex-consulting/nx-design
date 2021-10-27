"use strict";
exports.__esModule = true;
exports.IconUser = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconUser_size_m_1 = tslib_1.__importDefault(require("./IconUser_size_m"));
var IconUser_size_s_1 = tslib_1.__importDefault(require("./IconUser_size_s"));
var IconUser_size_xs_1 = tslib_1.__importDefault(require("./IconUser_size_xs"));
exports.IconUser = createIcon_1.createIcon({
    m: IconUser_size_m_1["default"],
    s: IconUser_size_s_1["default"],
    xs: IconUser_size_xs_1["default"],
    name: 'IconUser'
});
