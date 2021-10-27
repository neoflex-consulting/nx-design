"use strict";
exports.__esModule = true;
exports.FileIconCsv = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconCsv_size_m_1 = tslib_1.__importDefault(require("./FileIconCsv_size_m"));
var FileIconCsv_size_s_1 = tslib_1.__importDefault(require("./FileIconCsv_size_s"));
exports.FileIconCsv = createFileIcon_1.createFileIcon({
    m: FileIconCsv_size_m_1["default"],
    s: FileIconCsv_size_s_1["default"],
    name: 'FileIconCsv'
});
