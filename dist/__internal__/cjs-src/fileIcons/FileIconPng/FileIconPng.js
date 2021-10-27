"use strict";
exports.__esModule = true;
exports.FileIconPng = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconPng_size_m_1 = tslib_1.__importDefault(require("./FileIconPng_size_m"));
var FileIconPng_size_s_1 = tslib_1.__importDefault(require("./FileIconPng_size_s"));
exports.FileIconPng = createFileIcon_1.createFileIcon({
    m: FileIconPng_size_m_1["default"],
    s: FileIconPng_size_s_1["default"],
    name: 'FileIconPng'
});
