"use strict";
exports.__esModule = true;
exports.IconPanelBottom = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPanelBottom_size_m_1 = tslib_1.__importDefault(require("./IconPanelBottom_size_m"));
var IconPanelBottom_size_s_1 = tslib_1.__importDefault(require("./IconPanelBottom_size_s"));
var IconPanelBottom_size_xs_1 = tslib_1.__importDefault(require("./IconPanelBottom_size_xs"));
exports.IconPanelBottom = createIcon_1.createIcon({
    m: IconPanelBottom_size_m_1["default"],
    s: IconPanelBottom_size_s_1["default"],
    xs: IconPanelBottom_size_xs_1["default"],
    name: 'IconPanelBottom'
});
