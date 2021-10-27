"use strict";
exports.__esModule = true;
exports.IconUnsortCenter = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconUnsortCenter_size_m_1 = tslib_1.__importDefault(require("./IconUnsortCenter_size_m"));
var IconUnsortCenter_size_s_1 = tslib_1.__importDefault(require("./IconUnsortCenter_size_s"));
var IconUnsortCenter_size_xs_1 = tslib_1.__importDefault(require("./IconUnsortCenter_size_xs"));
exports.IconUnsortCenter = createIcon_1.createIcon({
    m: IconUnsortCenter_size_m_1["default"],
    s: IconUnsortCenter_size_s_1["default"],
    xs: IconUnsortCenter_size_xs_1["default"],
    name: 'IconUnsortCenter'
});
