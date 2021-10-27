"use strict";
exports.__esModule = true;
exports.IconAddToComparison = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAddToComparison_size_m_1 = tslib_1.__importDefault(require("./IconAddToComparison_size_m"));
var IconAddToComparison_size_s_1 = tslib_1.__importDefault(require("./IconAddToComparison_size_s"));
var IconAddToComparison_size_xs_1 = tslib_1.__importDefault(require("./IconAddToComparison_size_xs"));
exports.IconAddToComparison = createIcon_1.createIcon({
    m: IconAddToComparison_size_m_1["default"],
    s: IconAddToComparison_size_s_1["default"],
    xs: IconAddToComparison_size_xs_1["default"],
    name: 'IconAddToComparison'
});
