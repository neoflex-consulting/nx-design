import './SnackBar-Timer.css';
import React from 'react';
export declare type SnackBarTimerPropOnMount = (object: {
    pause: () => void;
    start: () => void;
}) => void;
export declare type SnackBarTimerProps = {
    onMount: SnackBarTimerPropOnMount;
    onTimeIsOver: () => void;
    startTime: number;
};
export declare const SnackBarTimer: React.FC<SnackBarTimerProps>;
