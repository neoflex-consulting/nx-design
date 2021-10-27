import { __assign, __read, __rest, __spread, __values } from "tslib";
import React, { createRef, useEffect, useMemo, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside/useClickOutside';
import { directions } from '../Popover/Popover';
import { clearTimers, ContextMenuLevel } from './ContextMenuLevel/ContextMenuLevel';
import { contextMenuPropDefaultSubMenuDirection, contextMenuPropSubMenuDirections, } from './helpers';
export var ContextMenu = function (props) {
    var items = props.items, anchorRef = props.anchorRef, position = props.position, direction = props.direction, _a = props.possibleDirections, possibleDirections = _a === void 0 ? directions : _a, offset = props.offset, getKeyProp = props.getKey, getSubItems = props.getSubItems, _b = props.subMenuDirection, propSubMenuDirection = _b === void 0 ? contextMenuPropDefaultSubMenuDirection : _b, getLabel = props.getLabel, onClickOutside = props.onClickOutside, spareDirection = props.spareDirection, otherProps = __rest(props, ["items", "anchorRef", "position", "direction", "possibleDirections", "offset", "getKey", "getSubItems", "subMenuDirection", "getLabel", "onClickOutside", "spareDirection"]);
    var getKey = getKeyProp || getLabel;
    var defaultLevels = [
        {
            items: items,
            anchorRef: anchorRef,
            position: position,
            direction: direction,
            possibleDirections: possibleDirections,
            offset: offset
        },
    ];
    var _c = __read(useState(defaultLevels), 2), levels = _c[0], setLevels = _c[1];
    var _d = __read(useState(propSubMenuDirection), 2), subMenuDirection = _d[0], setSubMenuDirection = _d[1];
    var _e = __read(useState(-1), 2), hoveredParenLevel = _e[0], setHoveredParenLevel = _e[1];
    var addLevel = function (level, items, anchorRef, activeItem) {
        var newLevels = Array.from(levels);
        var oldDirection;
        if (newLevels[level] && newLevels.length - level > 1) {
            oldDirection = newLevels[level].direction;
            if (oldDirection) {
                setSubMenuDirection(oldDirection);
            }
        }
        newLevels[level - 1].activeItem = activeItem;
        newLevels.splice(level);
        newLevels.push({
            items: items,
            anchorRef: anchorRef,
            direction: oldDirection || subMenuDirection,
            possibleDirections: contextMenuPropSubMenuDirections
        });
        setLevels(newLevels);
    };
    var deleteLevel = function (level) {
        var newLevels = Array.from(levels);
        newLevels.splice(level);
        newLevels[level - 1] = __assign(__assign({}, newLevels[level - 1]), { activeItem: undefined });
        setLevels(newLevels);
    };
    var constructItemRefs = function () {
        var refs = [];
        for (var i = 0; i < levels.length; i++) {
            refs[i] = createRef();
        }
        return refs;
    };
    var levelsRefs = useMemo(constructItemRefs, [levels]);
    useClickOutside({
        isActive: !!onClickOutside,
        ignoreClicksInsideRefs: __spread(levelsRefs, [anchorRef || { current: null }]),
        handler: function (e) { return onClickOutside && onClickOutside(e); }
    });
    useEffect(function () {
        // из-за отложенного рендера закрытия подпунктов меню
        // может возникнуть ситуация когда таймер еще не успел отработать и вызвать рендер на закрытие меню,
        // и если в этот изменяется props.items в компоненте, то сразу после рендера который вызван сменой props.items
        // вызовется отложенный что приведет к неверному рендеру, который должен был вызваться до изменения props.items
        // По этому останавливаем отложенный перерендр закрытия, чтобы избежать ошибки
        clearTimers();
        // пересобираем levels при изменении пропсов
        function find(items, key) {
            var e_1, _a;
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    if (getKey(item) === key) {
                        return item;
                    }
                    var subItems = typeof getSubItems === 'function' && getSubItems(item);
                    if (subItems) {
                        var subItem = find(subItems, key);
                        if (subItem) {
                            return subItem;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1["return"])) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return undefined;
        }
        var newLevels = levels.map(function (level) {
            return __assign(__assign({}, level), { items: level.items.map(function (item) { return find(props.items, getKey(item)); }) });
        });
        // привел к типа м так как TS не понимает что по ключу всегда найдется нужный нам item
        setLevels(newLevels);
        return function () { return clearTimers(); };
    }, [props.items, getSubItems, getKey]);
    return (React.createElement(React.Fragment, null, levels.map(function (level, index) {
        var onSetDirection = index > 0 ? setSubMenuDirection : undefined;
        return (React.createElement(ContextMenuLevel, __assign({}, otherProps, { offset: level.offset, key: index, items: level.items, level: index, addLevel: addLevel, deleteLevel: deleteLevel, anchorRef: level.anchorRef, position: level.position, activeItem: level.activeItem, direction: level.direction, possibleDirections: level.possibleDirections, onSetDirection: onSetDirection, hoveredParenLevel: hoveredParenLevel, setHoveredParenLevel: setHoveredParenLevel, getSubItems: getSubItems, getLabel: getLabel, ref: levelsRefs[index], spareDirection: index === 0 ? spareDirection : 'rightStartUp' })));
    })));
};
