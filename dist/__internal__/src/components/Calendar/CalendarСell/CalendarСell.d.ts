import './CalendarСell.css';
import React from 'react';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
export declare const calendarCellPropRange: readonly ["first", "last", true, false];
export declare type CalendarCellPropRange = typeof calendarCellPropRange[number];
export declare type CalendarCellProps = PropsWithJsxAttributes<{
    range?: CalendarCellPropRange;
}, 'div'>;
export declare const cnCalendarCell: import("@bem-react/classname").ClassNameFormatter;
export declare const CalendarCell: React.FC<CalendarCellProps>;
