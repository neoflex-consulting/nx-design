"use strict";
exports.__esModule = true;
exports.IconFavorite = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconFavorite_size_m_1 = tslib_1.__importDefault(require("./IconFavorite_size_m"));
var IconFavorite_size_s_1 = tslib_1.__importDefault(require("./IconFavorite_size_s"));
var IconFavorite_size_xs_1 = tslib_1.__importDefault(require("./IconFavorite_size_xs"));
exports.IconFavorite = createIcon_1.createIcon({
    m: IconFavorite_size_m_1["default"],
    s: IconFavorite_size_s_1["default"],
    xs: IconFavorite_size_xs_1["default"],
    name: 'IconFavorite'
});
