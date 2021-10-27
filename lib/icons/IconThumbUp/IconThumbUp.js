"use strict";
exports.__esModule = true;
exports.IconThumbUp = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconThumbUp_size_m_1 = tslib_1.__importDefault(require("./IconThumbUp_size_m"));
var IconThumbUp_size_s_1 = tslib_1.__importDefault(require("./IconThumbUp_size_s"));
var IconThumbUp_size_xs_1 = tslib_1.__importDefault(require("./IconThumbUp_size_xs"));
exports.IconThumbUp = createIcon_1.createIcon({
    m: IconThumbUp_size_m_1["default"],
    s: IconThumbUp_size_s_1["default"],
    xs: IconThumbUp_size_xs_1["default"],
    name: 'IconThumbUp'
});
