"use strict";
exports.__esModule = true;
exports.IconAlignBlocksRight = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAlignBlocksRight_size_m_1 = tslib_1.__importDefault(require("./IconAlignBlocksRight_size_m"));
var IconAlignBlocksRight_size_s_1 = tslib_1.__importDefault(require("./IconAlignBlocksRight_size_s"));
var IconAlignBlocksRight_size_xs_1 = tslib_1.__importDefault(require("./IconAlignBlocksRight_size_xs"));
exports.IconAlignBlocksRight = createIcon_1.createIcon({
    m: IconAlignBlocksRight_size_m_1["default"],
    s: IconAlignBlocksRight_size_s_1["default"],
    xs: IconAlignBlocksRight_size_xs_1["default"],
    name: 'IconAlignBlocksRight'
});
