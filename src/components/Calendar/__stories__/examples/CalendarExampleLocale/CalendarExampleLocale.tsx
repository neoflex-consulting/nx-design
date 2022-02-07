import React from 'react';
import frLocale from 'date-fns/locale/fr';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Calendar } from '../../../Calendar';

const CalendarLocale = {
  ...frLocale,
  words: {
    hours: 'H',
    minutes: 'Min',
    seconds: 'S',
  },
};

export const CalendarExampleLocale = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar type="date-time" locale={CalendarLocale} />
    </StoryBookExample>
  );
};
