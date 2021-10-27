"use strict";
exports.__esModule = true;
exports.useComponentSize = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var useResizeObserved_1 = require("../useResizeObserved/useResizeObserved");
var getElementSize = function (el) {
    if (!el) {
        return { width: 0, height: 0 };
    }
    var _a = el.getBoundingClientRect(), width = _a.width, height = _a.height;
    return {
        width: Math.floor(width),
        height: Math.floor(height)
    };
};
function useComponentSize(ref) {
    var refs = react_1.useMemo(function () { return [ref]; }, 
    // Если реф начал указывать на другой элемент, нужно обновить подписки
    [ref.current]);
    var _a = tslib_1.__read(useResizeObserved_1.useResizeObserved(refs, getElementSize), 1), componentSize = _a[0];
    return componentSize;
}
exports.useComponentSize = useComponentSize;
