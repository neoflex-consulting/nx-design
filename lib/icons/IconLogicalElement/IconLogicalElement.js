"use strict";
exports.__esModule = true;
exports.IconLogicalElement = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconLogicalElement_size_m_1 = tslib_1.__importDefault(require("./IconLogicalElement_size_m"));
var IconLogicalElement_size_s_1 = tslib_1.__importDefault(require("./IconLogicalElement_size_s"));
var IconLogicalElement_size_xs_1 = tslib_1.__importDefault(require("./IconLogicalElement_size_xs"));
exports.IconLogicalElement = createIcon_1.createIcon({
    m: IconLogicalElement_size_m_1["default"],
    s: IconLogicalElement_size_s_1["default"],
    xs: IconLogicalElement_size_xs_1["default"],
    name: 'IconLogicalElement'
});
