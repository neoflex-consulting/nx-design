"use strict";
exports.__esModule = true;
exports.FileIconGif = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconGif_size_m_1 = tslib_1.__importDefault(require("./FileIconGif_size_m"));
var FileIconGif_size_s_1 = tslib_1.__importDefault(require("./FileIconGif_size_s"));
exports.FileIconGif = createFileIcon_1.createFileIcon({
    m: FileIconGif_size_m_1["default"],
    s: FileIconGif_size_s_1["default"],
    name: 'FileIconGif'
});
