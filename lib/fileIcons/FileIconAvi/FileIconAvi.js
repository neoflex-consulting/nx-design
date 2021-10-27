"use strict";
exports.__esModule = true;
exports.FileIconAvi = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconAvi_size_m_1 = tslib_1.__importDefault(require("./FileIconAvi_size_m"));
var FileIconAvi_size_s_1 = tslib_1.__importDefault(require("./FileIconAvi_size_s"));
exports.FileIconAvi = createFileIcon_1.createFileIcon({
    m: FileIconAvi_size_m_1["default"],
    s: FileIconAvi_size_s_1["default"],
    name: 'FileIconAvi'
});
