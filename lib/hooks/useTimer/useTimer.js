"use strict";
exports.__esModule = true;
exports.useTimer = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var initialConfig = {
    interval: 1000,
    endTime: null,
    startTime: 0,
    timerType: 'INCREMENTAL'
};
function getTimeIsOver(timerType, time, endTime) {
    return endTime !== null && (timerType === 'INCREMENTAL' ? time >= endTime : time <= endTime);
}
function useTimer(config) {
    var _a = tslib_1.__assign(tslib_1.__assign({}, initialConfig), config), endTime = _a.endTime, startTime = _a.startTime, interval = _a.interval, timerType = _a.timerType, onTimeOver = _a.onTimeOver;
    var intervalRef = react_1.useRef(null);
    var pausedTimeRef = react_1.useRef(null);
    var _b = tslib_1.__read(react_1.useState(false), 2), shouldResetTime = _b[0], setShouldResetTime = _b[1];
    var _c = tslib_1.__read(react_1.useState(startTime), 2), time = _c[0], setTime = _c[1];
    var _d = tslib_1.__read(react_1.useState(false), 2), isRunning = _d[0], setIsRunning = _d[1];
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
    react_1.useEffect(cancelInterval, []);
    react_1.useEffect(timerOver, [timerType, time, endTime]);
    return { isRunning: isRunning, pause: pause, reset: reset, start: start, time: time };
}
exports.useTimer = useTimer;
