import './CalendarMonth.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { CalendarCellPropRange } from '../CalendarCell/CalendarCell';
import { CalendarGrid } from '../CalendarGrid/CalendarGrid';
import { CalendarItemProps } from '../CalendarItem/CalendarItem';

export type CalendarMonthProps = PropsWithJsxAttributes<
  {
    children?: never;
    daysOfWeek: string[];
    daysOfMonth: Omit<
      CalendarItemProps & {
        range?: CalendarCellPropRange;
      },
      'ref'
    >[];
  },
  'div'
>;

export const cnCalendarMonth = cn('CalendarMonth');

export const CalendarMonth: React.FC<CalendarMonthProps> = (props) => {
  const { className, daysOfWeek, daysOfMonth, ...otherProps } = props;

  return (
    <CalendarGrid
      {...otherProps}
      className={cnCalendarMonth(null, [className])}
      items={[...daysOfWeek, ...daysOfMonth]}
    />
  );
};
