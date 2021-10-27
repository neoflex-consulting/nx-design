"use strict";
exports.__esModule = true;
exports.FileIconZip = void 0;
var tslib_1 = require("tslib");
var createFileIcon_1 = require("../createFileIcon/createFileIcon");
var FileIconZip_size_m_1 = tslib_1.__importDefault(require("./FileIconZip_size_m"));
var FileIconZip_size_s_1 = tslib_1.__importDefault(require("./FileIconZip_size_s"));
exports.FileIconZip = createFileIcon_1.createFileIcon({
    m: FileIconZip_size_m_1["default"],
    s: FileIconZip_size_s_1["default"],
    name: 'FileIconZip'
});
