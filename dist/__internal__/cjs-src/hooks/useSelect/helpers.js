"use strict";
exports.__esModule = true;
exports.scrollToIndex = exports.useHoistedState = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var scrollIntoView_1 = require("../../utils/scrollIntoView");
function useHoistedState(initialState) {
    var reducerRef = react_1["default"].useRef(function (old, newState) { return newState; });
    var _a = tslib_1.__read(react_1["default"].useState(initialState), 2), state = _a[0], _setState = _a[1];
    var setState = react_1["default"].useCallback(function (updater, action) {
        if (!action) {
            throw new Error('An action type is required to update the state');
        }
        return _setState(function (old) { return reducerRef.current(old, updater(old), action); });
    }, [_setState]);
    return [state, setState];
}
exports.useHoistedState = useHoistedState;
exports.scrollToIndex = function (index, dropdownRef) {
    if (!dropdownRef.current) {
        return;
    }
    var elements = dropdownRef.current.querySelectorAll('div[role=option]');
    scrollIntoView_1.scrollIntoView(elements[index], dropdownRef.current);
};
