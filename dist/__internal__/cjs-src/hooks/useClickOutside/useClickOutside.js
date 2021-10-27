"use strict";
exports.__esModule = true;
exports.useClickOutside = void 0;
var react_1 = require("react");
function useClickOutside(_a) {
    var isActive = _a.isActive, ignoreClicksInsideRefs = _a.ignoreClicksInsideRefs, handler = _a.handler;
    react_1.useEffect(function () {
        if (!isActive) {
            return;
        }
        var handleClick = function (event) {
            var target = event.target;
            var shouldCallHandler = ignoreClicksInsideRefs.every(function (ref) { var _a; return !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(target)); });
            shouldCallHandler && handler(event);
        };
        document.addEventListener('mousedown', handleClick);
        return function () { return document.removeEventListener('mousedown', handleClick); };
    }, [isActive, ignoreClicksInsideRefs, handler]);
}
exports.useClickOutside = useClickOutside;
