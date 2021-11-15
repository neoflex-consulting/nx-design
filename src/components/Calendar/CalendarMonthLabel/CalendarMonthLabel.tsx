import './CalendarMonthLabel.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
import { Typography } from '../../Typography/Typography';

export type CalendarMonthLabelProps = PropsWithHTMLAttributes<
  {
    label: string;
    children?: never;
  },
  HTMLDivElement
>;

export const cnCalendarMonthLabel = cn('CalendarMonthLabel');

export const CalendarMonthLabel: React.FC<CalendarMonthLabelProps> = (props) => {
  const { label, className, ...otherProps } = props;

  return (
    <Typography
      {...otherProps}
      className={cnCalendarMonthLabel(null, [className])}
      as="span"
      size="s"
      align="center"
      weight="bold"
    >
      {label}
    </Typography>
  );
};
