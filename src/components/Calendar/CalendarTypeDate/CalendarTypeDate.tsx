import React, { forwardRef, useEffect } from 'react';
import { addMonths, startOfMonth } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { useFlag } from '../../../hooks/useFlag/useFlag';
import { CalendarAdditionalControls } from '../CalendarAdditionalControls/CalendarAdditionalControls';
import { CalendarLabel } from '../CalendarLabel/CalendarLabel';
import { CalendarMonth } from '../CalendarMonth/CalendarMonth';
import { CalendarToggler } from '../CalendarToggler/CalendarToggler';
import { CalendarTypeMonth } from '../CalendarTypeMonth/CalendarTypeMonth';
import { CalendarYearSlider } from '../CalendarYearSlider/CalendarYearSlider';
import {
  CalendarTypeComponent,
  getDaysOfMonth,
  getDaysOfWeek,
  getHandleSelectDate,
  getMouthLabelWithYear,
  isEqualDay,
  moveTypes,
  useCurrentVisibleDate,
} from '../helpers';
import { CalendarPropView, CalendarPropViewDefault } from '../helpers/types';
import { cnCalendarMixLayout } from '../mixs';

export const CalendarTypeDate: CalendarTypeComponent<'date'> = forwardRef((props, ref) => {
  const {
    className,
    minDate,
    maxDate,
    value,
    onChange,
    onChangeRange,
    currentVisibleDate: currentVisibleDateProp,
    events,
    locale = ruLocale,
    view = CalendarPropViewDefault,
    onMove,
    onChangeCurrentVisibleDate,
    renderAdditionalControls,
    ...otherProps
  } = props;

  const [changeMonth, { on, off }] = useFlag();

  useEffect(() => {
    !changeMonth && onMove?.(moveTypes[2]);
  }, [changeMonth]);

  const [currentVisibleDate, setCurrentVisibleDate] = useCurrentVisibleDate({
    currentVisibleDate: currentVisibleDateProp,
    maxDate,
    minDate,
    value,
    startOfUnit: startOfMonth,
    onChangeCurrentVisibleDate,
  });

  if (changeMonth) {
    console.log("58 - changeMonth")
    console.log(changeMonth)
    return (
      <CalendarTypeMonth
        {...otherProps}
        ref={ref}
        className={className}
        minDate={minDate}
        maxDate={maxDate}
        locale={locale}
        events={events}
        currentVisibleDate={currentVisibleDate}
        view={view}
        onChange={({ value }) => {
          setCurrentVisibleDate(value);
          off();
        }}
        onMove={onMove}
      />
    );
  }

  const handleSelectDate = getHandleSelectDate({
    minDate,
    maxDate,
    value,
    onChange,
    onChangeRange,
    isEqualUnit: isEqualDay,
  });

  const pageOneDaysOfMonth = getDaysOfMonth({
    date: currentVisibleDate,
    handleDayClick: handleSelectDate,
    value,
    events,
    minDate,
    maxDate,
    locale,
  });

  const pageOneLabel = getMouthLabelWithYear(currentVisibleDate, locale);

  const daysOfWeek = getDaysOfWeek(locale);

  const nextMonthHandle = () => setCurrentVisibleDate(addMonths(currentVisibleDate, 1));
  const prevMonthHandle = () => setCurrentVisibleDate(addMonths(currentVisibleDate, -1));

  if (view === CalendarPropView[0]) {
    console.log("108 - CalendarPropView[0]")
    console.log(CalendarPropView[0])
    return (
      <div {...otherProps} ref={ref} className={cnCalendarMixLayout({ view }, [className])}>
        <CalendarToggler
          className={cnCalendarMixLayout('Label')}
          prevOnClick={prevMonthHandle}
          nextOnClick={nextMonthHandle}
          label={pageOneLabel}
          onLabelClick={on}
        />
        <CalendarMonth daysOfWeek={daysOfWeek} daysOfMonth={pageOneDaysOfMonth} />
        <CalendarAdditionalControls
          currentVisibleDate={currentVisibleDate}
          renderAdditionalControls={renderAdditionalControls}
        />
      </div>
    );
  }

  const pageTwoCurrentVisibleDate = addMonths(currentVisibleDate, 1);

  const pageTwoDaysOfMonth = getDaysOfMonth({
    date: pageTwoCurrentVisibleDate,
    handleDayClick: handleSelectDate,
    value,
    events,
    minDate,
    maxDate,
    locale,
  });

  const pageTwoLabel = getMouthLabelWithYear(pageTwoCurrentVisibleDate, locale);

  if (view === CalendarPropView[1]) {
    console.log("143 - CalendarPropView[1]")
    console.log(CalendarPropView[1])
    return (
      <>
        <div {...otherProps} ref={ref} className={cnCalendarMixLayout({ view }, [className])}>
          <div className={cnCalendarMixLayout('Page')}>
            <CalendarToggler
              className={cnCalendarMixLayout('Label')}
              prevOnClick={prevMonthHandle}
              label={pageOneLabel}
              onLabelClick={on}
            />
            <CalendarMonth daysOfWeek={daysOfWeek} daysOfMonth={pageOneDaysOfMonth} />
          </div>
          <div className={cnCalendarMixLayout('Page')}>
            <CalendarToggler
              className={cnCalendarMixLayout('Label')}
              nextOnClick={nextMonthHandle}
              label={pageTwoLabel}
              onLabelClick={on}
            />
            <CalendarMonth daysOfWeek={daysOfWeek} daysOfMonth={pageTwoDaysOfMonth} />
          </div>
        </div>
        <CalendarAdditionalControls
          currentVisibleDate={currentVisibleDate}
          renderAdditionalControls={renderAdditionalControls}
        />
      </>
    );
  }

  console.log("175 - all")
  return (
    <div {...otherProps} ref={ref} className={cnCalendarMixLayout({ view }, [className])}>
      <CalendarYearSlider
        className={cnCalendarMixLayout('Slider')}
        currentVisibleDate={currentVisibleDate}
        onChange={setCurrentVisibleDate}
        value={value}
        locale={locale}
      />
      <div className={cnCalendarMixLayout('PageWrapper')}>
        <div className={cnCalendarMixLayout('Page')}>
          <CalendarLabel
            className={cnCalendarMixLayout('Label')}
            label={pageOneLabel}
            onClick={on}
            cursor="pointer"
          />
          <CalendarMonth daysOfWeek={daysOfWeek} daysOfMonth={pageOneDaysOfMonth} />
        </div>
        <div className={cnCalendarMixLayout('Page')}>
          <CalendarLabel
            className={cnCalendarMixLayout('Label')}
            label={pageTwoLabel}
            onClick={on}
            cursor="pointer"
          />
          <CalendarMonth daysOfWeek={daysOfWeek} daysOfMonth={pageTwoDaysOfMonth} />
        </div>
      </div>
      <CalendarAdditionalControls
        currentVisibleDate={currentVisibleDate}
        renderAdditionalControls={renderAdditionalControls}
      />
    </div>
  );
});
