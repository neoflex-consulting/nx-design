"use strict";
exports.__esModule = true;
exports.FileIconLoading = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconLoading_size_m_1 = tslib_1.__importDefault(require("./FileIconLoading_size_m"));
var FileIconLoading_size_s_1 = tslib_1.__importDefault(require("./FileIconLoading_size_s"));
exports.FileIconLoading = createFileIcon_1.createFileIcon({
    m: FileIconLoading_size_m_1["default"],
    s: FileIconLoading_size_s_1["default"],
    name: 'FileIconLoading'
});
