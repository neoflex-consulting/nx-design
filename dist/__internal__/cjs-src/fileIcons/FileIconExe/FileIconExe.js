"use strict";
exports.__esModule = true;
exports.FileIconExe = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconExe_size_m_1 = tslib_1.__importDefault(require("./FileIconExe_size_m"));
var FileIconExe_size_s_1 = tslib_1.__importDefault(require("./FileIconExe_size_s"));
exports.FileIconExe = createFileIcon_1.createFileIcon({
    m: FileIconExe_size_m_1["default"],
    s: FileIconExe_size_s_1["default"],
    name: 'FileIconExe'
});
