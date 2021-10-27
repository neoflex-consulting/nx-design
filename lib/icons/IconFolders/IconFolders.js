"use strict";
exports.__esModule = true;
exports.IconFolders = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconFolders_size_m_1 = tslib_1.__importDefault(require("./IconFolders_size_m"));
var IconFolders_size_s_1 = tslib_1.__importDefault(require("./IconFolders_size_s"));
var IconFolders_size_xs_1 = tslib_1.__importDefault(require("./IconFolders_size_xs"));
exports.IconFolders = createIcon_1.createIcon({
    m: IconFolders_size_m_1["default"],
    s: IconFolders_size_s_1["default"],
    xs: IconFolders_size_xs_1["default"],
    name: 'IconFolders'
});
