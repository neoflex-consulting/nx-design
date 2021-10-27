"use strict";
exports.__esModule = true;
exports.IconList = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconList_size_m_1 = tslib_1.__importDefault(require("./IconList_size_m"));
var IconList_size_s_1 = tslib_1.__importDefault(require("./IconList_size_s"));
exports.IconList = createIcon_1.createIcon({
    m: IconList_size_m_1["default"],
    s: IconList_size_s_1["default"],
    xs: IconList_size_s_1["default"],
    name: 'IconList'
});
