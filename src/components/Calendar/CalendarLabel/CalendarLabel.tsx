import './CalendarLabel.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
import { Typography } from '../../Typography/Typography';

export type CalendarLabelProps = PropsWithHTMLAttributes<
  {
    label: string | number;
    align?: 'left' | 'center' | 'right';
    children?: never;
    cursor?: 'pointer';
  },
  HTMLDivElement
>;

export const cnCalendarLabel = cn('CalendarLabel');

export const CalendarLabel: React.FC<CalendarLabelProps> = (props) => {
  const { label, className, align, cursor, ...otherProps } = props;

  return (
    <Typography
      {...otherProps}
      className={cnCalendarLabel(null, [className])}
      as="span"
      size="s"
      align={align}
      weight="bold"
      cursor={cursor}
    >
      {label}
    </Typography>
  );
};
