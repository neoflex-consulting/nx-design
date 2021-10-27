"use strict";
exports.__esModule = true;
exports.FileIconPtt = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconPtt_size_m_1 = tslib_1.__importDefault(require("./FileIconPtt_size_m"));
var FileIconPtt_size_s_1 = tslib_1.__importDefault(require("./FileIconPtt_size_s"));
exports.FileIconPtt = createFileIcon_1.createFileIcon({
    m: FileIconPtt_size_m_1["default"],
    s: FileIconPtt_size_s_1["default"],
    name: 'FileIconPtt'
});
