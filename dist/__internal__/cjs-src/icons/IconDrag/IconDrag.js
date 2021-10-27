"use strict";
exports.__esModule = true;
exports.IconDrag = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconDrag_size_m_1 = tslib_1.__importDefault(require("./IconDrag_size_m"));
var IconDrag_size_s_1 = tslib_1.__importDefault(require("./IconDrag_size_s"));
var IconDrag_size_xs_1 = tslib_1.__importDefault(require("./IconDrag_size_xs"));
exports.IconDrag = createIcon_1.createIcon({
    m: IconDrag_size_m_1["default"],
    s: IconDrag_size_s_1["default"],
    xs: IconDrag_size_xs_1["default"],
    name: 'IconDrag'
});
