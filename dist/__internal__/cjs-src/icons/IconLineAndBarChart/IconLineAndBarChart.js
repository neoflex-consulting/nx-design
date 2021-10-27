"use strict";
exports.__esModule = true;
exports.IconLineAndBarChart = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconLineAndBarChart_size_m_1 = tslib_1.__importDefault(require("./IconLineAndBarChart_size_m"));
var IconLineAndBarChart_size_s_1 = tslib_1.__importDefault(require("./IconLineAndBarChart_size_s"));
exports.IconLineAndBarChart = createIcon_1.createIcon({
    m: IconLineAndBarChart_size_m_1["default"],
    s: IconLineAndBarChart_size_s_1["default"],
    xs: IconLineAndBarChart_size_s_1["default"],
    name: 'IconLineAndBarChart'
});
