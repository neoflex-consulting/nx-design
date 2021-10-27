"use strict";
exports.__esModule = true;
exports.IconGas = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconGas_size_m_1 = tslib_1.__importDefault(require("./IconGas_size_m"));
var IconGas_size_s_1 = tslib_1.__importDefault(require("./IconGas_size_s"));
exports.IconGas = createIcon_1.createIcon({
    m: IconGas_size_m_1["default"],
    s: IconGas_size_s_1["default"],
    xs: IconGas_size_s_1["default"],
    name: 'IconGas'
});
