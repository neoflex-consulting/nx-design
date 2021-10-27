import { __read } from "tslib";
import React from 'react';
import { scrollIntoView } from '../../utils/scrollIntoView';
export function useHoistedState(initialState) {
    var reducerRef = React.useRef(function (old, newState) { return newState; });
    var _a = __read(React.useState(initialState), 2), state = _a[0], _setState = _a[1];
    var setState = React.useCallback(function (updater, action) {
        if (!action) {
            throw new Error('An action type is required to update the state');
        }
        return _setState(function (old) { return reducerRef.current(old, updater(old), action); });
    }, [_setState]);
    return [state, setState];
}
export var scrollToIndex = function (index, dropdownRef) {
    if (!dropdownRef.current) {
        return;
    }
    var elements = dropdownRef.current.querySelectorAll('div[role=option]');
    scrollIntoView(elements[index], dropdownRef.current);
};
