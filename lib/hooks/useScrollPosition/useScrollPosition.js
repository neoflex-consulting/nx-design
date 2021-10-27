"use strict";
exports.__esModule = true;
exports.useScrollPosition = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.useScrollPosition = function (el) {
    var _a = tslib_1.__read(react_1["default"].useState(el
        ? getScrollPosition(el)
        : {
            scrollLeft: 0,
            scrollTop: 0
        }), 2), scrollPosition = _a[0], setScrollPosition = _a[1];
    react_1["default"].useEffect(function () {
        if (!el)
            return;
        var handleScroll = function () { return setScrollPosition(getScrollPosition(el)); };
        el.addEventListener('scroll', handleScroll);
        handleScroll();
        return function () { return el.removeEventListener('scroll', handleScroll); };
    }, [el]);
    return scrollPosition;
};
var getScrollPosition = function (el) { return ({
    scrollLeft: el.scrollLeft,
    scrollTop: el.scrollTop
}); };
