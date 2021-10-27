import { __read } from "tslib";
import './SnackBar-Timer.css';
import React, { useEffect, useState } from 'react';
import { useTimer } from '../../../hooks/useTimer/useTimer';
import { Timer } from '../../Timer/Timer';
import { cnSnackBar } from '../SnackBar';
var interval = 1000;
export var SnackBarTimer = function (props) {
    var _a = __read(useState(false), 2), running = _a[0], setRunning = _a[1];
    var onMount = props.onMount, onTimeIsOver = props.onTimeIsOver, startTimeprop = props.startTime;
    var startTime = startTimeprop * interval;
    var _b = useTimer({
        endTime: 0,
        startTime: startTime,
        timerType: 'DECREMENTAL',
        onTimeOver: onTimeIsOver
    }), time = _b.time, start = _b.start, pause = _b.pause, isRunning = _b.isRunning;
    useEffect(function () {
        onMount({ start: start, pause: pause });
        start();
    }, []);
    useEffect(function () {
        setRunning(isRunning);
    }, [isRunning]);
    var progress = running ? ((time - interval) / startTime) * 100 : (time / startTime) * 100;
    var seconds = time ? time / interval : 0;
    return (React.createElement(Timer, { className: cnSnackBar('Timer'), seconds: seconds, progress: progress, size: "m", animation: true }));
};
