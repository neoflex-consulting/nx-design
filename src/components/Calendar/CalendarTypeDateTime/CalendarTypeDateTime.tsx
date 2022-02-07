import './CalendarTypeDateTime.css';

import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { useForkRef } from '../../../hooks/useForkRef/useForkRef';
import { cn } from '../../../utils/bem';
import { CalendarAdditionalControls } from '../CalendarAdditionalControls/CalendarAdditionalControls';
import { CalendarTypeDate } from '../CalendarTypeDate/CalendarTypeDate';
import { CalendarTypeTime } from '../CalendarTypeTime/CalendarTypeTime';
import { CalendarTypeComponent, MoveType, moveTypes } from '../helpers';

import { useOnChange } from './useOnChange';

const cnCalendarTypeDateTime = cn('CalendarTypeDateTime');

type CssVars = {
  '--root-padding-left': string;
};

export const CalendarTypeDateTime: CalendarTypeComponent<'date-time'> = forwardRef((props, ref) => {
  const {
    className,
    onMove: onMoveProp,
    currentVisibleDate,
    value,
    onChange,
    minDate,
    maxDate,
    events,
    locale,
    onChangeCurrentVisibleDate,
    multiplicitySeconds,
    multiplicityMinutes,
    multiplicityHours,
    style,
    renderAdditionalControls,
    ...otherProps
  } = props;

  const [moveType, setMoveType] = useState<MoveType>(moveTypes[2]);
  const [cssVars, setCssVars] = useState<CssVars>({
    '--root-padding-left': '0px',
  });

  const [onDateChange, onTimeChange] = useOnChange(onChange, value);

  const rootRef = useRef<HTMLDivElement>(null);

  const onMove = (type: MoveType) => {
    setMoveType(type);
    onMoveProp?.(type);
  };

  const withTime = moveType === moveTypes[2];

  useEffect(() => {
    if (rootRef.current) {
      setCssVars({
        '--root-padding-left': window.getComputedStyle(rootRef.current).paddingLeft || '0px',
      });
    }
  }, []);

  return (
    <>
      <div
        {...otherProps}
        className={cnCalendarTypeDateTime({ withTime }, [className])}
        ref={useForkRef([rootRef, ref])}
        style={{
          ...style,
          ...cssVars,
        }}
      >
        <CalendarTypeDate
          className={cnCalendarTypeDateTime('Date', { withTime })}
          onMove={onMove}
          currentVisibleDate={currentVisibleDate}
          value={value}
          onChange={onDateChange}
          minDate={minDate}
          maxDate={maxDate}
          events={events}
          locale={locale}
          renderAdditionalControls={withTime ? undefined : renderAdditionalControls}
          onChangeCurrentVisibleDate={onChangeCurrentVisibleDate}
        />
        {withTime && (
          <CalendarTypeTime
            className={cnCalendarTypeDateTime('Time')}
            value={value}
            onChange={onTimeChange}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
            multiplicitySeconds={multiplicitySeconds}
            multiplicityMinutes={multiplicityMinutes}
            multiplicityHours={multiplicityHours}
          />
        )}
      </div>
      <CalendarAdditionalControls
        currentVisibleDate={currentVisibleDate}
        renderAdditionalControls={withTime ? renderAdditionalControls : undefined}
      />
    </>
  );
});
