"use strict";
exports.__esModule = true;
exports.IconDataNull = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDataNull_size_m_1 = tslib_1.__importDefault(require("./IconDataNull_size_m"));
var IconDataNull_size_s_1 = tslib_1.__importDefault(require("./IconDataNull_size_s"));
var IconDataNull_size_xs_1 = tslib_1.__importDefault(require("./IconDataNull_size_xs"));
exports.IconDataNull = createIcon_1.createIcon({
    m: IconDataNull_size_m_1["default"],
    s: IconDataNull_size_s_1["default"],
    xs: IconDataNull_size_xs_1["default"],
    name: 'IconDataNull'
});
