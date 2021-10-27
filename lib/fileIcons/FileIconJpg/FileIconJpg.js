"use strict";
exports.__esModule = true;
exports.FileIconJpg = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconJpg_size_m_1 = tslib_1.__importDefault(require("./FileIconJpg_size_m"));
var FileIconJpg_size_s_1 = tslib_1.__importDefault(require("./FileIconJpg_size_s"));
exports.FileIconJpg = createFileIcon_1.createFileIcon({
    m: FileIconJpg_size_m_1["default"],
    s: FileIconJpg_size_s_1["default"],
    name: 'FileIconJpg'
});
