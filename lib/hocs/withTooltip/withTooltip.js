"use strict";
exports.__esModule = true;
exports.withTooltip = exports.exitTimeoutDefault = exports.appearTimeoutDefault = exports.withTooltipPropModeDefault = exports.withTooltipPropMode = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Tooltip_1 = require("../../components/Tooltip/Tooltip");
var useForkRef_1 = require("../../hooks/useForkRef/useForkRef");
exports.withTooltipPropMode = ['mouseover', 'click'];
exports.withTooltipPropModeDefault = exports.withTooltipPropMode[0];
exports.appearTimeoutDefault = 400;
exports.exitTimeoutDefault = 200;
var closeFunctions = [];
// фукция которая закроет все тултипы на странице кроме текущего с которым взаимодействует пользователь
function clearTooltips(currentRef, removeCurrent) {
    var e_1, _a;
    if (removeCurrent) {
        // удаляем только текущую функцию закрытия, нужна если компонент размантируется
        if (currentRef.current.timer) {
            clearTimeout(currentRef.current.timer);
        }
        var index = closeFunctions.findIndex(function (ref) { return ref === currentRef; });
        closeFunctions.splice(index, 1);
    }
    else {
        try {
            // закрываем все тултипы на странице кроме текущего с которым взаимодействует пользователь
            for (var closeFunctions_1 = tslib_1.__values(closeFunctions), closeFunctions_1_1 = closeFunctions_1.next(); !closeFunctions_1_1.done; closeFunctions_1_1 = closeFunctions_1.next()) {
                var ref = closeFunctions_1_1.value;
                if (currentRef !== ref) {
                    if (ref.current.timer) {
                        clearTimeout(ref.current.timer);
                    }
                    if (ref.current.closeFunction) {
                        ref.current.closeFunction();
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (closeFunctions_1_1 && !closeFunctions_1_1.done && (_a = closeFunctions_1["return"])) _a.call(closeFunctions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        closeFunctions.splice(0);
        closeFunctions.push(currentRef);
    }
}
function withTooltip(hocProps) {
    return function (Component) {
        return react_1["default"].forwardRef(function (props, ref) {
            var _a = props.tooltipProps, tooltipPropsFromComponent = _a === void 0 ? {} : _a, componentProps = tslib_1.__rest(props, ["tooltipProps"]);
            var tooltipProps = tslib_1.__assign(tslib_1.__assign({}, hocProps), tooltipPropsFromComponent);
            var _b = tooltipProps.mode, mode = _b === void 0 ? 'mouseover' : _b, content = tooltipProps.content, _c = tooltipProps.closeOnClickOutside, closeOnClickOutside = _c === void 0 ? true : _c, _d = tooltipProps.appearTimeout, appearTimeout = _d === void 0 ? exports.appearTimeoutDefault : _d, _e = tooltipProps.exitTimeout, exitTimeout = _e === void 0 ? exports.exitTimeoutDefault : _e, ontherTooltipProps = tslib_1.__rest(tooltipProps, ["mode", "content", "closeOnClickOutside", "appearTimeout", "exitTimeout"]);
            var _f = tslib_1.__read(react_1.useState(false), 2), visible = _f[0], setVisible = _f[1];
            var componentRef = react_1.useRef(null);
            var tooltipRef = react_1.useRef(null);
            var clearRef = react_1.useMemo(
            // привел к типам так как в дальнейшем к этой ссылке нужно привязать функцию
            function () {
                return react_1.createRef();
            }, []);
            var clearTimer = function () {
                if (clearRef.current.timer) {
                    clearTimeout(clearRef.current.timer);
                }
            };
            var setExitTimer = function () {
                if (mode === 'mouseover' && visible) {
                    // привел к типам, jest думает что setTimeout вернет number
                    clearRef.current.timer = setTimeout(function () { return setVisible(false); }, exitTimeout);
                }
            };
            var setAppearTimer = function () {
                if (mode === 'mouseover' && !visible) {
                    // привел к типам, jest думает что setTimeout вернет number
                    clearRef.current.timer = setTimeout(function () { return setVisible(true); }, appearTimeout);
                }
            };
            react_1.useEffect(function () {
                clearRef.current = {};
                // очищаем ссылку в clearTooltips при размантировании компонента
                return function () { return clearTooltips(clearRef, true); };
            }, []);
            react_1.useEffect(function () {
                if (visible) {
                    clearRef.current.closeFunction = function () { return setVisible(false); };
                    clearTooltips(clearRef);
                }
            }, [visible]);
            var onClick = function (e) {
                if (mode === 'click') {
                    setVisible(!visible);
                }
                if (props.onClick) {
                    props === null || props === void 0 ? void 0 : props.onClick(e);
                }
            };
            var onClickOutside = function () {
                if (mode === 'click' && closeOnClickOutside) {
                    setVisible(false);
                }
            };
            var onMouseEnter = function (e) {
                if (mode === 'mouseover') {
                    clearTimer();
                    setAppearTimer();
                }
                if (props.onMouseEnter) {
                    props.onMouseEnter(e);
                }
            };
            var onMouseLeave = function (e) {
                clearTimer();
                setExitTimer();
                if (props.onMouseLeave) {
                    props.onMouseLeave(e);
                }
            };
            var tooltipOnMouseEnter = function (e) {
                clearTimer();
                if (ontherTooltipProps.onMouseEnter) {
                    ontherTooltipProps.onMouseEnter(e);
                }
            };
            var tooltipOnMouseLeave = function (e) {
                clearTimer();
                setExitTimer();
                if (ontherTooltipProps.onMouseLeave) {
                    ontherTooltipProps.onMouseLeave(e);
                }
            };
            var Anchor = Component;
            return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(Anchor, tslib_1.__assign({}, componentProps, { onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, ref: useForkRef_1.useForkRef([componentRef, ref]) })),
                visible && (react_1["default"].createElement(Tooltip_1.Tooltip, tslib_1.__assign({}, ontherTooltipProps, { ref: tooltipRef, anchorRef: componentRef, onClickOutside: onClickOutside, onMouseEnter: tooltipOnMouseEnter, onMouseLeave: tooltipOnMouseLeave }), content))));
            // привел к типам, так как прокинутый компонент может иметь джененрики и они потеряются за хоком
        });
    };
}
exports.withTooltip = withTooltip;
