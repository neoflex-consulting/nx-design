"use strict";
exports.__esModule = true;
exports.IconCalculator = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCalculator_size_m_1 = tslib_1.__importDefault(require("./IconCalculator_size_m"));
exports.IconCalculator = createIcon_1.createIcon({
    m: IconCalculator_size_m_1["default"],
    s: IconCalculator_size_m_1["default"],
    xs: IconCalculator_size_m_1["default"],
    name: 'IconCalculator'
});
