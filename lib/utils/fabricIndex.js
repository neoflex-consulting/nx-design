"use strict";
exports.__esModule = true;
exports.fabricIndex = void 0;
exports.fabricIndex = function (start) {
    if (start === void 0) { start = 0; }
    var index = start;
    return function () {
        index += 1;
        return index;
    };
};
