import { DateRange } from '../../../utils/types/Date';

type StartEndOfPeriod = (date: Date) => Date;

const inProcent = (number: number, msInPeriod: number) => (number / msInPeriod) * 100;

export const getSliderValueRange = (
  decadeDate: Date,
  value: Date | DateRange | undefined,
  startOfPeriod: StartEndOfPeriod,
  endOfPeriod: StartEndOfPeriod,
) => {
  if (!Array.isArray(value) || !value[0] || !value[1]) {
    return undefined;
  }

  const periodStartCalendar = startOfPeriod(decadeDate).getTime();
  const periodEndCalendar = endOfPeriod(decadeDate).getTime();
  const valueStartCalendar = value[0].getTime();
  const valueEndCalendar = value[1].getTime();

  if (valueStartCalendar > periodEndCalendar || valueEndCalendar < periodStartCalendar) {
    return undefined;
  }

  if (valueStartCalendar <= periodStartCalendar && valueEndCalendar >= periodEndCalendar) {
    return [0, 100];
  }

  const msInPeriod = periodEndCalendar - periodStartCalendar;

  const offset = Math.floor(
    inProcent(
      valueStartCalendar <= periodStartCalendar ? 0 : valueStartCalendar - periodStartCalendar,
      msInPeriod,
    ),
  );

  const width = Math.ceil(
    valueEndCalendar >= periodEndCalendar
      ? 100 - offset
      : inProcent(
          valueEndCalendar -
            (valueStartCalendar <= periodStartCalendar ? periodStartCalendar : valueStartCalendar),
          msInPeriod,
        ),
  );

  return [offset, width];
};
