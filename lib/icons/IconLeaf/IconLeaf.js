"use strict";
exports.__esModule = true;
exports.IconLeaf = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconLeaf_size_m_1 = tslib_1.__importDefault(require("./IconLeaf_size_m"));
var IconLeaf_size_s_1 = tslib_1.__importDefault(require("./IconLeaf_size_s"));
var IconLeaf_size_xs_1 = tslib_1.__importDefault(require("./IconLeaf_size_xs"));
exports.IconLeaf = createIcon_1.createIcon({
    m: IconLeaf_size_m_1["default"],
    s: IconLeaf_size_s_1["default"],
    xs: IconLeaf_size_xs_1["default"],
    name: 'IconLeaf'
});
