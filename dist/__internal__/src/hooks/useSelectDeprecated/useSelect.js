import { __assign, __read, __rest, __spread } from "tslib";
import React, { useMemo } from 'react';
import { useClickOutside } from '../useClickOutside/useClickOutside';
import { useDebounce } from '../useDebounce/useDebounce';
import { useKeys } from '../useKeysDeprecated/useKeys';
import { usePrevious } from '../usePrevious/usePrevious';
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
function useHoistedState(initialState) {
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
export function useSelect(params) {
    var _a;
    var options = params.options, onChange = params.onChange, scrollToIndex = params.scrollToIndex, optionsRef = params.optionsRef, controlRef = params.controlRef, _b = params.disabled, disabled = _b === void 0 ? false : _b, _c = params.multiple, multiple = _c === void 0 ? false : _c, getOptionLabel = params.getOptionLabel, getOptionKey = params.getOptionKey, searchFunction = params.searchFunction, onCreate = params.onCreate, getGroupOptions = params.getGroupOptions, onSelectOption = params.onSelectOption;
    var value = (_a = params.value) !== null && _a !== void 0 ? _a : [];
    var _d = __read(useHoistedState(initialState), 2), _e = _d[0], searchValue = _e.searchValue, isOpen = _e.isOpen, highlightedIndex = _e.highlightedIndex, resolvedSearchValue = _e.resolvedSearchValue, scrollToHighlighted = _e.scrollToHighlighted, setState = _d[1];
    var originalOptions = useMemo(function () {
        return typeof getGroupOptions === 'function'
            ? options
                .map(function (group) {
                var groupName = getOptionLabel(group);
                var items = typeof getGroupOptions === 'function' ? getGroupOptions(group) : [];
                return items.map(function (item) { return (__assign(__assign({}, item), { group: groupName })); });
            })
                .flat()
            : options;
    }, [options]);
    // Refs
    var inputRef = React.useRef();
    var onBlurRef = React.useRef();
    var scrollToIndexRef = React.useRef();
    scrollToIndexRef.current = scrollToIndex;
    var onChangeRef = React.useRef();
    onChangeRef.current = onChange;
    var onCreateRef = React.useRef();
    onCreateRef.current = onCreate;
    var filterFnRef = React.useRef();
    filterFnRef.current = function (options, searchValue) {
        if (typeof getOptionLabel === 'function') {
            var searchValueLowerCase_1 = searchValue.toLowerCase();
            var tempOptions = originalOptions
                .filter(function (option) { return searchFunction(option, searchValue); })
                .sort(function (a) {
                return getOptionLabel(a)
                    .toLowerCase()
                    .indexOf(searchValueLowerCase_1);
            });
            var matchWithValueSearch = Boolean(originalOptions.find(function (option) { return getOptionLabel(option).toLowerCase() === searchValueLowerCase_1; }));
            var optionForCreate = {
                label: searchValue,
                item: { label: searchValue },
                optionForCreate: true
            };
            return typeof onCreate === 'function' && !matchWithValueSearch
                ? __spread([optionForCreate], tempOptions) : tempOptions;
        }
        return originalOptions;
    };
    var filteredOptions = React.useMemo(function () {
        if (resolvedSearchValue && resolvedSearchValue !== '' && filterFnRef.current) {
            return filterFnRef.current(options, resolvedSearchValue.trim());
        }
        return originalOptions;
    }, [originalOptions, resolvedSearchValue]);
    var getSelectedOptionIndex = function () {
        if (value) {
            var valuesArray = __spread(filteredOptions);
            var selectedOptionIndex = valuesArray.indexOf(value[0]);
            return selectedOptionIndex > 0 ? selectedOptionIndex : 0;
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
                scrollToIndexRef.current && scrollToIndexRef.current(currentHighlightIndex);
            }
        }
    });
    var highlightIndex = React.useCallback(function (indexForHighlight, scrollToHighlighted) {
        setState(function (old) {
            return __assign(__assign({}, old), { highlightedIndex: Math.min(Math.max(0, typeof indexForHighlight === 'function'
                    ? indexForHighlight(old.highlightedIndex)
                    : indexForHighlight), filteredOptions.length - 1), scrollToHighlighted: scrollToHighlighted });
        }, actions.highlightIndex);
    }, [filteredOptions, setState]);
    var selectIndex = React.useCallback(function (index) {
        var option = filteredOptions[index];
        if (option && onChangeRef.current) {
            if (multiple) {
                var newVal = value.some(function (v) { return getOptionKey(v) === getOptionKey(option); })
                    ? value.filter(function (v) { return getOptionKey(v) !== getOptionKey(option); })
                    : __spread(value, [option]);
                if (!option.optionForCreate) {
                    onChangeRef.current(newVal);
                }
                else if (typeof onCreateRef.current === 'function') {
                    var newValue = getOptionLabel(option);
                    newValue && onCreateRef.current(newValue);
                }
            }
            else {
                if (!option.optionForCreate) {
                    onChangeRef.current(option);
                }
                else if (typeof onCreateRef.current === 'function') {
                    var newValue = getOptionLabel(option);
                    newValue && onCreateRef.current(newValue);
                }
                setOpen(false);
            }
        }
        if (typeof onSelectOption === 'function') {
            onSelectOption();
        }
        setResolvedSearch('');
        setSearch('');
    }, [filteredOptions, value, setOpen]);
    // Handlers
    var handleValueFieldChange = function (e) {
        var target = e.target;
        !disabled && setSearch(target.value);
    };
    var handleValueFieldClick = function () {
        !disabled && setOpen(!isOpen);
        if (multiple) {
            setSearch('');
        }
    };
    var handleValueFieldFocus = function () { return handleValueFieldClick(); };
    var removeValue = React.useCallback(function (index) {
        onChangeRef.current && onChangeRef.current(value.filter(function (d, i) { return i !== index; }));
        setSearch('');
    }, [value]);
    // Prop Getters
    var ArrowUp = function () { return function (_, e) {
        e.preventDefault();
        !disabled && setOpen(true);
        highlightIndex(function (old) { return old - 1; }, true);
    }; };
    var ArrowDown = function () { return function (_, e) {
        e.preventDefault();
        !disabled && setOpen(true);
        highlightIndex(function (old) { return old + 1; }, true);
    }; };
    var Enter = function () { return function (_, e) {
        if (isOpen) {
            if (searchValue || filteredOptions[highlightedIndex]) {
                e.preventDefault();
            }
            if (filteredOptions[highlightedIndex]) {
                selectIndex(highlightedIndex);
            }
        }
    }; };
    var Escape = function () {
        setOpen(false);
    };
    var Tab = function () {
        setOpen(false);
    };
    var Backspace = function () {
        if (!multiple || searchValue) {
            return;
        }
        removeValue(value.length - 1);
    };
    var getKeyProps = useKeys({
        ArrowUp: ArrowUp(),
        ArrowDown: ArrowDown(),
        PageUp: ArrowUp(),
        PageDown: ArrowDown(),
        Home: ArrowUp(),
        End: ArrowDown(),
        Enter: Enter(),
        Escape: Escape,
        Tab: Tab,
        Backspace: Backspace
    });
    var getToggleProps = function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var _c = _a.refKey, refKey = _c === void 0 ? 'ref' : _c, ref = _a.ref, onChange = _a.onChange, onFocus = _a.onFocus, onClick = _a.onClick, onBlur = _a.onBlur, rest = __rest(_a, ["refKey", "ref", "onChange", "onFocus", "onClick", "onBlur"]);
        var sourceRef = ref;
        return getKeyProps(__assign((_b = {}, _b[refKey] = function (el) {
            inputRef.current = el;
            if (sourceRef) {
                sourceRef.current = el;
            }
        }, _b.onChange = function (e) {
            handleValueFieldChange(e);
            if (typeof onChange === 'function') {
                onChange(e);
            }
        }, _b.onFocus = function (e) {
            handleValueFieldFocus();
            if (typeof onFocus === 'function') {
                onFocus(e);
            }
        }, _b.onClick = function (e) {
            handleValueFieldClick();
            if (typeof onClick === 'function') {
                onClick(e);
            }
        }, _b.onBlur = function (e) {
            if (typeof onBlur === 'function' && onBlurRef.current) {
                e.persist();
                onBlurRef.current = { cb: onBlur, event: e };
            }
        }, _b), rest));
    };
    var getOptionProps = function (_a) {
        var index = _a.index, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, rest = __rest(_a, ["index", "onClick", "onMouseEnter"]);
        return __assign(__assign({}, rest), { onClick: function (e) {
                selectIndex(index);
                if (typeof onClick === 'function') {
                    onClick(e);
                }
            }, onMouseEnter: function (e) {
                highlightIndex(index, false);
                if (typeof onMouseEnter === 'function') {
                    onMouseEnter(e);
                }
            } });
    };
    // Effects
    // When the user clicks outside of the options box
    // while open, we need to close the dropdown
    useClickOutside({
        isActive: isOpen,
        ignoreClicksInsideRefs: [optionsRef, controlRef],
        handler: function () {
            setOpen(false);
        }
    });
    React.useEffect(function () {
        if (disabled) {
            setOpen(false);
        }
    }, [disabled]);
    // When searching, activate the first option
    React.useEffect(function () {
        var currentHighlightIndex = getSelectedOptionIndex();
        highlightIndex(currentHighlightIndex, true);
    }, [highlightIndex]);
    // When we open and close the options, set the highlightedIndex to 0
    React.useEffect(function () {
        var currentHighlightIndex = getSelectedOptionIndex();
        highlightIndex(currentHighlightIndex, true);
        if (!isOpen && onBlurRef.current && onBlurRef.current.event) {
            onBlurRef.current.cb(onBlurRef.current.event);
            onBlurRef.current.event = null;
        }
    }, [isOpen, highlightIndex]);
    // When the highlightedIndex changes, scroll to that item
    React.useEffect(function () {
        if (filteredOptions.length > 0 && scrollToHighlighted) {
            scrollToIndexRef.current && scrollToIndexRef.current(highlightedIndex);
        }
    }, [highlightedIndex]);
    React.useEffect(function () {
        if (isOpen && inputRef.current) {
            inputRef.current && inputRef.current.focus();
            var currentHighlightIndex = getSelectedOptionIndex();
            scrollToIndexRef.current && scrollToIndexRef.current(currentHighlightIndex);
        }
    }, [isOpen, inputRef.current]);
    return {
        // State
        isOpen: isOpen,
        highlightedIndex: highlightedIndex,
        visibleOptions: filteredOptions,
        value: value,
        // Actions
        selectIndex: selectIndex,
        setOpen: setOpen,
        highlightIndex: highlightIndex,
        // Prop Getters
        getToggleProps: getToggleProps,
        getOptionProps: getOptionProps
    };
}
