"use strict";
exports.__esModule = true;
exports.Popover = exports.directions = exports.directionsStartEdge = exports.directionsStartCenter = exports.usePopoverReposition = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var useClickOutside_1 = require("../../hooks/useClickOutside/useClickOutside");
var useComponentSize_1 = require("../../hooks/useComponentSize/useComponentSize");
var useForkRef_1 = require("../../hooks/useForkRef/useForkRef");
var PortalWithTheme_1 = require("../PortalWithTheme/PortalWithTheme");
var Theme_1 = require("../Theme/Theme");
var helpers_1 = require("./helpers");
var usePopoverReposition_1 = require("./usePopoverReposition");
exports.usePopoverReposition = usePopoverReposition_1.usePopoverReposition;
/**
 * Стороны упорядочены по приоритету:
 * Используется первая сторона, в которую смог вписаться поповер.
 */
exports.directionsStartCenter = [
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
exports.directionsStartEdge = [
    'downStartLeft',
    'upStartLeft',
    'downStartRight',
    'upStartRight',
    'leftStartUp',
    'leftStartDown',
    'rightStartUp',
    'rightStartDown',
];
exports.directions = tslib_1.__spread(exports.directionsStartCenter, exports.directionsStartEdge);
var isRenderProp = function (children) { return typeof children === 'function'; };
/**
 * Подписчик на PortalWithThemeProvider
 * получает рефы всех вложенных порталов в модалку
 * для дальнейшего исключения их из useClickOutside
 */
var ContextConsumer = function (_a) {
    var onClickOutside = _a.onClickOutside, children = _a.children, ignoreClicksInsideRefs = _a.ignoreClicksInsideRefs;
    var refs = PortalWithTheme_1.usePortalContext().refs;
    useClickOutside_1.useClickOutside({
        isActive: !!onClickOutside,
        ignoreClicksInsideRefs: tslib_1.__spread((ignoreClicksInsideRefs || []), (refs || [])),
        handler: function (event) { return onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(event); }
    });
    return react_1["default"].createElement(react_1["default"].Fragment, null, children);
};
exports.Popover = react_1["default"].forwardRef(function (props, componentRef) {
    var children = props.children, _a = props.direction, passedDirection = _a === void 0 ? 'upCenter' : _a, _b = props.offset, offset = _b === void 0 ? 0 : _b, arrowOffset = props.arrowOffset, _c = props.possibleDirections, possibleDirections = _c === void 0 ? exports.directions : _c, _d = props.isInteractive, isInteractive = _d === void 0 ? true : _d, onClickOutside = props.onClickOutside, _e = props.spareDirection, spareDirection = _e === void 0 ? 'downStartLeft' : _e, style = props.style, passedPosition = props.position, anchorRef = props.anchorRef, equalAnchorWidth = props.equalAnchorWidth, onSetDirection = props.onSetDirection, otherProps = tslib_1.__rest(props, ["children", "direction", "offset", "arrowOffset", "possibleDirections", "isInteractive", "onClickOutside", "spareDirection", "style", "position", "anchorRef", "equalAnchorWidth", "onSetDirection"]);
    var ref = react_1["default"].useRef(null);
    var theme = Theme_1.useTheme().theme;
    var _f = tslib_1.__read(react_1["default"].useState(), 2), anchorClientRect = _f[0], setAnchorClientRect = _f[1];
    var _g = useComponentSize_1.useComponentSize(ref), width = _g.width, height = _g.height;
    var anchorSize = useComponentSize_1.useComponentSize(anchorRef || { current: null });
    var previousDirectionRef = react_1["default"].useRef(null);
    var previousDirection = previousDirectionRef.current;
    var _h = tslib_1.__read(react_1["default"].useState([]), 2), bannedDirections = _h[0], setBannedDirections = _h[1];
    var resetBannedDirections = function () {
        setBannedDirections(function (state) { return (state.length ? [] : state); });
        previousDirectionRef.current = null;
    };
    var updateAnchorClientRect = function () { var _a; return setAnchorClientRect((_a = anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()); };
    react_1["default"].useLayoutEffect(updateAnchorClientRect, [anchorSize]);
    usePopoverReposition_1.usePopoverReposition({
        isActive: true,
        scrollAnchorRef: anchorRef || { current: null },
        onRequestReposition: function () {
            resetBannedDirections();
            updateAnchorClientRect();
        }
    });
    var _j = helpers_1.getComputedPositionAndDirection({
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
    react_1.useEffect(function () { return onSetDirection && onSetDirection(direction); }, [direction]);
    /**
     * Может возникнуть ситуация, когда перерасчет поповера всегда будет выдавать 2 направления
     * и бесконечно зацикливать себя. Для избежания таких кейсов мы запоминаем стороны,
     * которые не подошли, чтобы не возвращаться к ним и предотвратить бесконечный ререндер.
     * См. PopoverBannedPositionsStory
     */
    if (previousDirection !== direction) {
        if (previousDirection && !bannedDirections.includes(previousDirection)) {
            setBannedDirections(tslib_1.__spread(bannedDirections, [previousDirection]));
        }
        previousDirectionRef.current = direction;
    }
    // Сбрасываем при любом изменении пропсов, чтобы заново начать перебор направлений
    // Главное не сбрасывать при изменении размеров поповера, т.к. именно оно может вызвать бесконечный перебор
    react_1["default"].useLayoutEffect(resetBannedDirections, [props]);
    var content = isRenderProp(children) ? children(direction) : children;
    return (react_1["default"].createElement(PortalWithTheme_1.PortalWithTheme, tslib_1.__assign({}, otherProps, { preset: theme, container: window.document.body, ref: useForkRef_1.useForkRef([ref, componentRef]), style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, style), (equalAnchorWidth && { width: anchorSize.width })), { pointerEvents: isInteractive ? undefined : 'none', position: 'absolute', top: ((position === null || position === void 0 ? void 0 : position.y) || 0) + window.scrollY, left: ((position === null || position === void 0 ? void 0 : position.x) || 0) + window.scrollX, visibility: position ? undefined : 'hidden' }) }),
        react_1["default"].createElement(ContextConsumer, { onClickOutside: onClickOutside, ignoreClicksInsideRefs: [ref, anchorRef || { current: null }] }, content)));
});
