"use strict";
exports.__esModule = true;
exports.IconAlignBlocksLeft = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAlignBlocksLeft_size_m_1 = tslib_1.__importDefault(require("./IconAlignBlocksLeft_size_m"));
var IconAlignBlocksLeft_size_s_1 = tslib_1.__importDefault(require("./IconAlignBlocksLeft_size_s"));
var IconAlignBlocksLeft_size_xs_1 = tslib_1.__importDefault(require("./IconAlignBlocksLeft_size_xs"));
exports.IconAlignBlocksLeft = createIcon_1.createIcon({
    m: IconAlignBlocksLeft_size_m_1["default"],
    s: IconAlignBlocksLeft_size_s_1["default"],
    xs: IconAlignBlocksLeft_size_xs_1["default"],
    name: 'IconAlignBlocksLeft'
});
