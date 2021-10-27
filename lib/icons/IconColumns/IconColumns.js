"use strict";
exports.__esModule = true;
exports.IconColumns = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconColumns_size_m_1 = tslib_1.__importDefault(require("./IconColumns_size_m"));
var IconColumns_size_s_1 = tslib_1.__importDefault(require("./IconColumns_size_s"));
exports.IconColumns = createIcon_1.createIcon({
    m: IconColumns_size_m_1["default"],
    s: IconColumns_size_s_1["default"],
    xs: IconColumns_size_s_1["default"],
    name: 'IconColumns'
});
