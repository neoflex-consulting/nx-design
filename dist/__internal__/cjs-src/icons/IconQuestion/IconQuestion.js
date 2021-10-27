"use strict";
exports.__esModule = true;
exports.IconQuestion = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconQuestion_size_m_1 = tslib_1.__importDefault(require("./IconQuestion_size_m"));
var IconQuestion_size_s_1 = tslib_1.__importDefault(require("./IconQuestion_size_s"));
var IconQuestion_size_xs_1 = tslib_1.__importDefault(require("./IconQuestion_size_xs"));
exports.IconQuestion = createIcon_1.createIcon({
    m: IconQuestion_size_m_1["default"],
    s: IconQuestion_size_s_1["default"],
    xs: IconQuestion_size_xs_1["default"],
    name: 'IconQuestion'
});
