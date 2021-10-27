import { __assign, __read } from "tslib";
import { useEffect, useRef, useState } from 'react';
var initialConfig = {
    interval: 1000,
    endTime: null,
    startTime: 0,
    timerType: 'INCREMENTAL'
};
function getTimeIsOver(timerType, time, endTime) {
    return endTime !== null && (timerType === 'INCREMENTAL' ? time >= endTime : time <= endTime);
}
export function useTimer(config) {
    var _a = __assign(__assign({}, initialConfig), config), endTime = _a.endTime, startTime = _a.startTime, interval = _a.interval, timerType = _a.timerType, onTimeOver = _a.onTimeOver;
    var intervalRef = useRef(null);
    var pausedTimeRef = useRef(null);
    var _b = __read(useState(false), 2), shouldResetTime = _b[0], setShouldResetTime = _b[1];
    var _c = __read(useState(startTime), 2), time = _c[0], setTime = _c[1];
    var _d = __read(useState(false), 2), isRunning = _d[0], setIsRunning = _d[1];
    var cancelInterval = function () {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
        }
    };
    var timerOver = function () {
        if (getTimeIsOver(timerType, time, endTime)) {
            setShouldResetTime(true);
            cancelInterval();
            if (typeof onTimeOver === 'function') {
                onTimeOver();
            }
        }
    };
    var pause = function () {
        pausedTimeRef.current = time;
        cancelInterval();
    };
    var resetTime = function () {
        setTime(startTime);
    };
    var reset = function () {
        pausedTimeRef.current = null;
        cancelInterval();
        resetTime();
    };
    var createInterval = function () {
        setIsRunning(true);
        intervalRef.current = window.setInterval(function () {
            setTime(function (previousTime) {
                var newTime = timerType === 'INCREMENTAL' ? previousTime + interval : previousTime - interval;
                return newTime;
            });
        }, interval);
    };
    var start = function () {
        if (intervalRef.current) {
            return;
        }
        if (shouldResetTime) {
            resetTime();
            setShouldResetTime(false);
        }
        createInterval();
    };
    useEffect(cancelInterval, []);
    useEffect(timerOver, [timerType, time, endTime]);
    return { isRunning: isRunning, pause: pause, reset: reset, start: start, time: time };
}
