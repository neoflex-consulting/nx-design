"use strict";
exports.__esModule = true;
exports.IconCards = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconCards_size_m_1 = tslib_1.__importDefault(require("./IconCards_size_m"));
var IconCards_size_s_1 = tslib_1.__importDefault(require("./IconCards_size_s"));
var IconCards_size_xs_1 = tslib_1.__importDefault(require("./IconCards_size_xs"));
exports.IconCards = createIcon_1.createIcon({
    m: IconCards_size_m_1["default"],
    s: IconCards_size_s_1["default"],
    xs: IconCards_size_xs_1["default"],
    name: 'IconCards'
});
