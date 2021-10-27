"use strict";
exports.__esModule = true;
exports.IconWideScreen = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconWideScreen_size_m_1 = tslib_1.__importDefault(require("./IconWideScreen_size_m"));
var IconWideScreen_size_s_1 = tslib_1.__importDefault(require("./IconWideScreen_size_s"));
var IconWideScreen_size_xs_1 = tslib_1.__importDefault(require("./IconWideScreen_size_xs"));
exports.IconWideScreen = createIcon_1.createIcon({
    m: IconWideScreen_size_m_1["default"],
    s: IconWideScreen_size_s_1["default"],
    xs: IconWideScreen_size_xs_1["default"],
    name: 'IconWideScreen'
});
