"use strict";
exports.__esModule = true;
exports.IconTest = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconTest_size_m_1 = tslib_1.__importDefault(require("./IconTest_size_m"));
var IconTest_size_s_1 = tslib_1.__importDefault(require("./IconTest_size_s"));
exports.IconTest = createIcon_1.createIcon({
    m: IconTest_size_m_1["default"],
    s: IconTest_size_s_1["default"],
    xs: IconTest_size_s_1["default"],
    name: 'IconTest'
});
