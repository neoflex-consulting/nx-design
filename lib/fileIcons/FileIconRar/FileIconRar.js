"use strict";
exports.__esModule = true;
exports.FileIconRar = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconRar_size_m_1 = tslib_1.__importDefault(require("./FileIconRar_size_m"));
var FileIconRar_size_s_1 = tslib_1.__importDefault(require("./FileIconRar_size_s"));
exports.FileIconRar = createFileIcon_1.createFileIcon({
    m: FileIconRar_size_m_1["default"],
    s: FileIconRar_size_s_1["default"],
    name: 'FileIconRar'
});
