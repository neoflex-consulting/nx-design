"use strict";
exports.__esModule = true;
exports.IconTeam = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconTeam_size_m_1 = tslib_1.__importDefault(require("./IconTeam_size_m"));
var IconTeam_size_s_1 = tslib_1.__importDefault(require("./IconTeam_size_s"));
var IconTeam_size_xs_1 = tslib_1.__importDefault(require("./IconTeam_size_xs"));
exports.IconTeam = createIcon_1.createIcon({
    m: IconTeam_size_m_1["default"],
    s: IconTeam_size_s_1["default"],
    xs: IconTeam_size_xs_1["default"],
    name: 'IconTeam'
});
