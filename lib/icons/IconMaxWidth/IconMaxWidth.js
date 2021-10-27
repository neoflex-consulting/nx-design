"use strict";
exports.__esModule = true;
exports.IconMaxWidth = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconMaxWidth_size_m_1 = tslib_1.__importDefault(require("./IconMaxWidth_size_m"));
var IconMaxWidth_size_s_1 = tslib_1.__importDefault(require("./IconMaxWidth_size_s"));
var IconMaxWidth_size_xs_1 = tslib_1.__importDefault(require("./IconMaxWidth_size_xs"));
exports.IconMaxWidth = createIcon_1.createIcon({
    m: IconMaxWidth_size_m_1["default"],
    s: IconMaxWidth_size_s_1["default"],
    xs: IconMaxWidth_size_xs_1["default"],
    name: 'IconMaxWidth'
});
