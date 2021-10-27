import React from 'react';
import { Locale } from 'date-fns';
import { range } from '../../utils/array';
import { DateRange } from '../../utils/types/Date';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
import { CalendarCellPropRange } from './CalendarСell/CalendarСell';
export declare const calendarPropView: readonly ["oneMonth", "twoMonths", "slider"];
export declare type CalendarPropView = typeof calendarPropView[number];
export declare const calendarPropViewDefault: CalendarPropView;
export declare const calendarPropType: readonly ["date", "date-range"];
export declare type CalendarPropType = typeof calendarPropType[number];
export declare const calendarPropTypeDefault: CalendarPropType;
export declare type CalendarPropValue<TYPE extends CalendarPropType> = TYPE extends 'date' ? Date : DateRange;
export declare type CalendarPropOnChange<TYPE extends CalendarPropType> = (props: {
    value: CalendarPropValue<TYPE>;
    e: React.MouseEvent<HTMLDivElement>;
}) => void;
export declare type CalendarProps<TYPE extends CalendarPropType> = PropsWithHTMLAttributesAndRef<{
    currentVisibleDate?: Date;
    type?: TYPE;
    value?: CalendarPropValue<TYPE>;
    onChange?: CalendarPropOnChange<TYPE>;
    minDate?: Date;
    maxDate?: Date;
    events?: Date[];
    view?: CalendarPropView;
    locale?: Locale;
}, HTMLDivElement>;
export declare type CalendarComponent = <TYPE extends CalendarPropType>(props: CalendarProps<TYPE>) => React.ReactElement | null;
export declare type CalendarViewComponent = <TYPE extends CalendarPropType>(props: Omit<CalendarProps<TYPE>, 'view'>) => React.ReactElement | null;
export declare const dateComparer: (a?: Date | undefined, b?: Date | undefined) => number;
export declare const getStartAndEndDate: (date1: Date, date2: Date) => Date[];
export declare const isDateSelected: ({ date, value }: {
    date: Date;
    value?: Date | undefined;
}) => boolean;
export declare const isValueSelected: ({ date, value, }: {
    date: Date;
    value?: Date | DateRange | undefined;
}) => boolean;
export declare const isValueSelectedBackwards: ({ value, hoveredDate, }: {
    value?: Date | DateRange | undefined;
    hoveredDate?: Date | undefined;
}) => boolean | undefined;
export declare const getDaysOfMonth: (props: {
    date: Date;
    locale: Locale;
    handleDayClick?: HandleSelectDate | undefined;
    value?: Date | DateRange | undefined;
    events?: Date[] | undefined;
    minDate?: Date | undefined;
    maxDate?: Date | undefined;
}) => {
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    number: string;
    selected?: boolean;
    range?: CalendarCellPropRange;
    event?: boolean;
    today?: boolean;
}[];
declare type GetHandleSelectDateProps<TYPE extends CalendarPropType> = {
    type: TYPE;
    value?: CalendarPropValue<TYPE>;
    onChange?: CalendarPropOnChange<TYPE>;
    minDate?: Date;
    maxDate?: Date;
};
declare type HandleSelectDate = (props: {
    value: Date;
    e: React.MouseEvent<HTMLDivElement>;
}) => void;
export declare function getHandleSelectDate<TYPE extends CalendarPropType>(params: GetHandleSelectDateProps<TYPE>): HandleSelectDate;
export declare const getMonthTitle: (date: Date, locale: Locale) => string;
export declare const getMouthLabelWithYear: (date: Date, locale: Locale) => string;
export declare const getDaysOfWeek: (locale: Locale) => string[];
declare type GetCurrentVisibleDateProps = {
    currentVisibleDate: Date | undefined;
    minDate: Date | undefined;
    maxDate: Date | undefined;
    value: Date | DateRange | undefined;
};
export declare const useCurrentVisibleDate: (props: GetCurrentVisibleDateProps) => [Date, React.Dispatch<React.SetStateAction<Date>>];
export {};
