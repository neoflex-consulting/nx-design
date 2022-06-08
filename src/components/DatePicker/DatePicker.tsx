import React, { forwardRef } from 'react';

import { maxDateDefault, minDateDefault } from '../../utils/date';
import { getSizeByMap } from '../../utils/getSizeByMap';

import { DatePickerTypeDate } from './DatePickerTypeDate/DatePickerTypeDate';
import { DatePickerTypeDateRange } from './DatePickerTypeDateRange/DatePickerTypeDateRange';
import { DatePickerTypeCalendar } from './DatePickerTypeCalendar/DatePickerTypeCalendar';
import { DatePickerTypeBook } from './DatePickerTypeBook/DatePickerTypeBook';
import {
  DatePickerComponent,
  DatePickerPropType,
  datePickerPropTypeDefault,
  DatePickerTypeComponent
} from './helpers';

const typeMap: Record<DatePickerPropType, DatePickerTypeComponent<DatePickerPropType>> = {
  'date': DatePickerTypeDate,
  'date-range': DatePickerTypeDateRange,
  'date-time': DatePickerTypeCalendar,
  'date-book': DatePickerTypeBook
};

export const DatePicker: DatePickerComponent = forwardRef((props, ref) => {
  const {
    type = datePickerPropTypeDefault,
    minDate = minDateDefault,
    maxDate = maxDateDefault,
    multiplicityMinutes,
    multiplicitySeconds,
    multiplicityHours,
    ...otherProps
  } = props;

  const timeProps =
    type === 'date-time'
      ? {
          multiplicityMinutes,
          multiplicitySeconds,
          multiplicityHours,
        }
      : undefined;

  const Component = getSizeByMap(typeMap, type);

  return <Component {...otherProps} {...timeProps} minDate={minDate} maxDate={maxDate} ref={ref} />;
});

export * from './helpers';
