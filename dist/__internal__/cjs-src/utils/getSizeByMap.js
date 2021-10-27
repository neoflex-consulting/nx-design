"use strict";
exports.__esModule = true;
exports.getSizeByMap = void 0;
function getSizeByMap(map, componentSize, size) {
    if (size) {
        return size;
    }
    return map[componentSize];
}
exports.getSizeByMap = getSizeByMap;
