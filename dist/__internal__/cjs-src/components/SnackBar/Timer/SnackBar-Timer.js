"use strict";
exports.__esModule = true;
exports.SnackBarTimer = void 0;
var tslib_1 = require("tslib");
require("./SnackBar-Timer.css");
var react_1 = tslib_1.__importStar(require("react"));
var useTimer_1 = require("../../../hooks/useTimer/useTimer");
var Timer_1 = require("../../Timer/Timer");
var SnackBar_1 = require("../SnackBar");
var interval = 1000;
exports.SnackBarTimer = function (props) {
    var _a = tslib_1.__read(react_1.useState(false), 2), running = _a[0], setRunning = _a[1];
    var onMount = props.onMount, onTimeIsOver = props.onTimeIsOver, startTimeprop = props.startTime;
    var startTime = startTimeprop * interval;
    var _b = useTimer_1.useTimer({
        endTime: 0,
        startTime: startTime,
        timerType: 'DECREMENTAL',
        onTimeOver: onTimeIsOver
    }), time = _b.time, start = _b.start, pause = _b.pause, isRunning = _b.isRunning;
    react_1.useEffect(function () {
        onMount({ start: start, pause: pause });
        start();
    }, []);
    react_1.useEffect(function () {
        setRunning(isRunning);
    }, [isRunning]);
    var progress = running ? ((time - interval) / startTime) * 100 : (time / startTime) * 100;
    var seconds = time ? time / interval : 0;
    return (react_1["default"].createElement(Timer_1.Timer, { className: SnackBar_1.cnSnackBar('Timer'), seconds: seconds, progress: progress, size: "m", animation: true }));
};
