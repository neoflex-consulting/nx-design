import './CalendarMonthLabel.css';
import React from 'react';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
export declare type CalendarMonthLabelProps = PropsWithHTMLAttributes<{
    label: string;
    children?: never;
}, HTMLDivElement>;
export declare const cnCalendarMonthLabel: import("@bem-react/classname").ClassNameFormatter;
export declare const CalendarMonthLabel: React.FC<CalendarMonthLabelProps>;
