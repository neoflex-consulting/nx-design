import './CalendarMonthToggler.css';
import React from 'react';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
export declare type CalendarMonthTogglerProps = PropsWithJsxAttributes<{
    prevOnClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    nextOnClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    label: string;
    children?: never;
}, 'div'>;
export declare const cnCalendarMonthToggler: import("@bem-react/classname").ClassNameFormatter;
export declare const CalendarMonthToggler: React.FC<CalendarMonthTogglerProps>;
