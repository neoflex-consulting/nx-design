import React from 'react';
import { startOfWeek } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Calendar } from '../../../Calendar';

export const CalendarExampleViewClassic = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar view="classic" />
    </StoryBookExample>
  );
};

export const CalendarExampleViewBook = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar view="book" />
    </StoryBookExample>
  );
};

export const CalendarExampleViewSlider = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar view="slider" />
    </StoryBookExample>
  );
};

export const CalendarExampleCurrent = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar currentVisibleDate={startOfWeek(new Date(), { locale: ruLocale })} />
    </StoryBookExample>
  );
};
