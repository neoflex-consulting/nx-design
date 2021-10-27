"use strict";
exports.__esModule = true;
exports.FileIconTiff = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconTiff_size_m_1 = tslib_1.__importDefault(require("./FileIconTiff_size_m"));
var FileIconTiff_size_s_1 = tslib_1.__importDefault(require("./FileIconTiff_size_s"));
exports.FileIconTiff = createFileIcon_1.createFileIcon({
    m: FileIconTiff_size_m_1["default"],
    s: FileIconTiff_size_s_1["default"],
    name: 'FileIconTiff'
});
