"use strict";
exports.__esModule = true;
exports.IconNodeStart = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconNodeStart_size_m_1 = tslib_1.__importDefault(require("./IconNodeStart_size_m"));
var IconNodeStart_size_s_1 = tslib_1.__importDefault(require("./IconNodeStart_size_s"));
var IconNodeStart_size_xs_1 = tslib_1.__importDefault(require("./IconNodeStart_size_xs"));
exports.IconNodeStart = createIcon_1.createIcon({
    m: IconNodeStart_size_m_1["default"],
    s: IconNodeStart_size_s_1["default"],
    xs: IconNodeStart_size_xs_1["default"],
    name: 'IconNodeStart'
});
