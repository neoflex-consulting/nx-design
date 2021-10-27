"use strict";
exports.__esModule = true;
exports.IconNodeEnd = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconNodeEnd_size_m_1 = tslib_1.__importDefault(require("./IconNodeEnd_size_m"));
var IconNodeEnd_size_s_1 = tslib_1.__importDefault(require("./IconNodeEnd_size_s"));
var IconNodeEnd_size_xs_1 = tslib_1.__importDefault(require("./IconNodeEnd_size_xs"));
exports.IconNodeEnd = createIcon_1.createIcon({
    m: IconNodeEnd_size_m_1["default"],
    s: IconNodeEnd_size_s_1["default"],
    xs: IconNodeEnd_size_xs_1["default"],
    name: 'IconNodeEnd'
});
