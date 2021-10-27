import { __assign, __read, __rest, __values } from "tslib";
import './ContextMenuLevel.css';
import React, { createRef, useEffect, useMemo, useState } from 'react';
import { cn } from '../../../utils/bem';
import { getGroups } from '../../../utils/getGroups';
import { Popover } from '../../Popover/Popover';
import { ContextMenuDivider } from '../ContextMenuDivider/ContextMenuDivider';
import { ContextMenuGroupHeader } from '../ContextMenuGroupHeader/ContextMenuGroupHeader';
import { ContextMenuItem } from '../ContextMenuItem/ContextMenuItem';
import { contextMenuDefaultSize } from '../helpers';
export var cnContextMenuLevel = cn('ContextMenuLevel');
function renderHeader(groupLabel, first, length, size) {
    if (!groupLabel) {
        if (first) {
            return null;
        }
        return React.createElement(ContextMenuDivider, { size: size });
    }
    return React.createElement(ContextMenuGroupHeader, { label: groupLabel, first: first, size: size });
}
var timers = [];
export function clearTimers() {
    var e_1, _a;
    try {
        for (var timers_1 = __values(timers), timers_1_1 = timers_1.next(); !timers_1_1.done; timers_1_1 = timers_1.next()) {
            var timer = timers_1_1.value;
            clearTimeout(timer);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (timers_1_1 && !timers_1_1.done && (_a = timers_1["return"])) _a.call(timers_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    timers = [];
}
var closeDelay = 300;
export var ContextMenuLevel = React.forwardRef(function (props, ref) {
    var 
    // props относящиеся к уровню меню
    _a = props.size, 
    // props относящиеся к уровню меню
    size = _a === void 0 ? contextMenuDefaultSize : _a, level = props.level, activeItem = props.activeItem, addLevel = props.addLevel, className = props.className, deleteLevel = props.deleteLevel, items = props.items, setHoveredParenLevel = props.setHoveredParenLevel, 
    // props относящиеся к пунктам меню
    getLabel = props.getLabel, getRightSideBar = props.getRightSideBar, getLeftSideBar = props.getLeftSideBar, getSubItems = props.getSubItems, getGroupId = props.getGroupId, getAccent = props.getAccent, getDisabled = props.getDisabled, getOnClick = props.getOnClick, 
    // props относящиеся к группам меню
    sortGroup = props.sortGroup, getGroupLabel = props.getGroupLabel, 
    // props относящиеся к поповеру
    direction = props.direction, possibleDirections = props.possibleDirections, offset = props.offset, onSetDirection = props.onSetDirection, hoveredParenLevel = props.hoveredParenLevel, spareDirection = props.spareDirection, anchorRef = props.anchorRef, otherProps = __rest(props, ["size", "level", "activeItem", "addLevel", "className", "deleteLevel", "items", "setHoveredParenLevel", "getLabel", "getRightSideBar", "getLeftSideBar", "getSubItems", "getGroupId", "getAccent", "getDisabled", "getOnClick", "sortGroup", "getGroupLabel", "direction", "possibleDirections", "offset", "onSetDirection", "hoveredParenLevel", "spareDirection", "anchorRef"]);
    var _b = __read(useState(false), 2), hovered = _b[0], setHovered = _b[1];
    var groups = getGroups(items, getGroupId, undefined, undefined, sortGroup && (function (a, b) { return sortGroup(a.key, b.key); }));
    var getItemIndex = function (groupId, itemIndex) { return groupId + "-" + itemIndex; };
    var constructItemRefs = function () {
        var e_2, _a;
        var refs = {};
        try {
            for (var groups_1 = __values(groups), groups_1_1 = groups_1.next(); !groups_1_1.done; groups_1_1 = groups_1.next()) {
                var group = groups_1_1.value;
                for (var i = 0; i < items.length; i++) {
                    refs[getItemIndex(group.key, i)] = createRef();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (groups_1_1 && !groups_1_1.done && (_a = groups_1["return"])) _a.call(groups_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return refs;
    };
    var itemsRefs = useMemo(constructItemRefs, [items]);
    useEffect(function () {
        if (level !== 0 && hovered === false && hoveredParenLevel < level) {
            clearTimeout(timers[level]);
            // привел к типам так как Jest почемуто думает что setTimeout вернет number
            timers[level] = setTimeout(function () { return deleteLevel(level); }, closeDelay);
        }
        return function () {
            clearTimeout(timers[level]);
        };
    }, [hovered, hoveredParenLevel]);
    return (React.createElement(Popover, __assign({}, otherProps, { anchorRef: anchorRef, className: cnContextMenuLevel({ firstLevel: level === 0, direction: direction }, [className]), possibleDirections: possibleDirections, spareDirection: spareDirection, direction: direction, offset: offset, onSetDirection: onSetDirection, onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); }, ref: ref }), groups.map(function (group, groupIndex) {
        var groupLabel = typeof getGroupLabel === 'function' ? getGroupLabel(group.key) : undefined;
        return (React.createElement("div", { className: cnContextMenuLevel('Group'), key: group.key },
            renderHeader(groupLabel, groupIndex === 0, groups.length, size),
            group.items.map(function (item, index) {
                var itemIndex = getItemIndex(group.key, index);
                var ref = itemsRefs[itemIndex];
                var disabled = typeof getDisabled === 'function' ? getDisabled(item) : false;
                var label = getLabel(item);
                var leftSide = typeof getLeftSideBar === 'function' ? getLeftSideBar(item) : undefined;
                var rightSide = typeof getRightSideBar === 'function' ? getRightSideBar(item) : undefined;
                var subItems = typeof getSubItems === 'function' ? getSubItems(item) : undefined;
                var onClick = !disabled && typeof getOnClick === 'function' ? getOnClick(item) : undefined;
                var onMouseEnter = subItems && !disabled
                    ? function () {
                        addLevel(level + 1, subItems, ref, itemIndex);
                        setHoveredParenLevel(level + 1);
                    }
                    : function () {
                        setHoveredParenLevel(level);
                    };
                var accent = typeof getAccent === 'function' ? getAccent(item) : undefined;
                return (React.createElement(ContextMenuItem, { ref: ref, label: label, leftSide: leftSide, rightSide: rightSide, size: size, key: itemIndex, onMouseEnter: onMouseEnter, onClick: onClick, active: activeItem === itemIndex, withSubMenu: Boolean(subItems), accent: accent, disabled: disabled }));
            })));
    })));
});
