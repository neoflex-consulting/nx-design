import { DateRange } from './types/Date';
export declare const getMonthTitle: (date: Date) => string;
export declare const isDateRange: (value?: Date | DateRange) => value is DateRange;
export declare const isOnlyOneDateInRange: (range: DateRange) => boolean;
