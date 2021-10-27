import './CalendarSlider.css';
import React from 'react';
import { Locale } from 'date-fns';
import { DateRange } from '../../../utils/types/Date';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
export declare type CalendarSliderProps = PropsWithHTMLAttributes<{
    currentVisibleDate: Date;
    onChange: (date: Date) => void;
    children?: never;
    value?: Date | DateRange;
    locale?: Locale;
}, HTMLDivElement>;
export declare const cnCalendarSlider: import("@bem-react/classname").ClassNameFormatter;
export declare const CalendarSlider: React.FC<CalendarSliderProps>;
