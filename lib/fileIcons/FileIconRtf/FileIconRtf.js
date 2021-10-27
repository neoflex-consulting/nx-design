"use strict";
exports.__esModule = true;
exports.FileIconRtf = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconRtf_size_m_1 = tslib_1.__importDefault(require("./FileIconRtf_size_m"));
var FileIconRtf_size_s_1 = tslib_1.__importDefault(require("./FileIconRtf_size_s"));
exports.FileIconRtf = createFileIcon_1.createFileIcon({
    m: FileIconRtf_size_m_1["default"],
    s: FileIconRtf_size_s_1["default"],
    name: 'FileIconRtf'
});
