"use strict";
exports.__esModule = true;
exports.IconDrop = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDrop_size_m_1 = tslib_1.__importDefault(require("./IconDrop_size_m"));
var IconDrop_size_s_1 = tslib_1.__importDefault(require("./IconDrop_size_s"));
exports.IconDrop = createIcon_1.createIcon({
    m: IconDrop_size_m_1["default"],
    s: IconDrop_size_s_1["default"],
    xs: IconDrop_size_s_1["default"],
    name: 'IconDrop'
});
