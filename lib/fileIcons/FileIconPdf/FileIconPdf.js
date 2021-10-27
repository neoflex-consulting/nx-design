"use strict";
exports.__esModule = true;
exports.FileIconPdf = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconPdf_size_m_1 = tslib_1.__importDefault(require("./FileIconPdf_size_m"));
var FileIconPdf_size_s_1 = tslib_1.__importDefault(require("./FileIconPdf_size_s"));
exports.FileIconPdf = createFileIcon_1.createFileIcon({
    m: FileIconPdf_size_m_1["default"],
    s: FileIconPdf_size_s_1["default"],
    name: 'FileIconPdf'
});
