"use strict";
exports.__esModule = true;
exports.FileIconWav = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconWav_size_m_1 = tslib_1.__importDefault(require("./FileIconWav_size_m"));
var FileIconWav_size_s_1 = tslib_1.__importDefault(require("./FileIconWav_size_s"));
exports.FileIconWav = createFileIcon_1.createFileIcon({
    m: FileIconWav_size_m_1["default"],
    s: FileIconWav_size_s_1["default"],
    name: 'FileIconWav'
});
