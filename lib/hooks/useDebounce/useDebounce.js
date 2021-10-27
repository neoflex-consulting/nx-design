"use strict";
exports.__esModule = true;
exports.useDebounce = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
exports.useDebounce = function (fn, time) {
    var timeoutRef = react_1.useRef(null);
    var fnRef = react_1.useRef();
    fnRef.current = fn;
    react_1.useEffect(function () {
        return function () {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        };
    }, [time]);
    return react_1.useCallback(function () {
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
                fnRef.current.apply(fnRef, tslib_1.__spread(args));
            }
        }, time);
    }, [time]);
};
