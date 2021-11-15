import './CalendarMonth.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { Typography } from '../../Typography/Typography';
import { CalendarDay, CalendarDayProps } from '../CalendarDay/CalendarDay';
import { CalendarCell, CalendarCellProps } from '../CalendarСell/CalendarСell';

type DayOfMonth = Omit<CalendarDayProps & CalendarCellProps, 'ref'>;

export type CalendarMonthProps = PropsWithJsxAttributes<
  {
    children?: never;
    daysOfWeek: string[];
    daysOfMonth: DayOfMonth[];
  },
  'div'
>;

export const cnCalendarMonth = cn('CalendarMonth');

export const CalendarMonth: React.FC<CalendarMonthProps> = (props) => {
  const { className, daysOfWeek, daysOfMonth, ...otherProps } = props;

  return (
    <div {...otherProps} className={cnCalendarMonth(null, [className])}>
      {daysOfWeek.map((item, index) => (
        <CalendarCell key={cnCalendarMonth('DayOfWeek', { index, item })}>
          <Typography as="span" view="ghost" size="xs" transform="uppercase">
            {item}
          </Typography>
        </CalendarCell>
      ))}
      {daysOfMonth.map(({ range, ...dayProps }, index) => (
        <CalendarCell
          key={cnCalendarMonth('DayOfMonth', { index, number: dayProps.number })}
          range={range}
        >
          <CalendarDay {...dayProps} />
        </CalendarCell>
      ))}
    </div>
  );
};
