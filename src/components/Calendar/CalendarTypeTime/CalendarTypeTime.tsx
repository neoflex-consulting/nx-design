import './CalendarTypeTime.css';

import React, { forwardRef, useEffect, useMemo } from 'react';

import { cn } from '../../../utils/bem';
import { CalendarAdditionalControls } from '../CalendarAdditionalControls/CalendarAdditionalControls';
import { CalendarLabel } from '../CalendarLabel/CalendarLabel';
import { CalendarTimeColumn } from '../CalendarTimeColumn/CalendarTimeColumn';
import { CalendarTypeComponent, getTimeTitle, moveTypes } from '../helpers';

import { CalendarTimePropLocaleDefault, useTimeItems } from './helpers';

const cnCalendarTypeTime = cn('CalendarTypeTime');

export const CalendarTypeTime: CalendarTypeComponent<'time'> = forwardRef((props, ref) => {
  const {
    locale: localeProp,
    value,
    className,
    onChange,
    maxDate,
    minDate,
    multiplicityHours = 1,
    multiplicityMinutes = 1,
    multiplicitySeconds = 1,
    onMove,
    renderAdditionalControls,
    ...otherProps
  } = props;

  useEffect(() => {
    onMove?.(moveTypes[3]);
  }, []);

  const locale = useMemo(() => ({ ...CalendarTimePropLocaleDefault, ...localeProp?.words }), [
    localeProp?.words?.hours,
    localeProp?.words?.minutes,
    localeProp?.words?.seconds,
  ]);

  const time = useTimeItems(
    value,
    multiplicityHours,
    multiplicityMinutes,
    multiplicitySeconds,
    onChange,
    minDate,
    maxDate,
  );

  const [hours, minutes, seconds] = time;

  const label = getTimeTitle(value, multiplicityHours, multiplicityMinutes, multiplicitySeconds);
  const labelLenght = time.filter((item) => item.length).length;

  return (
    <div {...otherProps} className={cnCalendarTypeTime(null, [className])} ref={ref}>
      <CalendarLabel
        align="center"
        className={cnCalendarTypeTime('Label')}
        style={{ ['--label-length' as string]: labelLenght }}
        label={label}
      />
      <div {...otherProps} className={cnCalendarTypeTime('Grid')}>
        <CalendarTimeColumn label={locale.hours} items={hours} />
        <CalendarTimeColumn label={locale.minutes} items={minutes} />
        <CalendarTimeColumn label={locale.seconds} items={seconds} />
      </div>
      <CalendarAdditionalControls renderAdditionalControls={renderAdditionalControls} />
    </div>
  );
});
