"use strict";
exports.__esModule = true;
exports.IconAdd = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconAdd_size_m_1 = tslib_1.__importDefault(require("./IconAdd_size_m"));
var IconAdd_size_s_1 = tslib_1.__importDefault(require("./IconAdd_size_s"));
var IconAdd_size_xs_1 = tslib_1.__importDefault(require("./IconAdd_size_xs"));
exports.IconAdd = createIcon_1.createIcon({
    m: IconAdd_size_m_1["default"],
    s: IconAdd_size_s_1["default"],
    xs: IconAdd_size_xs_1["default"],
    name: 'IconAdd'
});
