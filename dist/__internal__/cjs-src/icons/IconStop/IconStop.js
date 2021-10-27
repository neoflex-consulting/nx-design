"use strict";
exports.__esModule = true;
exports.IconStop = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconStop_size_m_1 = tslib_1.__importDefault(require("./IconStop_size_m"));
var IconStop_size_s_1 = tslib_1.__importDefault(require("./IconStop_size_s"));
var IconStop_size_xs_1 = tslib_1.__importDefault(require("./IconStop_size_xs"));
exports.IconStop = createIcon_1.createIcon({
    m: IconStop_size_m_1["default"],
    s: IconStop_size_s_1["default"],
    xs: IconStop_size_xs_1["default"],
    name: 'IconStop'
});
