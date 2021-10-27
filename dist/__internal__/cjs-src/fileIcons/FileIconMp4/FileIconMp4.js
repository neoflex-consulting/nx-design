"use strict";
exports.__esModule = true;
exports.FileIconMp4 = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconMp4_size_m_1 = tslib_1.__importDefault(require("./FileIconMp4_size_m"));
var FileIconMp4_size_s_1 = tslib_1.__importDefault(require("./FileIconMp4_size_s"));
exports.FileIconMp4 = createFileIcon_1.createFileIcon({
    m: FileIconMp4_size_m_1["default"],
    s: FileIconMp4_size_s_1["default"],
    name: 'FileIconMp4'
});
