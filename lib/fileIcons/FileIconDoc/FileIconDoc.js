"use strict";
exports.__esModule = true;
exports.FileIconDoc = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconDoc_size_m_1 = tslib_1.__importDefault(require("./FileIconDoc_size_m"));
var FileIconDoc_size_s_1 = tslib_1.__importDefault(require("./FileIconDoc_size_s"));
exports.FileIconDoc = createFileIcon_1.createFileIcon({
    m: FileIconDoc_size_m_1["default"],
    s: FileIconDoc_size_s_1["default"],
    name: 'FileIconDoc'
});
