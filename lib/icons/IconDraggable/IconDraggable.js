"use strict";
exports.__esModule = true;
exports.IconDraggable = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDraggable_size_m_1 = tslib_1.__importDefault(require("./IconDraggable_size_m"));
var IconDraggable_size_s_1 = tslib_1.__importDefault(require("./IconDraggable_size_s"));
var IconDraggable_size_xs_1 = tslib_1.__importDefault(require("./IconDraggable_size_xs"));
exports.IconDraggable = createIcon_1.createIcon({
    m: IconDraggable_size_m_1["default"],
    s: IconDraggable_size_s_1["default"],
    xs: IconDraggable_size_xs_1["default"],
    name: 'IconDraggable'
});
