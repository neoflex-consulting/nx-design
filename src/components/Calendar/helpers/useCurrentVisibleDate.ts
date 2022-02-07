import { useEffect, useMemo, useState } from 'react';

import { DateRange } from '../../../utils/types/Date';

import { isDateInRange } from './isDateInRange';

type GetCurrentVisibleDateProps = {
  currentVisibleDate: Date | undefined;
  minDate: Date | undefined;
  maxDate: Date | undefined;
  value: Date | DateRange | undefined;
  startOfUnit: (date: Date) => Date;
  onChangeCurrentVisibleDate?: (date: Date) => void;
};

const getCurrentVisibleDate = ({
  currentVisibleDate,
  minDate,
  maxDate,
  value,
}: GetCurrentVisibleDateProps): Date => {
  if (currentVisibleDate) {
    return currentVisibleDate;
  }

  if (Array.isArray(value) && value[0]) {
    return value[0];
  }

  if (Array.isArray(value) && value[1]) {
    return value[1];
  }

  if (value && !Array.isArray(value)) {
    return value;
  }

  const currentDate = new Date();

  if (minDate && maxDate && !isDateInRange(currentDate, [minDate, maxDate])) {
    return minDate;
  }

  if (minDate && !maxDate) {
    const minCalendar = minDate.getTime();
    const currentCalendar = currentDate.getTime();
    if (currentCalendar < minCalendar) {
      return minDate;
    }
  }

  if (!minDate && maxDate) {
    const maxCalendar = maxDate.getTime();
    const currentCalendar = currentDate.getTime();
    if (currentCalendar > maxCalendar) {
      return maxDate;
    }
  }

  return currentDate;
};

export const useCurrentVisibleDate = (props: GetCurrentVisibleDateProps) => {
  const currentVisibleDate = useMemo(() => {
    return props.startOfUnit(getCurrentVisibleDate(props));
  }, [
    props.currentVisibleDate?.getTime() || 0,
    props.minDate?.getTime() || 0,
    props.maxDate?.getTime() || 0,
  ]);

  const state = useState(currentVisibleDate);

  useEffect(() => state[1](currentVisibleDate), [currentVisibleDate.getTime()]);

  useEffect(() => props.onChangeCurrentVisibleDate?.(state[0]), [state[0].getTime()]);

  return state;
};
