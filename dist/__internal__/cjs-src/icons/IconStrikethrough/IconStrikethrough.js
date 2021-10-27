"use strict";
exports.__esModule = true;
exports.IconStrikethrough = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconStrikethrough_size_m_1 = tslib_1.__importDefault(require("./IconStrikethrough_size_m"));
var IconStrikethrough_size_s_1 = tslib_1.__importDefault(require("./IconStrikethrough_size_s"));
exports.IconStrikethrough = createIcon_1.createIcon({
    m: IconStrikethrough_size_m_1["default"],
    s: IconStrikethrough_size_s_1["default"],
    xs: IconStrikethrough_size_s_1["default"],
    name: 'IconStrikethrough'
});
