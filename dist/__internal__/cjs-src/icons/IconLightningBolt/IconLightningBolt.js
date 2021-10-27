"use strict";
exports.__esModule = true;
exports.IconLightningBolt = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconLightningBolt_size_m_1 = tslib_1.__importDefault(require("./IconLightningBolt_size_m"));
var IconLightningBolt_size_s_1 = tslib_1.__importDefault(require("./IconLightningBolt_size_s"));
var IconLightningBolt_size_xs_1 = tslib_1.__importDefault(require("./IconLightningBolt_size_xs"));
exports.IconLightningBolt = createIcon_1.createIcon({
    m: IconLightningBolt_size_m_1["default"],
    s: IconLightningBolt_size_s_1["default"],
    xs: IconLightningBolt_size_xs_1["default"],
    name: 'IconLightningBolt'
});
