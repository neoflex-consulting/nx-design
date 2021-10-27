"use strict";
exports.__esModule = true;
exports.isEmpty = void 0;
exports.isEmpty = function (obj) {
    // eslint-disable-next-line guard-for-in
    for (var _ in obj) {
        return false;
    }
    return true;
};
