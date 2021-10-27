"use strict";
exports.__esModule = true;
exports.IconPause = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPause_size_m_1 = tslib_1.__importDefault(require("./IconPause_size_m"));
var IconPause_size_s_1 = tslib_1.__importDefault(require("./IconPause_size_s"));
var IconPause_size_xs_1 = tslib_1.__importDefault(require("./IconPause_size_xs"));
exports.IconPause = createIcon_1.createIcon({
    m: IconPause_size_m_1["default"],
    s: IconPause_size_s_1["default"],
    xs: IconPause_size_xs_1["default"],
    name: 'IconPause'
});
