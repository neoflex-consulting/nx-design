"use strict";
exports.__esModule = true;
exports.IconDinosaur = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDinosaur_size_m_1 = tslib_1.__importDefault(require("./IconDinosaur_size_m"));
var IconDinosaur_size_s_1 = tslib_1.__importDefault(require("./IconDinosaur_size_s"));
var IconDinosaur_size_xs_1 = tslib_1.__importDefault(require("./IconDinosaur_size_xs"));
exports.IconDinosaur = createIcon_1.createIcon({
    m: IconDinosaur_size_m_1["default"],
    s: IconDinosaur_size_s_1["default"],
    xs: IconDinosaur_size_xs_1["default"],
    name: 'IconDinosaur'
});
