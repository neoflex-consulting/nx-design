"use strict";
exports.__esModule = true;
exports.IconExpand = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconExpand_size_m_1 = tslib_1.__importDefault(require("./IconExpand_size_m"));
var IconExpand_size_s_1 = tslib_1.__importDefault(require("./IconExpand_size_s"));
var IconExpand_size_xs_1 = tslib_1.__importDefault(require("./IconExpand_size_xs"));
exports.IconExpand = createIcon_1.createIcon({
    m: IconExpand_size_m_1["default"],
    s: IconExpand_size_s_1["default"],
    xs: IconExpand_size_xs_1["default"],
    name: 'IconExpand'
});
