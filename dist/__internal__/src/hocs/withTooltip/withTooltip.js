import { __assign, __read, __rest, __values } from "tslib";
import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import { Tooltip } from '../../components/Tooltip/Tooltip';
import { useForkRef } from '../../hooks/useForkRef/useForkRef';
export var withTooltipPropMode = ['mouseover', 'click'];
export var withTooltipPropModeDefault = withTooltipPropMode[0];
export var appearTimeoutDefault = 400;
export var exitTimeoutDefault = 200;
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
            for (var closeFunctions_1 = __values(closeFunctions), closeFunctions_1_1 = closeFunctions_1.next(); !closeFunctions_1_1.done; closeFunctions_1_1 = closeFunctions_1.next()) {
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
export function withTooltip(hocProps) {
    return function (Component) {
        return React.forwardRef(function (props, ref) {
            var _a = props.tooltipProps, tooltipPropsFromComponent = _a === void 0 ? {} : _a, componentProps = __rest(props, ["tooltipProps"]);
            var tooltipProps = __assign(__assign({}, hocProps), tooltipPropsFromComponent);
            var _b = tooltipProps.mode, mode = _b === void 0 ? 'mouseover' : _b, content = tooltipProps.content, _c = tooltipProps.closeOnClickOutside, closeOnClickOutside = _c === void 0 ? true : _c, _d = tooltipProps.appearTimeout, appearTimeout = _d === void 0 ? appearTimeoutDefault : _d, _e = tooltipProps.exitTimeout, exitTimeout = _e === void 0 ? exitTimeoutDefault : _e, ontherTooltipProps = __rest(tooltipProps, ["mode", "content", "closeOnClickOutside", "appearTimeout", "exitTimeout"]);
            var _f = __read(useState(false), 2), visible = _f[0], setVisible = _f[1];
            var componentRef = useRef(null);
            var tooltipRef = useRef(null);
            var clearRef = useMemo(
            // привел к типам так как в дальнейшем к этой ссылке нужно привязать функцию
            function () {
                return createRef();
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
            useEffect(function () {
                clearRef.current = {};
                // очищаем ссылку в clearTooltips при размантировании компонента
                return function () { return clearTooltips(clearRef, true); };
            }, []);
            useEffect(function () {
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
            return (React.createElement(React.Fragment, null,
                React.createElement(Anchor, __assign({}, componentProps, { onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, ref: useForkRef([componentRef, ref]) })),
                visible && (React.createElement(Tooltip, __assign({}, ontherTooltipProps, { ref: tooltipRef, anchorRef: componentRef, onClickOutside: onClickOutside, onMouseEnter: tooltipOnMouseEnter, onMouseLeave: tooltipOnMouseLeave }), content))));
            // привел к типам, так как прокинутый компонент может иметь джененрики и они потеряются за хоком
        });
    };
}
