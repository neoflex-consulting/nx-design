"use strict";
exports.__esModule = true;
exports.IconNodes = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconNodes_size_m_1 = tslib_1.__importDefault(require("./IconNodes_size_m"));
var IconNodes_size_s_1 = tslib_1.__importDefault(require("./IconNodes_size_s"));
var IconNodes_size_xs_1 = tslib_1.__importDefault(require("./IconNodes_size_xs"));
exports.IconNodes = createIcon_1.createIcon({
    m: IconNodes_size_m_1["default"],
    s: IconNodes_size_s_1["default"],
    xs: IconNodes_size_xs_1["default"],
    name: 'IconNodes'
});
