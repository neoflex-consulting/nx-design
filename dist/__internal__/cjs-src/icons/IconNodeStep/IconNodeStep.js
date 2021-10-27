"use strict";
exports.__esModule = true;
exports.IconNodeStep = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconNodeStep_size_m_1 = tslib_1.__importDefault(require("./IconNodeStep_size_m"));
var IconNodeStep_size_s_1 = tslib_1.__importDefault(require("./IconNodeStep_size_s"));
var IconNodeStep_size_xs_1 = tslib_1.__importDefault(require("./IconNodeStep_size_xs"));
exports.IconNodeStep = createIcon_1.createIcon({
    m: IconNodeStep_size_m_1["default"],
    s: IconNodeStep_size_s_1["default"],
    xs: IconNodeStep_size_xs_1["default"],
    name: 'IconNodeStep'
});
