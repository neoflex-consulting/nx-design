"use strict";
exports.__esModule = true;
exports.FileIconUndefined = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconUndefined_size_m_1 = tslib_1.__importDefault(require("./FileIconUndefined_size_m"));
var FileIconUndefined_size_s_1 = tslib_1.__importDefault(require("./FileIconUndefined_size_s"));
exports.FileIconUndefined = createFileIcon_1.createFileIcon({
    m: FileIconUndefined_size_m_1["default"],
    s: FileIconUndefined_size_s_1["default"],
    name: 'FileIconUndefined'
});
