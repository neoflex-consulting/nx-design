"use strict";
exports.__esModule = true;
exports.FileIconMov = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconMov_size_m_1 = tslib_1.__importDefault(require("./FileIconMov_size_m"));
var FileIconMov_size_s_1 = tslib_1.__importDefault(require("./FileIconMov_size_s"));
exports.FileIconMov = createFileIcon_1.createFileIcon({
    m: FileIconMov_size_m_1["default"],
    s: FileIconMov_size_s_1["default"],
    name: 'FileIconMov'
});
