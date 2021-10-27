import { __assign, __read, __rest, __spread } from "tslib";
import React, { useEffect } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside/useClickOutside';
import { useComponentSize } from '../../hooks/useComponentSize/useComponentSize';
import { useForkRef } from '../../hooks/useForkRef/useForkRef';
import { PortalWithTheme, usePortalContext } from '../PortalWithTheme/PortalWithTheme';
import { useTheme } from '../Theme/Theme';
import { getComputedPositionAndDirection } from './helpers';
import { usePopoverReposition } from './usePopoverReposition';
export { usePopoverReposition };
/**
 * Стороны упорядочены по приоритету:
 * Используется первая сторона, в которую смог вписаться поповер.
 */
export var directionsStartCenter = [
    'downCenter',
    'upCenter',
    'downRight',
    'downLeft',
    'upRight',
    'upLeft',
    'leftUp',
    'leftCenter',
    'leftDown',
    'rightUp',
    'rightCenter',
    'rightDown',
];
export var directionsStartEdge = [
    'downStartLeft',
    'upStartLeft',
    'downStartRight',
    'upStartRight',
    'leftStartUp',
    'leftStartDown',
    'rightStartUp',
    'rightStartDown',
];
export var directions = __spread(directionsStartCenter, directionsStartEdge);
var isRenderProp = function (children) { return typeof children === 'function'; };
/**
 * Подписчик на PortalWithThemeProvider
 * получает рефы всех вложенных порталов в модалку
 * для дальнейшего исключения их из useClickOutside
 */
var ContextConsumer = function (_a) {
    var onClickOutside = _a.onClickOutside, children = _a.children, ignoreClicksInsideRefs = _a.ignoreClicksInsideRefs;
    var refs = usePortalContext().refs;
    useClickOutside({
        isActive: !!onClickOutside,
        ignoreClicksInsideRefs: __spread((ignoreClicksInsideRefs || []), (refs || [])),
        handler: function (event) { return onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(event); }
    });
    return React.createElement(React.Fragment, null, children);
};
export var Popover = React.forwardRef(function (props, componentRef) {
    var children = props.children, _a = props.direction, passedDirection = _a === void 0 ? 'upCenter' : _a, _b = props.offset, offset = _b === void 0 ? 0 : _b, arrowOffset = props.arrowOffset, _c = props.possibleDirections, possibleDirections = _c === void 0 ? directions : _c, _d = props.isInteractive, isInteractive = _d === void 0 ? true : _d, onClickOutside = props.onClickOutside, _e = props.spareDirection, spareDirection = _e === void 0 ? 'downStartLeft' : _e, style = props.style, passedPosition = props.position, anchorRef = props.anchorRef, equalAnchorWidth = props.equalAnchorWidth, onSetDirection = props.onSetDirection, otherProps = __rest(props, ["children", "direction", "offset", "arrowOffset", "possibleDirections", "isInteractive", "onClickOutside", "spareDirection", "style", "position", "anchorRef", "equalAnchorWidth", "onSetDirection"]);
    var ref = React.useRef(null);
    var theme = useTheme().theme;
    var _f = __read(React.useState(), 2), anchorClientRect = _f[0], setAnchorClientRect = _f[1];
    var _g = useComponentSize(ref), width = _g.width, height = _g.height;
    var anchorSize = useComponentSize(anchorRef || { current: null });
    var previousDirectionRef = React.useRef(null);
    var previousDirection = previousDirectionRef.current;
    var _h = __read(React.useState([]), 2), bannedDirections = _h[0], setBannedDirections = _h[1];
    var resetBannedDirections = function () {
        setBannedDirections(function (state) { return (state.length ? [] : state); });
        previousDirectionRef.current = null;
    };
    var updateAnchorClientRect = function () { var _a; return setAnchorClientRect((_a = anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()); };
    React.useLayoutEffect(updateAnchorClientRect, [anchorSize]);
    usePopoverReposition({
        isActive: true,
        scrollAnchorRef: anchorRef || { current: null },
        onRequestReposition: function () {
            resetBannedDirections();
            updateAnchorClientRect();
        }
    });
    var _j = getComputedPositionAndDirection({
        contentSize: { width: width, height: height },
        viewportSize: {
            // Размер вьюпорта без скроллбаров
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        },
        offset: offset,
        arrowOffset: arrowOffset,
        direction: passedDirection,
        possibleDirections: possibleDirections,
        bannedDirections: bannedDirections,
        position: anchorClientRect
            ? { x: anchorClientRect.left, y: anchorClientRect.top }
            : passedPosition,
        anchorSize: anchorSize,
        spareDirection: spareDirection
    }), position = _j.position, direction = _j.direction;
    useEffect(function () { return onSetDirection && onSetDirection(direction); }, [direction]);
    /**
     * Может возникнуть ситуация, когда перерасчет поповера всегда будет выдавать 2 направления
     * и бесконечно зацикливать себя. Для избежания таких кейсов мы запоминаем стороны,
     * которые не подошли, чтобы не возвращаться к ним и предотвратить бесконечный ререндер.
     * См. PopoverBannedPositionsStory
     */
    if (previousDirection !== direction) {
        if (previousDirection && !bannedDirections.includes(previousDirection)) {
            setBannedDirections(__spread(bannedDirections, [previousDirection]));
        }
        previousDirectionRef.current = direction;
    }
    // Сбрасываем при любом изменении пропсов, чтобы заново начать перебор направлений
    // Главное не сбрасывать при изменении размеров поповера, т.к. именно оно может вызвать бесконечный перебор
    React.useLayoutEffect(resetBannedDirections, [props]);
    var content = isRenderProp(children) ? children(direction) : children;
    return (React.createElement(PortalWithTheme, __assign({}, otherProps, { preset: theme, container: window.document.body, ref: useForkRef([ref, componentRef]), style: __assign(__assign(__assign({}, style), (equalAnchorWidth && { width: anchorSize.width })), { pointerEvents: isInteractive ? undefined : 'none', position: 'absolute', top: ((position === null || position === void 0 ? void 0 : position.y) || 0) + window.scrollY, left: ((position === null || position === void 0 ? void 0 : position.x) || 0) + window.scrollX, visibility: position ? undefined : 'hidden' }) }),
        React.createElement(ContextConsumer, { onClickOutside: onClickOutside, ignoreClicksInsideRefs: [ref, anchorRef || { current: null }] }, content)));
});
