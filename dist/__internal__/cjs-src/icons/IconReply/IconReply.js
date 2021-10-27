"use strict";
exports.__esModule = true;
exports.IconReply = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconReply_size_m_1 = tslib_1.__importDefault(require("./IconReply_size_m"));
var IconReply_size_s_1 = tslib_1.__importDefault(require("./IconReply_size_s"));
var IconReply_size_xs_1 = tslib_1.__importDefault(require("./IconReply_size_xs"));
exports.IconReply = createIcon_1.createIcon({
    m: IconReply_size_m_1["default"],
    s: IconReply_size_s_1["default"],
    xs: IconReply_size_xs_1["default"],
    name: 'IconReply'
});
