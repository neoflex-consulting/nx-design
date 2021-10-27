"use strict";
exports.__esModule = true;
exports.IconStorage = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconStorage_size_m_1 = tslib_1.__importDefault(require("./IconStorage_size_m"));
var IconStorage_size_s_1 = tslib_1.__importDefault(require("./IconStorage_size_s"));
var IconStorage_size_xs_1 = tslib_1.__importDefault(require("./IconStorage_size_xs"));
exports.IconStorage = createIcon_1.createIcon({
    m: IconStorage_size_m_1["default"],
    s: IconStorage_size_s_1["default"],
    xs: IconStorage_size_xs_1["default"],
    name: 'IconStorage'
});
