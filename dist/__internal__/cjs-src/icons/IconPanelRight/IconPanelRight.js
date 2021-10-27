"use strict";
exports.__esModule = true;
exports.IconPanelRight = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPanelRight_size_m_1 = tslib_1.__importDefault(require("./IconPanelRight_size_m"));
var IconPanelRight_size_s_1 = tslib_1.__importDefault(require("./IconPanelRight_size_s"));
var IconPanelRight_size_xs_1 = tslib_1.__importDefault(require("./IconPanelRight_size_xs"));
exports.IconPanelRight = createIcon_1.createIcon({
    m: IconPanelRight_size_m_1["default"],
    s: IconPanelRight_size_s_1["default"],
    xs: IconPanelRight_size_xs_1["default"],
    name: 'IconPanelRight'
});
