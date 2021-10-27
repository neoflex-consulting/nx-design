"use strict";
exports.__esModule = true;
exports.IconType = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconType_size_m_1 = tslib_1.__importDefault(require("./IconType_size_m"));
var IconType_size_s_1 = tslib_1.__importDefault(require("./IconType_size_s"));
exports.IconType = createIcon_1.createIcon({
    m: IconType_size_m_1["default"],
    s: IconType_size_s_1["default"],
    xs: IconType_size_s_1["default"],
    name: 'IconType'
});
