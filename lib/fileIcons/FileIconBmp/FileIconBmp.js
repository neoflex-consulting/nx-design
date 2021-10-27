"use strict";
exports.__esModule = true;
exports.FileIconBmp = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconBmp_size_m_1 = tslib_1.__importDefault(require("./FileIconBmp_size_m"));
var FileIconBmp_size_s_1 = tslib_1.__importDefault(require("./FileIconBmp_size_s"));
exports.FileIconBmp = createFileIcon_1.createFileIcon({
    m: FileIconBmp_size_m_1["default"],
    s: FileIconBmp_size_s_1["default"],
    name: 'FileIconBmp'
});
