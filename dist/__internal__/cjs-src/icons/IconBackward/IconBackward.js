"use strict";
exports.__esModule = true;
exports.IconBackward = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconBackward_size_m_1 = tslib_1.__importDefault(require("./IconBackward_size_m"));
var IconBackward_size_s_1 = tslib_1.__importDefault(require("./IconBackward_size_s"));
var IconBackward_size_xs_1 = tslib_1.__importDefault(require("./IconBackward_size_xs"));
exports.IconBackward = createIcon_1.createIcon({
    m: IconBackward_size_m_1["default"],
    s: IconBackward_size_s_1["default"],
    xs: IconBackward_size_xs_1["default"],
    name: 'IconBackward'
});
