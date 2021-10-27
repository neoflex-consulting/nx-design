"use strict";
exports.__esModule = true;
exports.IconWarning = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconWarning_size_m_1 = tslib_1.__importDefault(require("./IconWarning_size_m"));
var IconWarning_size_s_1 = tslib_1.__importDefault(require("./IconWarning_size_s"));
var IconWarning_size_xs_1 = tslib_1.__importDefault(require("./IconWarning_size_xs"));
exports.IconWarning = createIcon_1.createIcon({
    m: IconWarning_size_m_1["default"],
    s: IconWarning_size_s_1["default"],
    xs: IconWarning_size_xs_1["default"],
    name: 'IconWarning'
});
