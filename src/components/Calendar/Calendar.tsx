import React, { forwardRef } from 'react';

import { getSizeByMap } from '../../utils/getSizeByMap';

import { CalendarTypeDate } from './CalendarTypeDate/CalendarTypeDate';
import { CalendarTypeDateTime } from './CalendarTypeDateTime/CalendarTypeDateTime';
import { CalendarTypeMonth } from './CalendarTypeMonth/CalendarTypeMonth';
import { CalendarTypeTime } from './CalendarTypeTime/CalendarTypeTime';
import { CalendarTypeYear } from './CalendarTypeYear/CalendarTypeYear';
import {
  CalendarComponent,
  CalendarPropType,
  CalendarPropTypeDefault,
  CalendarTypeComponent,
} from './helpers/types';

const typeMap: Record<CalendarPropType, CalendarTypeComponent<CalendarPropType>> = {
  'date': CalendarTypeDate,
  'month': CalendarTypeMonth,
  'year': CalendarTypeYear,
  'time': CalendarTypeTime,
  'date-time': CalendarTypeDateTime,
} as const;

export const Calendar: CalendarComponent = forwardRef((props, ref) => {
  const { type = CalendarPropTypeDefault, ...otherProps } = props;

  const Component = getSizeByMap(typeMap, type);

  return <Component {...otherProps} ref={ref} />;
});

export * from './helpers/types';
