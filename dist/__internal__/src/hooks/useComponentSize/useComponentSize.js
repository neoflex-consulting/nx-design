import { __read } from "tslib";
import { useMemo } from 'react';
import { useResizeObserved } from '../useResizeObserved/useResizeObserved';
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
export function useComponentSize(ref) {
    var refs = useMemo(function () { return [ref]; }, 
    // Если реф начал указывать на другой элемент, нужно обновить подписки
    [ref.current]);
    var _a = __read(useResizeObserved(refs, getElementSize), 1), componentSize = _a[0];
    return componentSize;
}
