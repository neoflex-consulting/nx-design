"use strict";
exports.__esModule = true;
exports.IconRemove = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconRemove_size_m_1 = tslib_1.__importDefault(require("./IconRemove_size_m"));
var IconRemove_size_s_1 = tslib_1.__importDefault(require("./IconRemove_size_s"));
var IconRemove_size_xs_1 = tslib_1.__importDefault(require("./IconRemove_size_xs"));
exports.IconRemove = createIcon_1.createIcon({
    m: IconRemove_size_m_1["default"],
    s: IconRemove_size_s_1["default"],
    xs: IconRemove_size_xs_1["default"],
    name: 'IconRemove'
});
