"use strict";
exports.__esModule = true;
exports.IconTrash = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconTrash_size_m_1 = tslib_1.__importDefault(require("./IconTrash_size_m"));
var IconTrash_size_s_1 = tslib_1.__importDefault(require("./IconTrash_size_s"));
var IconTrash_size_xs_1 = tslib_1.__importDefault(require("./IconTrash_size_xs"));
exports.IconTrash = createIcon_1.createIcon({
    m: IconTrash_size_m_1["default"],
    s: IconTrash_size_s_1["default"],
    xs: IconTrash_size_xs_1["default"],
    name: 'IconTrash'
});
