"use strict";
exports.__esModule = true;
exports.IconShape = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconShape_size_m_1 = tslib_1.__importDefault(require("./IconShape_size_m"));
var IconShape_size_s_1 = tslib_1.__importDefault(require("./IconShape_size_s"));
var IconShape_size_xs_1 = tslib_1.__importDefault(require("./IconShape_size_xs"));
exports.IconShape = createIcon_1.createIcon({
    m: IconShape_size_m_1["default"],
    s: IconShape_size_s_1["default"],
    xs: IconShape_size_xs_1["default"],
    name: 'IconShape'
});
