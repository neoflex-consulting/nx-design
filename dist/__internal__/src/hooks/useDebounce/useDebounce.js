import { __read, __spread } from "tslib";
import { useCallback, useEffect, useRef } from 'react';
export var useDebounce = function (fn, time) {
    var timeoutRef = useRef(null);
    var fnRef = useRef();
    fnRef.current = fn;
    useEffect(function () {
        return function () {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        };
    }, [time]);
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(function () {
            timeoutRef.current = null;
            if (typeof fnRef.current === 'function') {
                fnRef.current.apply(fnRef, __spread(args));
            }
        }, time);
    }, [time]);
};
