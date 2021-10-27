"use strict";
exports.__esModule = true;
exports.IconConnection = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconConnection_size_m_1 = tslib_1.__importDefault(require("./IconConnection_size_m"));
var IconConnection_size_s_1 = tslib_1.__importDefault(require("./IconConnection_size_s"));
var IconConnection_size_xs_1 = tslib_1.__importDefault(require("./IconConnection_size_xs"));
exports.IconConnection = createIcon_1.createIcon({
    m: IconConnection_size_m_1["default"],
    s: IconConnection_size_s_1["default"],
    xs: IconConnection_size_xs_1["default"],
    name: 'IconConnection'
});
