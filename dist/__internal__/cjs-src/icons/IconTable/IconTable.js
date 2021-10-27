"use strict";
exports.__esModule = true;
exports.IconTable = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconTable_size_m_1 = tslib_1.__importDefault(require("./IconTable_size_m"));
var IconTable_size_s_1 = tslib_1.__importDefault(require("./IconTable_size_s"));
exports.IconTable = createIcon_1.createIcon({
    m: IconTable_size_m_1["default"],
    s: IconTable_size_s_1["default"],
    xs: IconTable_size_s_1["default"],
    name: 'IconTable'
});
