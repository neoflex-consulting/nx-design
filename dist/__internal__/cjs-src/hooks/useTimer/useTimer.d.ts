export declare type Timer = 'DECREMENTAL' | 'INCREMENTAL';
export declare type Config = {
    /** interval in ms  */
    interval: number;
    /**  stop timer in ms */
    endTime: number | null;
    /**  start timer in ms */
    startTime: number;
    /** timer over callback */
    onTimeOver?: () => void;
    timerType: Timer;
};
export declare type Values = {
    isRunning: boolean;
    pause: () => void;
    reset: () => void;
    start: () => void;
    time: number;
};
export declare function useTimer(config?: Partial<Config>): Values;
