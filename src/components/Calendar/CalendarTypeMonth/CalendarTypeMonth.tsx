import React, { forwardRef, useEffect } from 'react';
import { addYears, startOfYear } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { useFlag } from '../../../hooks/useFlag/useFlag';
import { Calendar10Years } from '../Calendar10Years/Calendar10Years';
import { Calendar10YearSlider } from '../Calendar10YearSlider/Calendar10YearSlider';
import { CalendarAdditionalControls } from '../CalendarAdditionalControls/CalendarAdditionalControls';
import { CalendarLabel } from '../CalendarLabel/CalendarLabel';
import { CalendarToggler } from '../CalendarToggler/CalendarToggler';
import { CalendarTypeYear } from '../CalendarTypeYear/CalendarTypeYear';
import { CalendarYear } from '../CalendarYear/CalendarYear';
import {
  CalendarTypeComponent,
  getHandleSelectDate,
  getMonthsOfYear,
  getYearTitle,
  isEqualMount,
  moveTypes,
  useCurrentVisibleDate,
} from '../helpers';
import { CalendarPropView, CalendarPropViewDefault } from '../helpers/types';
import { cnCalendarMixLayout } from '../mixs';

export const CalendarTypeMonth: CalendarTypeComponent<'month'> = forwardRef((props, ref) => {
  const {
    minDate,
    maxDate,
    value,
    onChange,
    onChangeRange,
    currentVisibleDate: currentVisibleDateProp,
    events,
    locale = ruLocale,
    className,
    view = CalendarPropViewDefault,
    onMove,
    onChangeCurrentVisibleDate,
    renderAdditionalControls,
    ...otherProps
  } = props;

  const [changeYear, { on, off }] = useFlag();

  useEffect(() => {
    !changeYear && onMove?.(moveTypes[1]);
  }, [changeYear]);

  const [currentVisibleDate, setCurrentVisibleDate] = useCurrentVisibleDate({
    currentVisibleDate: currentVisibleDateProp,
    maxDate,
    minDate,
    value,
    startOfUnit: startOfYear,
    onChangeCurrentVisibleDate,
  });

  if (changeYear) {
    return (
      <CalendarTypeYear
        {...otherProps}
        ref={ref}
        className={className}
        currentVisibleDate={currentVisibleDate}
        minDate={minDate}
        maxDate={maxDate}
        locale={locale}
        events={events}
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
    isEqualUnit: isEqualMount,
  });

  const pageOneMonthsOfYear = getMonthsOfYear({
    date: currentVisibleDate,
    onChange: handleSelectDate,
    value,
    events,
    minDate,
    maxDate,
    locale,
  });

  const pageOneLabel = getYearTitle(currentVisibleDate);

  const handleNext = () => setCurrentVisibleDate(addYears(currentVisibleDate, 1));
  const handlePrev = () => setCurrentVisibleDate(addYears(currentVisibleDate, -1));

  if (view === CalendarPropView[0]) {
    return (
      <div {...otherProps} className={cnCalendarMixLayout({ view }, [className])} ref={ref}>
        <CalendarToggler
          className={cnCalendarMixLayout('Label')}
          prevOnClick={handlePrev}
          nextOnClick={handleNext}
          label={pageOneLabel}
          onLabelClick={on}
        />
        <CalendarYear years={pageOneMonthsOfYear} />
        <CalendarAdditionalControls
          renderAdditionalControls={renderAdditionalControls}
          currentVisibleDate={currentVisibleDate}
        />
      </div>
    );
  }

  const pageTwoCurrentVisibleDate = addYears(currentVisibleDate, 1);

  const pageTwoLabel = getYearTitle(pageTwoCurrentVisibleDate);

  const pageTwoMonthsOfYear = getMonthsOfYear({
    date: pageTwoCurrentVisibleDate,
    onChange: handleSelectDate,
    value,
    events,
    minDate,
    maxDate,
    locale,
  });

  if (view === CalendarPropView[1]) {
    return (
      <>
        <div {...otherProps} className={cnCalendarMixLayout({ view }, [className])} ref={ref}>
          <div className={cnCalendarMixLayout('Page')}>
            <CalendarToggler
              className={cnCalendarMixLayout('Label')}
              prevOnClick={handlePrev}
              label={pageOneLabel}
              onLabelClick={on}
            />
            <Calendar10Years years={pageOneMonthsOfYear} />
          </div>
          <div className={cnCalendarMixLayout('Page')}>
            <CalendarToggler
              className={cnCalendarMixLayout('Label')}
              nextOnClick={handleNext}
              label={pageTwoLabel}
              onLabelClick={on}
            />
            <Calendar10Years years={pageTwoMonthsOfYear} />
          </div>
        </div>
        <CalendarAdditionalControls
          renderAdditionalControls={renderAdditionalControls}
          currentVisibleDate={currentVisibleDate}
        />
      </>
    );
  }

  return (
    <div {...otherProps} className={cnCalendarMixLayout({ view }, [className])} ref={ref}>
      <Calendar10YearSlider
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
          <Calendar10Years years={pageOneMonthsOfYear} />
        </div>
        <div className={cnCalendarMixLayout('Page')}>
          <CalendarLabel
            className={cnCalendarMixLayout('Label')}
            label={pageTwoLabel}
            onClick={on}
            cursor="pointer"
          />
          <Calendar10Years years={pageTwoMonthsOfYear} />
        </div>
      </div>
      <CalendarAdditionalControls
        renderAdditionalControls={renderAdditionalControls}
        currentVisibleDate={currentVisibleDate}
      />
    </div>
  );
});
