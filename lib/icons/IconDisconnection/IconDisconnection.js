"use strict";
exports.__esModule = true;
exports.IconDisconnection = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDisconnection_size_m_1 = tslib_1.__importDefault(require("./IconDisconnection_size_m"));
var IconDisconnection_size_s_1 = tslib_1.__importDefault(require("./IconDisconnection_size_s"));
var IconDisconnection_size_xs_1 = tslib_1.__importDefault(require("./IconDisconnection_size_xs"));
exports.IconDisconnection = createIcon_1.createIcon({
    m: IconDisconnection_size_m_1["default"],
    s: IconDisconnection_size_s_1["default"],
    xs: IconDisconnection_size_xs_1["default"],
    name: 'IconDisconnection'
});
