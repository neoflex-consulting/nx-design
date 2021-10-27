"use strict";
exports.__esModule = true;
exports.IconProcessing = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconProcessing_size_m_1 = tslib_1.__importDefault(require("./IconProcessing_size_m"));
var IconProcessing_size_s_1 = tslib_1.__importDefault(require("./IconProcessing_size_s"));
exports.IconProcessing = createIcon_1.createIcon({
    m: IconProcessing_size_m_1["default"],
    s: IconProcessing_size_s_1["default"],
    xs: IconProcessing_size_s_1["default"],
    name: 'IconProcessing'
});
