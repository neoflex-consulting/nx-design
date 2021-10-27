"use strict";
exports.__esModule = true;
exports.IconRouble = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconRouble_size_m_1 = tslib_1.__importDefault(require("./IconRouble_size_m"));
var IconRouble_size_s_1 = tslib_1.__importDefault(require("./IconRouble_size_s"));
exports.IconRouble = createIcon_1.createIcon({
    m: IconRouble_size_m_1["default"],
    s: IconRouble_size_s_1["default"],
    xs: IconRouble_size_s_1["default"],
    name: 'IconRouble'
});
