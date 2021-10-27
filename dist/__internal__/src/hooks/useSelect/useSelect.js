import { __assign, __read, __spread, __values } from "tslib";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getGroups } from '../../utils/getGroups';
import { useClickOutside } from '../useClickOutside/useClickOutside';
import { useDebounce } from '../useDebounce/useDebounce';
import { useKeys } from '../useKeys/useKeys';
import { usePrevious } from '../usePrevious/usePrevious';
import { scrollToIndex, useHoistedState } from './helpers';
var isMultipleParams = function (params) {
    return params.multiple;
};
var isNotMultipleParams = function (params) {
    return !params.multiple;
};
var actions = {
    setOpen: 'setOpen',
    setSearch: 'setSearch',
    highlightIndex: 'highlightIndex'
};
var initialState = {
    searchValue: '',
    resolvedSearchValue: '',
    isOpen: false,
    highlightedIndex: 0,
    scrollToHighlighted: false
};
export var isOptionForCreate = function (params) {
    return Object.prototype.hasOwnProperty.call(params, '__optionForCreate');
};
export function useSelect(params) {
    var items = params.items, dropdownRef = params.dropdownRef, controlRef = params.controlRef, _a = params.disabled, disabled = _a === void 0 ? false : _a, _b = params.multiple, multiple = _b === void 0 ? false : _b, getItemLabel = params.getItemLabel, getItemKey = params.getItemKey, searchFunction = params.searchFunction, getItemGroupKey = params.getItemGroupKey, groups = params.groups, getGroupKey = params.getGroupKey, sortGroups = params.sortGroups, getItemDisabled = params.getItemDisabled, onFocus = params.onFocus, onBlur = params.onBlur;
    var inputRef = useRef(null);
    var _c = __read(useState(false), 2), isFocused = _c[0], setIsFocused = _c[1];
    var value = (params.value && (Array.isArray(params.value) ? params.value : [params.value])) || [];
    var _d = __read(useHoistedState(initialState), 2), _e = _d[0], searchValue = _e.searchValue, isOpen = _e.isOpen, highlightedIndex = _e.highlightedIndex, resolvedSearchValue = _e.resolvedSearchValue, scrollToHighlighted = _e.scrollToHighlighted, setState = _d[1];
    var searchFunctionDefault = function (item, searchValue) {
        return getItemLabel(item)
            .toLocaleLowerCase()
            .indexOf(searchValue.toLocaleLowerCase()) !== -1;
    };
    var _f = __read(React.useMemo(function () {
        if (resolvedSearchValue && resolvedSearchValue !== '') {
            var fiteredOptions = items.filter(function (item) {
                return searchFunction
                    ? searchFunction(item, resolvedSearchValue)
                    : searchFunctionDefault(item, resolvedSearchValue);
            });
            var matchWithValueSearch = Boolean(items.find(function (option) {
                return getItemLabel(option)
                    .toString()
                    .toLowerCase() === resolvedSearchValue.toLocaleLowerCase();
            }));
            var optionForCreate_1 = {
                label: searchValue,
                __optionForCreate: true
            };
            return [
                fiteredOptions,
                params.onCreate && !matchWithValueSearch ? optionForCreate_1 : undefined,
            ];
        }
        return [items, undefined];
    }, [items, resolvedSearchValue]), 2), filteredOptions = _f[0], optionForCreate = _f[1];
    var visibleItems = useMemo(function () {
        var resultGroups = getGroups(filteredOptions, (groups === null || groups === void 0 ? void 0 : groups.length) ? getItemGroupKey : undefined, groups, getGroupKey, sortGroups);
        return optionForCreate ? __spread([optionForCreate], resultGroups) : resultGroups;
    }, [filteredOptions, groups, getItemGroupKey, getGroupKey, sortGroups, optionForCreate]);
    var getSelectedOptionIndex = function () {
        var e_1, _a, e_2, _b;
        var index = 0;
        if (value.length > 0) {
            try {
                for (var visibleItems_1 = __values(visibleItems), visibleItems_1_1 = visibleItems_1.next(); !visibleItems_1_1.done; visibleItems_1_1 = visibleItems_1.next()) {
                    var group = visibleItems_1_1.value;
                    if (isOptionForCreate(group)) {
                        index++;
                        // eslint-disable-next-line no-continue
                        continue;
                    }
                    try {
                        for (var _c = (e_2 = void 0, __values(group.items)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var item = _d.value;
                            if (getItemKey(item) === getItemKey(value[0])) {
                                return index;
                            }
                            index++;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c["return"])) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (visibleItems_1_1 && !visibleItems_1_1.done && (_a = visibleItems_1["return"])) _a.call(visibleItems_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return 0;
    };
    // Actions
    var setOpen = React.useCallback(function (newIsOpen) {
        setState(function (old) { return (__assign(__assign({}, old), { isOpen: newIsOpen })); }, actions.setOpen);
    }, [setState]);
    var setResolvedSearch = useDebounce(function (value) {
        setState(function (old) { return (__assign(__assign({}, old), { resolvedSearchValue: value })); }, actions.setSearch);
    }, 300);
    var setSearch = React.useCallback(function (value) {
        setState(function (old) { return (__assign(__assign({}, old), { searchValue: value })); }, actions.setSearch);
        setResolvedSearch(value);
    }, [setState, setResolvedSearch]);
    var prevIsOpen = usePrevious(isOpen);
    React.useLayoutEffect(function () {
        if (value !== null && !prevIsOpen && isOpen) {
            var currentHighlightIndex = getSelectedOptionIndex();
            if (filteredOptions.length > 0) {
                scrollToIndex(currentHighlightIndex, dropdownRef);
            }
        }
    });
    var highlightIndex = React.useCallback(function (indexForHighlight, scrollToHighlighted) {
        setState(function (old) {
            return __assign(__assign({}, old), { highlightedIndex: Math.min(Math.max(0, typeof indexForHighlight === 'function'
                    ? indexForHighlight(old.highlightedIndex)
                    : indexForHighlight), optionForCreate ? filteredOptions.length : filteredOptions.length - 1), scrollToHighlighted: scrollToHighlighted });
        }, actions.highlightIndex);
    }, [filteredOptions, setState, optionForCreate]);
    var removeValue = function (e, valueItem) {
        var _a;
        e.stopPropagation();
        if (isMultipleParams(params)) {
            var newValue = (_a = params.value) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return getItemKey(item) !== getItemKey(valueItem); });
            params.onChange({
                e: e,
                value: (newValue === null || newValue === void 0 ? void 0 : newValue.length) ? newValue : null
            });
        }
    };
    var onChange = function (e, item) {
        if (getItemDisabled && getItemDisabled(item)) {
            return;
        }
        if (isMultipleParams(params)) {
            var newValue = value.some(function (value) { return getItemKey(value) === getItemKey(item); })
                ? value.filter(function (value) { return getItemKey(value) !== getItemKey(item); })
                : __spread(value, [item]);
            params.onChange({ value: newValue.length ? newValue : null, e: e });
        }
        if (isNotMultipleParams(params)) {
            params.onChange({ value: item, e: e });
            setOpen(false);
        }
        setResolvedSearch('');
        setSearch('');
    };
    var onCreate = function (e, label) {
        params.onCreate && params.onCreate({ e: e, label: label });
        setOpen(false);
        setResolvedSearch('');
        setSearch('');
    };
    // Handlers
    var handleInputChange = function (e) {
        if (!disabled && !(!multiple && value.length > 0)) {
            setSearch(e.target.value);
        }
    };
    var handleInputClick = function () {
        var _a;
        !disabled && setOpen(!isOpen);
        if (multiple) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            setSearch('');
        }
    };
    var clearValue = function (e) {
        params.onChange({ value: null, e: e });
        setResolvedSearch('');
        setSearch('');
    };
    var getHandleRemoveValue = function (item) { return function (e) { return removeValue(e, item); }; };
    // Prop Getters
    var ArrowUp = function (_, e) {
        e.preventDefault();
        !disabled && setOpen(true);
        highlightIndex(function (old) { return old - 1; }, true);
    };
    var ArrowDown = function (_, e) {
        e.preventDefault();
        !disabled && setOpen(true);
        highlightIndex(function (old) { return old + 1; }, true);
    };
    var Enter = function (_, e) {
        if (isOpen) {
            if (searchValue || filteredOptions[highlightedIndex]) {
                e.preventDefault();
            }
            var getItem = function (index) {
                var e_3, _a;
                var couter = 0;
                try {
                    for (var visibleItems_2 = __values(visibleItems), visibleItems_2_1 = visibleItems_2.next(); !visibleItems_2_1.done; visibleItems_2_1 = visibleItems_2.next()) {
                        var group = visibleItems_2_1.value;
                        if (isOptionForCreate(group)) {
                            couter++;
                            return group;
                        }
                        if (group.items.length + couter > index) {
                            return group.items[index - couter];
                        }
                        couter += group.items.length;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (visibleItems_2_1 && !visibleItems_2_1.done && (_a = visibleItems_2["return"])) _a.call(visibleItems_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return undefined;
            };
            var item = getItem(highlightedIndex);
            if (isOptionForCreate(item)) {
                onCreate(e, item.label);
                return;
            }
            if (item) {
                onChange(e, item);
            }
        }
    };
    var Escape = function () {
        setOpen(false);
    };
    var Tab = function () {
        setOpen(false);
    };
    var Backspace = function (_, e) {
        if (searchValue) {
            return;
        }
        if (multiple) {
            removeValue(e, value[value.length - 1]);
        }
        else {
            clearValue(e);
        }
    };
    var getKeyProps = useKeys({
        ArrowUp: ArrowUp,
        ArrowDown: ArrowDown,
        PageUp: ArrowUp,
        PageDown: ArrowDown,
        Home: ArrowUp,
        End: ArrowDown,
        Enter: Enter,
        Escape: Escape,
        Tab: Tab,
        Backspace: Backspace
    });
    var getOptionProps = function (_a) {
        var index = _a.index, item = _a.item;
        if (isOptionForCreate(item)) {
            return {
                onClick: function (e) {
                    onCreate(e, item.label);
                },
                onMouseEnter: function () {
                    highlightIndex(index, false);
                },
                active: false,
                hovered: index === highlightedIndex,
                key: '__optionForCreate'
            };
        }
        var key = getItemKey(item);
        return {
            onClick: function (e) {
                onChange(e, item);
            },
            onMouseEnter: function () {
                highlightIndex(index, false);
            },
            active: Boolean(value.find(function (item) { return getItemKey(item) === key; })),
            hovered: index === highlightedIndex,
            key: key
        };
    };
    useClickOutside({
        isActive: isOpen,
        ignoreClicksInsideRefs: [dropdownRef, controlRef],
        handler: function () {
            setOpen(false);
        }
    });
    React.useEffect(function () {
        if (disabled) {
            setOpen(false);
        }
    }, [disabled]);
    React.useEffect(function () {
        var currentHighlightIndex = getSelectedOptionIndex();
        highlightIndex(currentHighlightIndex, true);
    }, [highlightIndex]);
    React.useEffect(function () {
        if (filteredOptions.length > 0 && scrollToHighlighted) {
            scrollToIndex(highlightedIndex, dropdownRef);
        }
    }, [highlightedIndex]);
    var handleInputFocus = function (e) {
        if (!disabled) {
            if (!isFocused) {
                setIsFocused(true);
            }
            if (typeof onFocus === 'function') {
                onFocus(e);
            }
        }
    };
    var handleInputBlur = function (e) {
        var _a;
        if (isOpen) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
        if (isFocused) {
            setIsFocused(false);
            if (typeof onBlur === 'function') {
                onBlur(e);
            }
        }
    };
    var handleToggleDropdown = function () {
        var _a;
        if (isOpen) {
            setOpen(false);
            setIsFocused(false);
        }
        else {
            setOpen(true);
            setIsFocused(true);
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    useEffect(function () {
        if (searchValue) {
            setOpen(true);
        }
    }, [searchValue]);
    return {
        isOpen: isOpen,
        isFocused: isFocused,
        highlightedIndex: highlightedIndex,
        visibleItems: visibleItems,
        highlightIndex: highlightIndex,
        getOptionProps: getOptionProps,
        handleInputFocus: handleInputFocus,
        handleInputBlur: handleInputBlur,
        handleToggleDropdown: handleToggleDropdown,
        handleInputClick: handleInputClick,
        inputRef: inputRef,
        getKeyProps: getKeyProps,
        handleInputChange: handleInputChange,
        searchValue: searchValue,
        clearValue: clearValue,
        getHandleRemoveValue: getHandleRemoveValue
    };
}
