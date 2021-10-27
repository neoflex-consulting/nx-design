"use strict";
exports.__esModule = true;
exports.IconLink = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconLink_size_m_1 = tslib_1.__importDefault(require("./IconLink_size_m"));
var IconLink_size_s_1 = tslib_1.__importDefault(require("./IconLink_size_s"));
exports.IconLink = createIcon_1.createIcon({
    m: IconLink_size_m_1["default"],
    s: IconLink_size_s_1["default"],
    xs: IconLink_size_s_1["default"],
    name: 'IconLink'
});
