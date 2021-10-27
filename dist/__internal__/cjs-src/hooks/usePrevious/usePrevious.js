"use strict";
exports.__esModule = true;
exports.usePrevious = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function usePrevious(value) {
    var ref = react_1["default"].useRef(value);
    react_1["default"].useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
}
exports.usePrevious = usePrevious;
