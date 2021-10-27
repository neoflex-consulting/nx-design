"use strict";
exports.__esModule = true;
exports.IconEdit = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconEdit_size_m_1 = tslib_1.__importDefault(require("./IconEdit_size_m"));
var IconEdit_size_s_1 = tslib_1.__importDefault(require("./IconEdit_size_s"));
var IconEdit_size_xs_1 = tslib_1.__importDefault(require("./IconEdit_size_xs"));
exports.IconEdit = createIcon_1.createIcon({
    m: IconEdit_size_m_1["default"],
    s: IconEdit_size_s_1["default"],
    xs: IconEdit_size_xs_1["default"],
    name: 'IconEdit'
});
