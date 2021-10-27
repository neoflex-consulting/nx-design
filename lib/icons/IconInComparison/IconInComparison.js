"use strict";
exports.__esModule = true;
exports.IconInComparison = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconInComparison_size_m_1 = tslib_1.__importDefault(require("./IconInComparison_size_m"));
var IconInComparison_size_s_1 = tslib_1.__importDefault(require("./IconInComparison_size_s"));
var IconInComparison_size_xs_1 = tslib_1.__importDefault(require("./IconInComparison_size_xs"));
exports.IconInComparison = createIcon_1.createIcon({
    m: IconInComparison_size_m_1["default"],
    s: IconInComparison_size_s_1["default"],
    xs: IconInComparison_size_xs_1["default"],
    name: 'IconInComparison'
});
