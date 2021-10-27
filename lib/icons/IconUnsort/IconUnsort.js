"use strict";
exports.__esModule = true;
exports.IconUnsort = void 0;
var tslib_1 = require("tslib");
var createIcon_1 = require("../createIcon/createIcon");
var IconUnsort_size_m_1 = tslib_1.__importDefault(require("./IconUnsort_size_m"));
var IconUnsort_size_s_1 = tslib_1.__importDefault(require("./IconUnsort_size_s"));
var IconUnsort_size_xs_1 = tslib_1.__importDefault(require("./IconUnsort_size_xs"));
exports.IconUnsort = createIcon_1.createIcon({
    m: IconUnsort_size_m_1["default"],
    s: IconUnsort_size_s_1["default"],
    xs: IconUnsort_size_xs_1["default"],
    name: 'IconUnsort'
});
