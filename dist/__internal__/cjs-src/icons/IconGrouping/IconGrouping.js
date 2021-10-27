"use strict";
exports.__esModule = true;
exports.IconGrouping = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconGrouping_size_m_1 = tslib_1.__importDefault(require("./IconGrouping_size_m"));
var IconGrouping_size_s_1 = tslib_1.__importDefault(require("./IconGrouping_size_s"));
var IconGrouping_size_xs_1 = tslib_1.__importDefault(require("./IconGrouping_size_xs"));
exports.IconGrouping = createIcon_1.createIcon({
    m: IconGrouping_size_m_1["default"],
    s: IconGrouping_size_s_1["default"],
    xs: IconGrouping_size_xs_1["default"],
    name: 'IconGrouping'
});
