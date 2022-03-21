import React, { forwardRef, useEffect, useRef, useState } from 'react';
import addMonths from 'date-fns/addMonths';
import startOfMonth from 'date-fns/startOfMonth';

import { useClickOutside } from '../../../hooks/useClickOutside/useClickOutside';
import { useFlag } from '../../../hooks/useFlag/useFlag';
import { setRef } from '../../../utils/setRef';
import { DatePickerDropdown } from '../DatePickerDropdown/DatePickerDropdown';
import { DatePickerFieldTypeCalendar } from '../DatePickerFieldTypeCalendar/DatePickerFieldTypeCalendar';
import {
  datePickerPropFormatTypeCalendar,
  DatePickerTypeComponent,
  getMultiplicityTime,
} from '../helpers';
import { useCurrentVisibleDate } from '../useCurrentVisibleDate';

export const DatePickerTypeCalendar: DatePickerTypeComponent<'date-time'> = forwardRef(
  (props, ref) => {
    const {
      events,
      calendarView,
      locale,
      dropdownForm,
      onFocus,
      currentVisibleDate: currentVisibleDateProp,
      onChangeCurrentVisibleDate: onChangeCurrentVisibleDateProp,
      multiplicityHours: multiplicityHoursProp,
      multiplicityMinutes: multiplicityMinutesProp,
      multiplicitySeconds: multiplicitySecondsProp,
      renderAdditionalControls,
      ...otherProps
    } = props;

    const [multiplicityHours, multiplicityMinutes, multiplicitySeconds] = getMultiplicityTime(
      otherProps.formatMask || datePickerPropFormatTypeCalendar,
      multiplicityHoursProp,
      multiplicityMinutesProp,
      multiplicitySecondsProp,
    );

    const fieldRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);

    const [calendarVisible, setCalendarVisible] = useFlag(false);

    const [currentVisibleDate, setCurrentVisibleDate] = useCurrentVisibleDate(
      currentVisibleDateProp,
      onChangeCurrentVisibleDateProp,
    );

    const [calendarVisibleDate, setCalendarVisibleDate] = useState<Date | undefined>();

    const onFocusHandler = (e: React.FocusEvent<HTMLElement>) => {
      onFocus && onFocus(e);
      setCalendarVisible.on();
    };

    useEffect(() => {
      if (ref) {
        setRef(ref, fieldRef.current);
      }
    }, [ref, fieldRef]);

    useEffect(() => {
      if (props.value && props.calendarView === 'classic' && calendarVisibleDate) {
        const newVisibleDate = startOfMonth(props.value);
        if (newVisibleDate.getTime() !== calendarVisibleDate.getTime()) {
          setCurrentVisibleDate(newVisibleDate);
        }
        return;
      }
      if (props.value && props.calendarView !== 'classic' && calendarVisibleDate) {
        const newVisibleDate = startOfMonth(props.value);
        if (
          newVisibleDate.getTime() !== calendarVisibleDate.getTime() &&
          newVisibleDate.getTime() !== addMonths(calendarVisibleDate, 1).getTime()
        ) {
          setCurrentVisibleDate(newVisibleDate);
        }
      }
    }, [props.value]);

    const handleClose = () => {
      setCalendarVisible.off();
      setCurrentVisibleDate(undefined);
    };

    useClickOutside({
      isActive: calendarVisible,
      ignoreClicksInsideRefs: [fieldRef, calendarRef],
      handler: handleClose,
    });

    return (
      <>
        <DatePickerFieldTypeCalendar
          {...otherProps}
          ref={fieldRef}
          onFocus={onFocusHandler}
          multiplicityHours={multiplicityHours}
          multiplicitySeconds={multiplicitySeconds}
          multiplicityMinutes={multiplicityMinutes}
        />
        <DatePickerDropdown
          ref={calendarRef}
          anchorRef={fieldRef}
          isOpen={calendarVisible}
          value={props.value || undefined}
          type="date-time"
          view={calendarView}
          events={events}
          locale={locale}
          minDate={props.minDate}
          maxDate={props.maxDate}
          currentVisibleDate={currentVisibleDate}
          form={dropdownForm}
          onChange={props.onChange}
          renderAdditionalControls={renderAdditionalControls}
          onChangeCurrentVisibleDate={setCalendarVisibleDate}
          multiplicityHours={multiplicityHours}
          multiplicitySeconds={multiplicitySeconds}
          multiplicityMinutes={multiplicityMinutes}
        />
      </>
    );
  },
);
