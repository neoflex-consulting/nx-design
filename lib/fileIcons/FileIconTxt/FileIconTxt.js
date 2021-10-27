"use strict";
exports.__esModule = true;
exports.FileIconTxt = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconTxt_size_m_1 = tslib_1.__importDefault(require("./FileIconTxt_size_m"));
var FileIconTxt_size_s_1 = tslib_1.__importDefault(require("./FileIconTxt_size_s"));
exports.FileIconTxt = createFileIcon_1.createFileIcon({
    m: FileIconTxt_size_m_1["default"],
    s: FileIconTxt_size_s_1["default"],
    name: 'FileIconTxt'
});
