import React, { forwardRef, useEffect } from 'react';
import { addYears, startOfDecade } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { Calendar10Years } from '../Calendar10Years/Calendar10Years';
import { Calendar100YearSlider } from '../Calendar100YearSlider/Calendar100YearSlider';
import { CalendarAdditionalControls } from '../CalendarAdditionalControls/CalendarAdditionalControls';
import { CalendarLabel } from '../CalendarLabel/CalendarLabel';
import { CalendarToggler } from '../CalendarToggler/CalendarToggler';
import {
  CalendarTypeComponent,
  getDecadeTitle,
  getHandleSelectDate,
  getYearsOfDecade,
  isEqualYear,
  moveTypes,
  useCurrentVisibleDate,
} from '../helpers';
import { CalendarPropView, CalendarPropViewDefault } from '../helpers/types';
import { cnCalendarMixLayout } from '../mixs';

export const CalendarTypeYear: CalendarTypeComponent<'year'> = forwardRef((props, ref) => {
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

  useEffect(() => {
    onMove?.(moveTypes[0]);
  }, []);

  const [currentVisibleDate, setCurrentVisibleDate] = useCurrentVisibleDate({
    currentVisibleDate: currentVisibleDateProp,
    maxDate,
    minDate,
    value,
    startOfUnit: startOfDecade,
    onChangeCurrentVisibleDate,
  });

  const handleSelectDate = getHandleSelectDate({
    minDate,
    maxDate,
    value,
    onChange,
    onChangeRange,
    isEqualUnit: isEqualYear,
  });

  const pageOneYearsOfDecade = getYearsOfDecade({
    date: currentVisibleDate,
    onChange: handleSelectDate,
    value,
    events,
    minDate,
    maxDate,
    locale,
  });

  const pageOneLabel = getDecadeTitle(currentVisibleDate);

  const handleNext = () => setCurrentVisibleDate(addYears(currentVisibleDate, 10));
  const handlePrev = () => setCurrentVisibleDate(addYears(currentVisibleDate, -10));

  if (view === CalendarPropView[0]) {
    return (
      <div {...otherProps} className={cnCalendarMixLayout({ view }, [className])} ref={ref}>
        <CalendarToggler
          className={cnCalendarMixLayout('Label')}
          prevOnClick={handlePrev}
          nextOnClick={handleNext}
          label={pageOneLabel}
        />
        <Calendar10Years years={pageOneYearsOfDecade} />
        <CalendarAdditionalControls
          renderAdditionalControls={renderAdditionalControls}
          currentVisibleDate={currentVisibleDate}
        />
      </div>
    );
  }

  const pageTwoCurrentVisibleDate = addYears(currentVisibleDate, 10);

  const pageTwoYearsOfDecade = getYearsOfDecade({
    date: pageTwoCurrentVisibleDate,
    onChange: handleSelectDate,
    value,
    events,
    minDate,
    maxDate,
    locale,
  });

  const pageTwoLabel = getDecadeTitle(pageTwoCurrentVisibleDate);

  if (view === CalendarPropView[1]) {
    return (
      <>
        <div {...otherProps} className={cnCalendarMixLayout({ view }, [className])} ref={ref}>
          <div className={cnCalendarMixLayout('Page')}>
            <CalendarToggler
              className={cnCalendarMixLayout('Label')}
              prevOnClick={handlePrev}
              label={pageOneLabel}
            />
            <Calendar10Years years={pageOneYearsOfDecade} />
          </div>
          <div className={cnCalendarMixLayout('Page')}>
            <CalendarToggler
              className={cnCalendarMixLayout('Label')}
              nextOnClick={handleNext}
              label={pageTwoLabel}
            />
            <Calendar10Years years={pageTwoYearsOfDecade} />
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
      <Calendar100YearSlider
        className={cnCalendarMixLayout('Slider')}
        currentVisibleDate={currentVisibleDate}
        onChange={setCurrentVisibleDate}
        value={value}
        locale={locale}
      />
      <div className={cnCalendarMixLayout('PageWrapper')}>
        <div className={cnCalendarMixLayout('Page')}>
          <CalendarLabel className={cnCalendarMixLayout('Label')} label={pageOneLabel} />
          <Calendar10Years years={pageOneYearsOfDecade} />
        </div>
        <div className={cnCalendarMixLayout('Page')}>
          <CalendarLabel className={cnCalendarMixLayout('Label')} label={pageTwoLabel} />
          <Calendar10Years years={pageTwoYearsOfDecade} />
        </div>
      </div>
      <CalendarAdditionalControls
        renderAdditionalControls={renderAdditionalControls}
        currentVisibleDate={currentVisibleDate}
      />
    </div>
  );
});
