"use strict";
exports.__esModule = true;
exports.formatFileRequirements = void 0;
var type_guards_1 = require("../../../utils/type-guards");
var formatFileSize_1 = require("../formatFileSize");
exports.formatFileRequirements = function (accept, maxSize) {
    if (accept === null || accept === void 0 ? void 0 : accept.length) {
        var formattedAccept = Array.isArray(accept) ? accept.join(', ') : accept;
        return ["\u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0444\u0430\u0439\u043B\u044B " + formattedAccept, maxSize ? "\u0434\u043E " + formatFileSize_1.formatFileSize(maxSize) : null]
            .filter(type_guards_1.isNotNil)
            .join(', ');
    }
    if (maxSize) {
        return "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C " + formatFileSize_1.formatFileSize(maxSize);
    }
    return undefined;
};
