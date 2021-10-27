"use strict";
exports.__esModule = true;
exports.IconChat = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconChat_size_m_1 = tslib_1.__importDefault(require("./IconChat_size_m"));
var IconChat_size_s_1 = tslib_1.__importDefault(require("./IconChat_size_s"));
exports.IconChat = createIcon_1.createIcon({
    m: IconChat_size_m_1["default"],
    s: IconChat_size_s_1["default"],
    xs: IconChat_size_s_1["default"],
    name: 'IconChat'
});
