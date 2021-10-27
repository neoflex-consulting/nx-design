"use strict";
exports.__esModule = true;
exports.IconColorText = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconColorText_size_m_1 = tslib_1.__importDefault(require("./IconColorText_size_m"));
var IconColorText_size_s_1 = tslib_1.__importDefault(require("./IconColorText_size_s"));
exports.IconColorText = createIcon_1.createIcon({
    m: IconColorText_size_m_1["default"],
    s: IconColorText_size_s_1["default"],
    xs: IconColorText_size_s_1["default"],
    name: 'IconColorText'
});
