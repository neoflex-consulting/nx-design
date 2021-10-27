"use strict";
exports.__esModule = true;
exports.FileIconJson = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconJson_size_m_1 = tslib_1.__importDefault(require("./FileIconJson_size_m"));
var FileIconJson_size_s_1 = tslib_1.__importDefault(require("./FileIconJson_size_s"));
exports.FileIconJson = createFileIcon_1.createFileIcon({
    m: FileIconJson_size_m_1["default"],
    s: FileIconJson_size_s_1["default"],
    name: 'FileIconJson'
});
