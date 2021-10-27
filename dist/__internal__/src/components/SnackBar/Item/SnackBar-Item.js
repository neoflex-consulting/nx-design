import { __read } from "tslib";
import '../../Theme/_color/Theme_color_gpnDark.css';
import './SnackBar-Item.css';
import React, { useEffect, useState } from 'react';
import { IconClose } from '../../../icons/IconClose/IconClose';
import { Button } from '../../Button/Button';
import { Text } from '../../Text/Text';
import { cnTheme } from '../../Theme/Theme';
import { SnackBarActionButton } from '../ActionButton/SnackBar-ActionButton';
import { cnSnackBar, cnSnackBarItem, snackBarItemStatusDefault } from '../SnackBar';
import { SnackBarTimer } from '../Timer/SnackBar-Timer';
var defaultInitialTimerTime = 3;
var getAutoCloseTime = function (autoClose) {
    if (autoClose) {
        if (typeof autoClose === 'number') {
            return autoClose;
        }
        return defaultInitialTimerTime;
    }
    return false;
};
export var SnackBarItem = function (props) {
    var item = props.item;
    var onClose = item.onClose, autoClose = item.autoClose, Icon = item.icon, message = item.message, actions = item.actions, _a = item.status, status = _a === void 0 ? snackBarItemStatusDefault : _a, onAutoCloseProp = item.onAutoClose;
    var _b = __read(useState(null), 2), timerFunctions = _b[0], setTimerFunctions = _b[1];
    var _c = __read(useState(false), 2), hover = _c[0], setHover = _c[1];
    var _d = __read(useState(false), 2), timeIsOver = _d[0], setTimeIsOver = _d[1];
    var handleMountTimer = function (timerFunctions) {
        return setTimerFunctions(timerFunctions);
    };
    var handleMouseEnter = function () { return setHover(true); };
    var handleMouseLeave = function () { return setHover(false); };
    var autoCloseTime = getAutoCloseTime(autoClose);
    var onAutoClose = function (item) {
        if (onAutoCloseProp) {
            onAutoCloseProp(item);
        }
        else {
            onClose && onClose(item);
        }
    };
    useEffect(function () {
        if (!timeIsOver) {
            if (hover) {
                timerFunctions && timerFunctions.pause();
            }
            else {
                timerFunctions && timerFunctions.start();
            }
        }
    }, [hover, timeIsOver, timerFunctions]);
    var handleTimeIsOver = function () {
        setTimeIsOver(true);
        onAutoClose(item);
    };
    var handleClose = onClose ? function () { return onClose(item); } : undefined;
    return (React.createElement("div", { className: cnSnackBarItem({ status: status }, [cnTheme({ color: 'gpnDark' })]), onMouseEnter: autoCloseTime ? handleMouseEnter : undefined, onMouseLeave: autoCloseTime ? handleMouseLeave : undefined },
        autoCloseTime && (React.createElement(SnackBarTimer, { onMount: handleMountTimer, onTimeIsOver: handleTimeIsOver, startTime: autoCloseTime })),
        !autoCloseTime && Icon && React.createElement(Icon, { className: cnSnackBar('Icon'), size: "m" }),
        React.createElement("div", { className: cnSnackBar('Content') },
            message && (React.createElement(Text, { className: cnSnackBar('Message'), lineHeight: "s" }, message)),
            actions && React.createElement(SnackBarActionButton, { actions: actions })),
        onClose && (React.createElement(Button, { className: cnSnackBar('CloseButton'), view: "clear", iconLeft: IconClose, form: "round", size: "xs", onClick: handleClose }))));
};
