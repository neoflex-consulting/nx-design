"use strict";
exports.__esModule = true;
exports.FileIconMp3 = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconMp3_size_m_1 = tslib_1.__importDefault(require("./FileIconMp3_size_m"));
var FileIconMp3_size_s_1 = tslib_1.__importDefault(require("./FileIconMp3_size_s"));
exports.FileIconMp3 = createFileIcon_1.createFileIcon({
    m: FileIconMp3_size_m_1["default"],
    s: FileIconMp3_size_s_1["default"],
    name: 'FileIconMp3'
});
