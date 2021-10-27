"use strict";
exports.__esModule = true;
exports.IconWorld = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconWorld_size_m_1 = tslib_1.__importDefault(require("./IconWorld_size_m"));
var IconWorld_size_s_1 = tslib_1.__importDefault(require("./IconWorld_size_s"));
exports.IconWorld = createIcon_1.createIcon({
    m: IconWorld_size_m_1["default"],
    s: IconWorld_size_s_1["default"],
    xs: IconWorld_size_s_1["default"],
    name: 'IconWorld'
});
