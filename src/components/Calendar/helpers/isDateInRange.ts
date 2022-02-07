import { DateRange } from '../../../utils/types/Date';

type IsDateInRangeResult = 'first' | 'last' | boolean;

export const isDateInRange = (
  date: Date,
  range: DateRange,
  startOf?: (date: Date) => Date,
): IsDateInRangeResult => {
  if (!range[0] || !range[1]) {
    return false;
  }

  const Calendar = date.getTime();
  const rangeTime = startOf
    ? [startOf(range[0]).getTime(), startOf(range[1]).getTime()]
    : [range[0].getTime(), range[1].getTime()];

  if (rangeTime[0] === rangeTime[1]) {
    return false;
  }

  if (Calendar === rangeTime[0]) {
    return 'first';
  }

  if (Calendar === rangeTime[1]) {
    return 'last';
  }

  if (Calendar > rangeTime[0] && Calendar < rangeTime[1]) {
    return true;
  }

  return false;
};
