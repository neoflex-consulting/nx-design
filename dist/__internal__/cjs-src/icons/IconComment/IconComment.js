"use strict";
exports.__esModule = true;
exports.IconComment = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconComment_size_m_1 = tslib_1.__importDefault(require("./IconComment_size_m"));
var IconComment_size_s_1 = tslib_1.__importDefault(require("./IconComment_size_s"));
var IconComment_size_xs_1 = tslib_1.__importDefault(require("./IconComment_size_xs"));
exports.IconComment = createIcon_1.createIcon({
    m: IconComment_size_m_1["default"],
    s: IconComment_size_s_1["default"],
    xs: IconComment_size_xs_1["default"],
    name: 'IconComment'
});
