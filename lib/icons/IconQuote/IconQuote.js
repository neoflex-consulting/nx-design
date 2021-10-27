"use strict";
exports.__esModule = true;
exports.IconQuote = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconQuote_size_m_1 = tslib_1.__importDefault(require("./IconQuote_size_m"));
var IconQuote_size_s_1 = tslib_1.__importDefault(require("./IconQuote_size_s"));
exports.IconQuote = createIcon_1.createIcon({
    m: IconQuote_size_m_1["default"],
    s: IconQuote_size_s_1["default"],
    xs: IconQuote_size_s_1["default"],
    name: 'IconQuote'
});
