import { __read } from "tslib";
import './TabsMoreItems.css';
import React from 'react';
import FocusTrap from 'focus-trap-react';
import { useForkRef } from '../../../hooks/useForkRef/useForkRef';
import { IconMeatball } from '../../../icons/IconMeatball/IconMeatball';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Popover } from '../../Popover/Popover';
var cnTabsMoreItems = cn('TabsMoreItems');
export var TabsMoreItems = React.forwardRef(function (_a, ref) {
    var items = _a.items, renderItem = _a.renderItem, getLabel = _a.getLabel, getChecked = _a.getChecked, height = _a.height;
    var _b = __read(React.useState(false), 2), isMoreItemsVisible = _b[0], setIsMoreItemsVisible = _b[1];
    var buttonRef = React.useRef(null);
    React.useEffect(function () {
        if (items.length === 0) {
            setIsMoreItemsVisible(false);
        }
    }, [items]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: useForkRef([ref, buttonRef]), className: cnTabsMoreItems('Button'), style: { height: height } },
            React.createElement(Button, { size: "xs", view: "ghost", onlyIcon: true, iconLeft: IconMeatball, onClick: function () { return setIsMoreItemsVisible(function (state) { return !state; }); } })),
        isMoreItemsVisible && buttonRef.current && (React.createElement(Popover, { anchorRef: buttonRef, offset: -1, direction: "downStartRight", spareDirection: "downStartLeft", possibleDirections: [
                'downStartRight',
                'downStartLeft',
                'upStartRight',
                'upStartLeft',
                'downCenter',
                'upCenter',
            ] },
            React.createElement(FocusTrap, { focusTrapOptions: {
                    fallbackFocus: buttonRef.current,
                    clickOutsideDeactivates: function (e) {
                        var _a;
                        var isClickInsideButton = (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target);
                        return !isClickInsideButton;
                    },
                    allowOutsideClick: true,
                    onDeactivate: function () { return setIsMoreItemsVisible(false); }
                } },
                React.createElement("div", { className: cnTabsMoreItems('Popover') }, items.map(function (item) { return (React.createElement("div", { key: getLabel(item), className: cnTabsMoreItems('Item', { active: getChecked(item) }) }, renderItem(item, function () { return setIsMoreItemsVisible(false); }))); })))))));
});
