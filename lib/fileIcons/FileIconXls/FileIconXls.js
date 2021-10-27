"use strict";
exports.__esModule = true;
exports.FileIconXls = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconXls_size_m_1 = tslib_1.__importDefault(require("./FileIconXls_size_m"));
var FileIconXls_size_s_1 = tslib_1.__importDefault(require("./FileIconXls_size_s"));
exports.FileIconXls = createFileIcon_1.createFileIcon({
    m: FileIconXls_size_m_1["default"],
    s: FileIconXls_size_s_1["default"],
    name: 'FileIconXls'
});
