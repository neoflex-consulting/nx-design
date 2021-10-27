"use strict";
exports.__esModule = true;
exports.IconBarrier = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconBarrier_size_m_1 = tslib_1.__importDefault(require("./IconBarrier_size_m"));
var IconBarrier_size_s_1 = tslib_1.__importDefault(require("./IconBarrier_size_s"));
exports.IconBarrier = createIcon_1.createIcon({
    m: IconBarrier_size_m_1["default"],
    s: IconBarrier_size_s_1["default"],
    xs: IconBarrier_size_s_1["default"],
    name: 'IconBarrier'
});
