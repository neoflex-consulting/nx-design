"use strict";
exports.__esModule = true;
exports.SnackBarItem = void 0;
var tslib_1 = require("tslib");
require("../../Theme/_color/Theme_color_gpnDark.css");
require("./SnackBar-Item.css");
var react_1 = tslib_1.__importStar(require("react"));
var IconClose_1 = require("../../../icons/IconClose/IconClose");
var index_1 = require("../../index");
var Text_1 = require("../../Text/Text");
var Theme_1 = require("../../Theme/Theme");
var SnackBar_ActionButton_1 = require("../ActionButton/SnackBar-ActionButton");
var SnackBar_1 = require("../SnackBar");
var SnackBar_Timer_1 = require("../Timer/SnackBar-Timer");
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
exports.SnackBarItem = function (props) {
    var item = props.item;
    var onClose = item.onClose, autoClose = item.autoClose, Icon = item.icon, message = item.message, actions = item.actions, _a = item.status, status = _a === void 0 ? SnackBar_1.snackBarItemStatusDefault : _a, onAutoCloseProp = item.onAutoClose;
    var _b = tslib_1.__read(react_1.useState(null), 2), timerFunctions = _b[0], setTimerFunctions = _b[1];
    var _c = tslib_1.__read(react_1.useState(false), 2), hover = _c[0], setHover = _c[1];
    var _d = tslib_1.__read(react_1.useState(false), 2), timeIsOver = _d[0], setTimeIsOver = _d[1];
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
    react_1.useEffect(function () {
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
    return (react_1["default"].createElement("div", { className: SnackBar_1.cnSnackBarItem({ status: status }, [Theme_1.cnTheme({ color: 'gpnDark' })]), onMouseEnter: autoCloseTime ? handleMouseEnter : undefined, onMouseLeave: autoCloseTime ? handleMouseLeave : undefined },
        autoCloseTime && (react_1["default"].createElement(SnackBar_Timer_1.SnackBarTimer, { onMount: handleMountTimer, onTimeIsOver: handleTimeIsOver, startTime: autoCloseTime })),
        !autoCloseTime && Icon && react_1["default"].createElement(Icon, { className: SnackBar_1.cnSnackBar('Icon'), size: "m" }),
        react_1["default"].createElement("div", { className: SnackBar_1.cnSnackBar('Content') },
            message && (react_1["default"].createElement(Text_1.Text, { className: SnackBar_1.cnSnackBar('Message'), lineHeight: "s" }, message)),
            actions && react_1["default"].createElement(SnackBar_ActionButton_1.SnackBarActionButton, { actions: actions })),
        onClose && (react_1["default"].createElement(index_1.Button, { className: SnackBar_1.cnSnackBar('CloseButton'), view: "clear", iconLeft: IconClose_1.IconClose, form: "round", size: "xs", onClick: handleClose }))));
};
