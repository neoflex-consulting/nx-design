"use strict";
exports.__esModule = true;
exports.IconPanelTop = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconPanelTop_size_m_1 = tslib_1.__importDefault(require("./IconPanelTop_size_m"));
var IconPanelTop_size_s_1 = tslib_1.__importDefault(require("./IconPanelTop_size_s"));
var IconPanelTop_size_xs_1 = tslib_1.__importDefault(require("./IconPanelTop_size_xs"));
exports.IconPanelTop = createIcon_1.createIcon({
    m: IconPanelTop_size_m_1["default"],
    s: IconPanelTop_size_s_1["default"],
    xs: IconPanelTop_size_xs_1["default"],
    name: 'IconPanelTop'
});
