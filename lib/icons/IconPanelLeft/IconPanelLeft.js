"use strict";
exports.__esModule = true;
exports.IconPanelLeft = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPanelLeft_size_m_1 = tslib_1.__importDefault(require("./IconPanelLeft_size_m"));
var IconPanelLeft_size_s_1 = tslib_1.__importDefault(require("./IconPanelLeft_size_s"));
var IconPanelLeft_size_xs_1 = tslib_1.__importDefault(require("./IconPanelLeft_size_xs"));
exports.IconPanelLeft = createIcon_1.createIcon({
    m: IconPanelLeft_size_m_1["default"],
    s: IconPanelLeft_size_s_1["default"],
    xs: IconPanelLeft_size_xs_1["default"],
    name: 'IconPanelLeft'
});
