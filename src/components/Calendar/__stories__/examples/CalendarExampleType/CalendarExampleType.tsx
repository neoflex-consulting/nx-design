import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Calendar } from '../../../Calendar';

export const CalendarExampleTypeYear = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar type="year" />
    </StoryBookExample>
  );
};

export const CalendarExampleTypeMonth = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar type="month" />
    </StoryBookExample>
  );
};

export const CalendarExampleTypeDate = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar type="date" />
    </StoryBookExample>
  );
};

export const CalendarExampleTypeCalendar = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar type="date-time" />
    </StoryBookExample>
  );
};

export const CalendarExampleTypeTime = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar type="time" />
    </StoryBookExample>
  );
};
