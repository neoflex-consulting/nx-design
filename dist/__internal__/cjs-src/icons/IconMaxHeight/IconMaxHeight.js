"use strict";
exports.__esModule = true;
exports.IconMaxHeight = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconMaxHeight_size_m_1 = tslib_1.__importDefault(require("./IconMaxHeight_size_m"));
var IconMaxHeight_size_s_1 = tslib_1.__importDefault(require("./IconMaxHeight_size_s"));
var IconMaxHeight_size_xs_1 = tslib_1.__importDefault(require("./IconMaxHeight_size_xs"));
exports.IconMaxHeight = createIcon_1.createIcon({
    m: IconMaxHeight_size_m_1["default"],
    s: IconMaxHeight_size_s_1["default"],
    xs: IconMaxHeight_size_xs_1["default"],
    name: 'IconMaxHeight'
});
