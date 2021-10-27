import './CalendarMonth.css';
import React from 'react';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { CalendarDayProps } from '../CalendarDay/CalendarDay';
import { CalendarCellProps } from '../CalendarСell/CalendarСell';
declare type DayOfMonth = Omit<CalendarDayProps & CalendarCellProps, 'ref'>;
export declare type CalendarMonthProps = PropsWithJsxAttributes<{
    children?: never;
    daysOfWeek: string[];
    daysOfMonth: DayOfMonth[];
}, 'div'>;
export declare const cnCalendarMonth: import("@bem-react/classname").ClassNameFormatter;
export declare const CalendarMonth: React.FC<CalendarMonthProps>;
export {};
