"use strict";
exports.__esModule = true;
exports.IconMolecules = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconMolecules_size_m_1 = tslib_1.__importDefault(require("./IconMolecules_size_m"));
var IconMolecules_size_s_1 = tslib_1.__importDefault(require("./IconMolecules_size_s"));
var IconMolecules_size_xs_1 = tslib_1.__importDefault(require("./IconMolecules_size_xs"));
exports.IconMolecules = createIcon_1.createIcon({
    m: IconMolecules_size_m_1["default"],
    s: IconMolecules_size_s_1["default"],
    xs: IconMolecules_size_xs_1["default"],
    name: 'IconMolecules'
});
