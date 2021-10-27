import { __read } from "tslib";
import React from 'react';
export var useScrollPosition = function (el) {
    var _a = __read(React.useState(el
        ? getScrollPosition(el)
        : {
            scrollLeft: 0,
            scrollTop: 0
        }), 2), scrollPosition = _a[0], setScrollPosition = _a[1];
    React.useEffect(function () {
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
