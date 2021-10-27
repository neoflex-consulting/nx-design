"use strict";
exports.__esModule = true;
exports.IconDocExport = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDocExport_size_m_1 = tslib_1.__importDefault(require("./IconDocExport_size_m"));
var IconDocExport_size_s_1 = tslib_1.__importDefault(require("./IconDocExport_size_s"));
var IconDocExport_size_xs_1 = tslib_1.__importDefault(require("./IconDocExport_size_xs"));
exports.IconDocExport = createIcon_1.createIcon({
    m: IconDocExport_size_m_1["default"],
    s: IconDocExport_size_s_1["default"],
    xs: IconDocExport_size_xs_1["default"],
    name: 'IconDocExport'
});
