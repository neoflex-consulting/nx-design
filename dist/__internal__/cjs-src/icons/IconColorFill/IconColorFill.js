"use strict";
exports.__esModule = true;
exports.IconColorFill = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconColorFill_size_m_1 = tslib_1.__importDefault(require("./IconColorFill_size_m"));
var IconColorFill_size_s_1 = tslib_1.__importDefault(require("./IconColorFill_size_s"));
exports.IconColorFill = createIcon_1.createIcon({
    m: IconColorFill_size_m_1["default"],
    s: IconColorFill_size_s_1["default"],
    xs: IconColorFill_size_s_1["default"],
    name: 'IconColorFill'
});
